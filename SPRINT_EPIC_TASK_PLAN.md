# IGObuyback Sprint/Epic + Tasks Plan

## Overview
This document contains a practical sprint-oriented execution plan for the IGObuyback website transformation, reflecting the advanced master plan strategy.

- Duration: 4 sprints (2 weeks each)
- Scope: UI, UX, live rates, seller/buyer flows, quality, marketing, growth
- Objective: convert into production-grade, competitive marketplace

---

## Sprint 1: Core Platform Launch (MVP)
### Epic 1: Homepage and branding
- Task 1.1: Build enhanced homepage sections
  - Hero with direct sourcing / Grade A / real-time data
  - “26 verticals” highlight strip
- Task 1.2: Add sticky top bar with live ticker and payment guarantee
- Task 1.3: Add mission/vision block
- Task 1.4: Add partners/trust block (Zepto/Blinkit/DMart/Instamart/Taj)

### Epic 2: Live Market Rate Engine
- Task 2.1: Build endpoint `/api/market/live` (mock initially)
- Task 2.2: Enable `MarketTicker` component in layout
- Task 2.3: Add 30s refresh + fallback caching

### Epic 3: Vertical product catalog
- Task 3.1: Create `src/config/verticals.ts` with 26 vertical rows
- Task 3.2: Build `ProductsSection` v2 with filters
- Task 3.3: Link each vertical to detail page

### Epic 4: QA + launch
- Task 4.1: Run `npm run build` and fix issues
- Task 4.2: Lighthouse > 90 checks
- Task 4.3: Deploy on Vercel and validate URL

---

## Sprint 2: Seller and Buyer Experience
### Epic 5: Sell onboarding workflow
- Task 5.1: Build `/sell` page form (category, qty, location, quality, docs)
- Task 5.2: Build seller dashboard stub (listings + status)
- Task 5.3: Add referral program link and tier design in dashboard

### Epic 6: Buy flow and marketplace match
- Task 6.1: Create `/buy` query flow (search, category filter, price checks)
- Task 6.2: Add “Request Quote” action with quick booking article
- Task 6.3: Add list of partners to fulfill orders

### Epic 7: Quality and traceability
- Task 7.1: Build `/quality` page content from master plan
- Task 7.2: Add “Grade A certification” cards + traceability steps
- Task 7.3: Add QR traceability sample (static for initial launch)

### Epic 8: SEO + Analytics baseline
- Task 8.1: Add SEO metadata for all pages (title/description, OG)
- Task 8.2: Add JSON-LD schema for Organization and Service
- Task 8.3: Configure GA / Matomo basic tracking

---

## Sprint 3: Scale, performance, and market readiness
### Epic 9: Performance optimization
- Task 9.1: Add Vite manual chunk splitting for heavy modules
- Task 9.2: Optimize image assets + lazy load
- Task 9.3: Add prefetch for next routes

### Epic 10: Advanced live market data
- Task 10.1: Add market history chart (7-day, 30-day) in `MarketSection`
- Task 10.2: Add “price alerts subscribe” (WhatsApp link + email capture)
- Task 10.3: Add local city rate switching and sorting

### Epic 11: Trust & conversion
- Task 11.1: Add “case study stories” for Zepto/Blinkit etc in home
- Task 11.2: Add testimonials and farmer quotes
- Task 11.3: Add “100% payment in 24h” guarantee modal

### Epic 12: Partner onboarding pipeline
- Task 12.1: Build partner registration page with documents
- Task 12.2: Add call-to-action to partner page in top menu
- Task 12.3: Add partner backend stub (Form submission to email endpoint)

---

## Sprint 4: Refinement, testing, and launch readiness
### Epic 13: Localization and accessibility
- Task 13.1: Finish i18n for EN/TA/HI/KN across new components
- Task 13.2: Add keyboard / screen reader accessibility checks
- Task 13.3: Add translations for all key buttons/labels

### Epic 14: Testing and QA
- Task 14.1: Unit tests for core components (Hero, ticker, market section)
- Task 14.2: E2E tests for the sell/buy flow (Cypress / Playwright)
- Task 14.3: Regression test in staging and production rollout

### Epic 15: Business growth
- Task 15.1: Build blog/case study microsite
- Task 15.2: Build newsletter opt-in in footer
- Task 15.3: Release announcement and PR page

### Epic 16: Post-launch support
- Task 16.1: Monitor deployment logs, error tracking
- Task 16.2: Address user feedback on site speed and accuracy
- Task 16.3: Add next-phase roadmap for payment gateway & supply chain finance

---

## Release Checklist (Must be green)
- [x] UI and layout complete for primary flows
- [x] Live rate and market section running
- [x] 26 verticals and partner proof statuses in place
- [x] Seller/buyer flows working (CRUD + quote)
- [x] Quality/trust section visible
- [x] SEO and Lighthouse Pass
- [x] Vercel production deployed and smoke-tested

---

## Notes
- Keep driver data in `src/config/verticals.ts` for quick updates.
- Use `ADVANCED_SITE_MASTER_PLAN.md` as strategy reference.
- This file will be reviewed each sprint planning meeting.

