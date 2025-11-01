# Ordaro Cloud POS - Marketing Website

Public-facing marketing website for Ordaro Cloud POS, built with Next.js 14 and the design system from `template-dashboard-main`.

## Features

- **Landing Page**: Hero section, POS features showcase, AI highlights, delivery system, and testimonials
- **POS Features Page**: Detailed information about all 14 POS modules
- **AI Features Page**: WhatsApp/Snapchat ordering, AI agent orchestrator, and AI insights
- **Delivery Features Page**: Rider management, GPS tracking, and route optimization
- **Pricing Page**: Subscription tiers and add-ons
- **Integrations Page**: Platform integrations and API documentation
- **Solutions Page**: Restaurant use cases, campus deployment, and enterprise solutions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Remix Icon
- **Theme**: Dark mode support with next-themes

## Getting Started

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ordaro-marketing/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── features/
│   │   │   ├── pos/page.tsx
│   │   │   ├── ai/page.tsx
│   │   │   └── delivery/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── integrations/page.tsx
│   │   ├── solutions/page.tsx
│   │   └── layout.tsx            # Root layout with Navbar & Footer
│   ├── components/
│   │   ├── marketing/            # Marketing-specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts              # Utility functions
```

## Configuration

Update `src/app/siteConfig.ts` to configure:
- Site name and description
- URL and metadata
- Navigation links
- Auth URLs (signup/signin)

## Integration Points

- **Sign Up**: Links to `ordaro-onboarding` app
- **Sign In**: Links to existing auth flow
- **API Documentation**: Links to API docs (configurable)

## Build

```bash
npm run build
# or
pnpm build
```

## License

Private - Ordaro Cloud POS

