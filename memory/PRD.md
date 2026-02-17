# Pocket Grooming Website - Product Requirements Document

## Original Problem Statement
Build a design-forward, luxury-minimal corporate website for Pocket, a premium Indian grooming innovation brand. The website showcases Pocket Shaving Foam (PSF) - a 25ml micro-aerosol shaving foam. This is NOT an e-commerce site; primary action is lead generation via "Inquire Now" forms. Target audience: premium hospitality decision-makers, procurement teams, and institutional buyers.

## Architecture & Tech Stack
- **Frontend**: React 19 with React Router
- **Styling**: Custom luxury minimal design system (warm neutrals, Inter font, sharp edges, generous whitespace)
- **UI Components**: Shadcn UI components
- **Backend**: FastAPI (Python) - to be implemented
- **Database**: MongoDB - to be implemented
- **Form Handling**: Currently mocked, will integrate with backend

## User Personas
1. **Hotel/Hospitality Procurement Managers**: Looking for premium amenity suppliers
2. **Airline Supply Chain Teams**: Seeking TSA-compliant travel amenities
3. **Corporate Gifting Coordinators**: Need premium presentation for professional contexts
4. **Institutional Buyers**: Require scalable distribution with consistent quality

## Core Requirements (Static)
### Design System
- Luxury minimalist approach with warm neutral palette (#fffef2, #f6f5e8, #333, #666)
- Inter font family with strong typographic hierarchy
- Sharp edges (0px border radius on buttons)
- Generous spacing and whitespace
- Thin dividers and subtle borders
- No bright gradients or complex patterns

### Pages Required
1. **Home** - Hero, category intro, system architecture, product preview, use contexts, trust strip, CTA
2. **Product (PSF)** - Product details, foam quality, micro-aerosol system, specifications, scenarios
3. **Micro Grooming** - Category definition, problem/solution, FORMAT|FLOW|FUNCTION pillars, vision
4. **About** - Jaivanti Cosmetics heritage, manufacturing capability, Pocket vision
5. **Contact** - Lead capture form with database + email notification

### Key Features
- Sticky navigation with logo
- Responsive design (mobile-first)
- Contact form with dropdown requirement types
- Sample request option
- Placeholder image slots with defined dimensions
- Smooth scroll and micro-interactions

## What's Been Implemented (December 17, 2024)

### ✅ Phase 1: Frontend with Mock Data (Completed)
**Components Created:**
- Navigation component with logo integration and sticky behavior
- Footer component with site links and brand information
- Home page with 7 sections (hero, category, system architecture, product preview, use contexts, trust, CTA)
- Product page with 6 sections (hero, quality, system, specs table, scenarios, CTA)
- Micro Grooming page with 4 sections (hero, shift, pillars, vision)
- About page (heritage, capability, Pocket vision, CTA)
- Contact page with form (name, company, role, email, phone, city, requirement dropdown, message, sample checkbox)

**Design System:**
- Luxury minimal CSS architecture implemented
- Inter font family integrated
- Color system with warm neutrals
- Typography scale (hero-large: 72px, hero-medium: 48px, headings, body text)
- Button system (primary with border, secondary with underline animation, icon buttons)
- Layout system (containers, sections, spacing scale)
- Responsive breakpoints (1024px, 640px)

**Mock Data:**
- All content structured in `/app/frontend/src/data/mock.js`
- Contact form submissions stored in memory (will migrate to backend)
- Logo URL configured from customer assets

**Status:** All pages loading successfully with proper design implementation. Navigation, routing, and UI interactions working correctly.

## Prioritized Backlog

### P0 - Critical (Next Phase)
1. **Backend Development**
   - Contact form API endpoint (`POST /api/inquiries`)
   - MongoDB schema for inquiry submissions
   - Email notification integration for form submissions
   - Form validation and error handling

2. **Frontend-Backend Integration**
   - Replace mock contact form with real API calls
   - Add loading states and error handling
   - Success/error toast notifications

### P1 - High Priority
1. **Content Management**
   - Admin panel for viewing submitted inquiries
   - Export inquiries to CSV/Excel
   - Inquiry status tracking system

2. **Email Integration**
   - SMTP configuration for email notifications
   - Email templates for inquiry confirmations
   - Auto-responder to submitters

### P2 - Medium Priority
1. **Analytics & Tracking**
   - Google Analytics integration
   - Form conversion tracking
   - Page view analytics

2. **Performance Optimization**
   - Image optimization when real assets uploaded
   - Lazy loading for images
   - Code splitting for routes

3. **SEO & Meta Tags**
   - Page-specific meta descriptions
   - Open Graph tags for social sharing
   - Sitemap generation

## Next Tasks (Immediate)
1. Build backend API for contact form submission
2. Integrate email notification service
3. Connect frontend form to backend endpoint
4. Test end-to-end form submission flow
5. Add proper error handling and validation

## Notes
- Contact form currently stores submissions in mock data
- Image placeholders defined with recommended dimensions
- Logo integrated from customer assets
- No ecommerce functionality as per requirements
- Mobile-responsive design implemented
