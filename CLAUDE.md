# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Design (Important!)
**Design Philosophy**: Modern, very minimalistic design, apple like design, without unnecessary noise. This landing page needs to look good in mobile in additon to desktop.

## Architecture Overview

This is a Next.js 15 marketing landing page for Harmony, an AI therapy application. The codebase uses modern React patterns with TypeScript and Tailwind CSS v4.

### Key Architectural Decisions

1. **Component Architecture**
   - Server Components by default for static content (pages)
   - Client Components (`"use client"`) only for interactive elements (forms, navigation, animations)
   - Components organized by feature domain in `/components/home/` and `/components/layout/`

2. **Styling System**
   - Tailwind CSS v4 with custom theme values defined in `globals.css`
   - Custom colors: `harmony-blue`, `harmony-dark-gray`, `harmony-light-gray`
   - Two font families: Quicksand (sans) and Lora (serif)
   - Mobile-first responsive design with consistent breakpoints

3. **Browser-Specific Handling**
   - Safari detection in HeroSection for video fallback to static image
   - Video backgrounds with fallback patterns for compatibility

4. **Animation Patterns**
   - Intersection Observer for scroll-triggered animations
   - CSS animations defined in `globals.css` (fade-in, pulse effects)
   - Staggered animations in component lists

5. **External App Integration**
   - Authentication links point to `https://app.harmonyappai.com`
   - Query parameters used for tracking (`?source=website`)

## Important Notes from Cursor Rules

- Always use Tailwind CSS v4 syntax (not older versions)
- Use `@import "tailwindcss"` instead of individual layer imports
- Custom theme values should be defined with `@theme` in CSS