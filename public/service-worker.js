/**
 * Mallouka Motors — Production PWA Service Worker (v3)
 * Comprehensive Offline Support, Multi-Tier Caching & Safe Fallbacks
 */

const CACHE_VERSION = "mallouka-v3";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const PAGES_CACHE = `${CACHE_VERSION}-pages`;
const IMAGES_CACHE = `${CACHE_VERSION}-images`;

const PRECACHE_ASSETS = [
  "/",
  "/fr",
  "/en",
  "/ar",
  "/manifest.json",
  "/icon.png",
  "/icon-192.png",
  "/favicon.ico",
  "/assets/logo/mallouka-motors-logo-transparent.svg",
];

// Offline HTML fallback for navigation when completely offline
const OFFLINE_HTML = `
<!DOCTYPE html>
<html lang="fr" class="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mallouka Motors — Mode Hors Ligne</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #020617;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      text-align: center;
    }
    .card {
      max-width: 480px;
      width: 100%;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.5rem;
      padding: 2.5rem 2rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
      backdrop-filter: blur(16px);
    }
    .icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 1.5rem;
      background: rgba(71, 167, 227, 0.12);
      border: 1px solid rgba(71, 167, 227, 0.3);
      border-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #47a7e3;
    }
    h1 { font-size: 1.65rem; font-weight: 700; margin-bottom: 0.75rem; color: #fff; }
    p { color: #94a3b8; font-size: 0.975rem; line-height: 1.6; margin-bottom: 1.75rem; }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.875rem 1.5rem;
      background: linear-gradient(135deg, #2d96da, #47a7e3);
      color: #fff;
      font-weight: 600;
      border-radius: 0.875rem;
      text-decoration: none;
      cursor: pointer;
      border: none;
      font-size: 1rem;
      box-shadow: 0 0 20px rgba(71, 167, 227, 0.35);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 0 28px rgba(71, 167, 227, 0.55); }
    .contacts {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .contact-link {
      color: #47a7e3;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="1" y1="1" x2="23" y2="23"></line>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
        <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12.01" y2="20"></line>
      </svg>
    </div>
    <h1>Vous êtes hors ligne</h1>
    <p>Aucune connexion Internet détectée. Mallouka Motors reste joignable directement par téléphone ou WhatsApp.</p>
    <button class="btn" onclick="window.location.reload()">Réessayer la connexion</button>
    <div class="contacts">
      <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700;">Assistance d'urgence</span>
      <a class="contact-link" href="tel:+21624270888">📞 Atelier & Service : +216 24 270 888</a>
      <a class="contact-link" href="tel:+21644511011">📞 Moteurs & Pièces : +216 44 511 011</a>
    </div>
  </div>
</body>
</html>
`.trim();

// 1. INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(PRECACHE_ASSETS).catch((err) => {
          console.warn("[SW] Precache non-critical warning:", err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// 2. ACTIVATE — Purge old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (!key.startsWith(CACHE_VERSION)) {
              console.log("[SW] Deleting old cache:", key);
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// 3. FETCH
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") return;

  // In local development, bypass caching completely so hot-reload and dev builds work smoothly
  if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
    return;
  }

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // A. Navigation (HTML Pages): Network-first with cache fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(PAGES_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          const fallbackLocale = await caches.match("/fr");
          if (fallbackLocale) return fallbackLocale;
          return new Response(OFFLINE_HTML, {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        })
    );
    return;
  }

  // B. Next.js Static Chunks (immutable hashed files): Cache-first
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // C. Next.js Image Optimizer: Network-first, only cache valid 200 image responses
  if (url.pathname.startsWith("/_next/image") || url.pathname.startsWith("/assets/")) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(IMAGES_CACHE).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          // Return standard network error response rather than poisoning with mismatched content
          return new Response(null, { status: 504, statusText: "Offline" });
        })
    );
    return;
  }

  // D. General Requests: Stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
