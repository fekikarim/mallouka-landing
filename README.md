# Mallouka Motors Landing Page

A production-ready, premium corporate landing page for Mallouka Motors (formerly Allo Casse Auto), built with Next.js 16, React 19, TypeScript, and TailwindCSS.

## Features

- **Multi-language Support**: English, French, and Arabic with RTL support
- **16 Sections**: Hero, Brands, Statistics, About, Timeline, Services, Process, Why Choose Us, Workshop, Gallery, Testimonials, FAQ, Contact, Maps, and Footer
- **Premium Design**: Blue theme (#2d96da) matching the official logo
- **Animations**: Framer Motion for smooth scroll reveal and hover effects
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **SEO Optimized**: Metadata, robots.txt, sitemap, and structured data
- **Accessibility**: WCAG compliance with semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Forms**: React Hook Form + Zod
- **Carousels**: Embla Carousel

## Project Structure

```
mallouka-landing/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      # Locale-specific layout with SEO
│   │   └── page.tsx        # Home page with all sections
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout (redirects to /en)
│   └── sitemap.ts         # Sitemap generation
├── assets/
│   ├── company/            # Company images and videos
│   └── logo/               # Logo files
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      # Navigation with language switcher
│   │   └── footer.tsx      # Footer with company info
│   └── ui/
│       ├── button.tsx      # Button component
│       ├── card.tsx        # Card component
│       ├── container.tsx   # Container component
│       ├── icon-wrapper.tsx # Icon wrapper component
│       ├── input.tsx       # Input and textarea components
│       ├── section.tsx     # Section wrapper component
│       └── typography.tsx # Typography components
├── data/
│   ├── company.ts          # Company information
│   ├── services.ts        # Services data
│   ├── brands.ts           # Automotive brands
│   ├── testimonials.ts     # Customer reviews
│   ├── faqs.ts             # FAQ data
│   ├── gallery.ts          # Gallery data
│   ├── statistics.ts       # Company statistics
│   └── timeline.ts         # Company history
├── messages/
│   ├── en.json             # English translations
│   ├── fr.json             # French translations
│   └── ar.json             # Arabic translations
├── sections/
│   ├── hero.tsx            # Hero section
│   ├── brands.tsx          # Brands carousel
│   ├── statistics.tsx      # Statistics with animated counters
│   ├── about.tsx           # About company
│   ├── timeline.tsx        # Company timeline
│   ├── services.tsx        # Services section
│   ├── process.tsx         # Engine import process
│   ├── why-choose.tsx      # Why choose us
│   ├── workshop.tsx        # Mechanical workshop
│   ├── gallery.tsx         # Gallery with lightbox
│   ├── testimonials.tsx    # Testimonials
│   ├── faq.tsx             # FAQ accordion
│   ├── contact.tsx         # Contact form
│   └── maps.tsx            # Google Maps
├── animations/
│   ├── variants.ts         # Framer Motion variants
│   └── scroll-reveal.tsx   # Scroll reveal component
├── lib/
│   └── utils.ts            # Utility functions
├── i18n.ts                 # next-intl configuration
├── middleware.ts           # Next.js middleware for i18n
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mallouka-landing
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Build for production:
```bash
npm run build
```

## Start Production Server

Start the production server:
```bash
npm start
```

## Language Switching

The site supports three languages:
- English: `/en`
- French: `/fr`
- Arabic: `/ar` (with RTL support)

Use the language switcher in the navbar to change languages.

## Sections

1. **Hero**: Company introduction with CTAs
2. **Brands**: 25+ automotive brand logos
3. **Statistics**: Animated counters (23+ years, 200+ engines, etc.)
4. **About**: Company description, mission, vision, values
5. **Timeline**: Company history (2003 → 2012 → 2020)
6. **Services**: 10+ service cards with icons
7. **Process**: Engine import process steps
8. **Why Choose Us**: 8 key differentiators
9. **Workshop**: Mechanical workshop information
10. **Gallery**: Image/video gallery with lightbox
11. **Testimonials**: Customer reviews
12. **FAQ**: Accordion with common questions
13. **Contact**: Contact form with validation
14. **Maps**: Google Maps for both branches
15. **Footer**: Company info, links, social media

## Color Theme

Primary color: `#2d96da` (Blue)

The theme includes:
- Primary: Blue (#2d96da)
- Secondary: Dark slate (#1e293b)
- Accent: Amber (#f59e0b)
- Neutral: Gray scale

## SEO

The site includes:
- Dynamic metadata for each locale
- OpenGraph tags
- Twitter card tags
- Structured data (JSON-LD) for Local Business
- robots.txt
- sitemap.xml

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios (4.5:1 minimum)
- Alt text for images
- Screen reader support

## Performance

- Next.js Image optimization
- Code splitting with dynamic imports
- Static rendering where appropriate
- Font optimization with next/font
- Lazy loading for animations

## Future Improvements

- Add contact form backend integration
- Implement real WhatsApp integration
- Add more gallery images
- Integrate real Google Maps with actual coordinates
- Add blog/news section
- Implement customer account system
- Add online quote request system
- Integrate payment gateway for online orders

## Contact

- **Email**: malloukamotors21@gmail.com
- **Phone**: +216 24 270 888
- **WhatsApp**: +216 44 511 011
- **Branch 1**: Rue Ibn El Jazzar, Bhar Lazreg, La Marsa
- **Branch 2**: Rue Jaber Ibn Hayen, Tunis 2070

## License

© 2024 Mallouka Motors. All rights reserved.
