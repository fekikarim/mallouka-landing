"use client";

import React, { useState, useEffect, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff, RefreshCw, Wrench } from "lucide-react";

export interface OptimizedImageProps
  extends Omit<ImageProps, "onError" | "onLoad"> {
  fallbackText?: string;
  fallbackIcon?: "image" | "gear" | "service";
  showRetry?: boolean;
  showSkeleton?: boolean;
  containerClassName?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackText,
  fallbackIcon = "gear",
  showRetry = true,
  showSkeleton = true,
  fill,
  width,
  height,
  priority = false,
  unoptimized,
  ...rest
}) => {
  const isSvg = typeof src === "string" && (src.endsWith(".svg") || src.includes(".svg?"));
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [useDirectFallback, setUseDirectFallback] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Check if image is already cached/complete on mount or key change
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoading(false);
      setHasError(false);
    }
  }, [retryKey, src]);

  // Reset states if src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setUseDirectFallback(false);
  }, [src]);

  // Auto-recover on network reconnection
  useEffect(() => {
    const handleOnline = () => {
      if (hasError) {
        setHasError(false);
        setUseDirectFallback(false);
        setIsLoading(true);
        setRetryKey((prev) => prev + 1);
      }
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [hasError]);

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasError(false);
    setUseDirectFallback(false);
    setIsLoading(true);
    setRetryKey((prev) => prev + 1);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    // If Next.js image optimizer had an issue with the query, fall back to direct unoptimized asset
    if (!useDirectFallback) {
      setUseDirectFallback(true);
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const renderIcon = () => {
    switch (fallbackIcon) {
      case "service":
        return <Wrench className="w-8 h-8 text-primary-400/80 animate-pulse" />;
      case "image":
        return <ImageOff className="w-8 h-8 text-slate-500" />;
      case "gear":
      default:
        return (
          <svg
            className="w-8 h-8 text-primary-400/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
          </svg>
        );
    }
  };

  // Preserve container aspect ratio so layout never collapses (prevents CLS)
  const containerStyle: React.CSSProperties =
    !fill && width && height
      ? { aspectRatio: `${width} / ${height}` }
      : {};

  const wrapperClasses = fill
    ? `absolute inset-0 w-full h-full ${containerClassName}`
    : `relative block w-full ${containerClassName}`;

  const hasCustomOpacity = className.includes("opacity-");

  return (
    <div className={wrapperClasses} style={containerStyle}>
      {/* Loading Skeleton */}
      {showSkeleton && isLoading && !hasError && (
        <div className="absolute inset-0 z-10 bg-slate-900/60 backdrop-blur-xs animate-pulse flex items-center justify-center rounded-[inherit] overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer bg-[length:200%_100%]" />
        </div>
      )}

      {/* Error / Offline Fallback */}
      {hasError ? (
        <div
          role="img"
          aria-label={alt || "Image non disponible"}
          className="absolute inset-0 w-full h-full min-h-[160px] rounded-[inherit] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col items-center justify-center p-4 text-center z-10 select-none"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(71,167,227,0.15)]">
            {renderIcon()}
          </div>
          <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase mb-0.5">
            Mallouka Motors
          </span>
          <p className="text-[11px] text-slate-400 max-w-[220px] line-clamp-2">
            {fallbackText || alt || "Aperçu disponible en ligne"}
          </p>

          {showRetry && (
            <button
              onClick={handleRetry}
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/60 text-slate-300 hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm"
            >
              <RefreshCw className="w-3 h-3 text-primary-400" />
              <span>Réessayer</span>
            </button>
          )}
        </div>
      ) : (
        <Image
          ref={imgRef}
          key={`${retryKey}-${useDirectFallback ? "direct" : "opt"}`}
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          priority={priority}
          unoptimized={unoptimized ?? (useDirectFallback || isSvg)}
          style={{
            ...(!fill && width && height ? { aspectRatio: `${width} / ${height}` } : {}),
            ...rest.style,
          }}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? "opacity-0" : hasCustomOpacity ? "" : "opacity-100"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      )}
    </div>
  );
};
