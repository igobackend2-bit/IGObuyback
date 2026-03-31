# IGObuyback Advanced Site Master Plan

## 1. Executive Summary

IGObuyback is being transformed into a leading digital mandi platform, designed to compete with and outperform modern agriculture and grocery marketplace businesses.

- Core mission: connect farmers/FPOs/aggregators/retailers directly with buyers via live mandi pricing and transparent settlement.
- Differentiators:
  - 26 product verticals (from vegetables to microgreens, spices, dry fruits, honey)
  - Live market rate engine
  - 100% on-time payment guarantee
  - Grade-A quality and traceability
  - Partner trust (Zepto, Blinkit, DMart, Instamart, Taj)

## 2. Target Audience

- Small/medium farmers and FPOs
- Aggregators, mandis, distributors
- Retailers, e-commerce grocery, foodservice brands
- Urban consumers and cloud kitchens buying bulk/quality produce

## 3. Competitive Landscape

Benchmark features from competing services:

- **NinjaCart / Jumbotail / DeHaat**: B2B farm-to-fork, AI rate discovery, fulfillment
- **BigBasket / Grofers / Zepto**: retail/instant-grocery logistics, vertical specialization
- **Superplum / Nutrigamy**: high-grade produce, traceability, cold-chain quality controls

IGObuyback unique stack:

1. Open supplier entry (anyone can sell)
2. Live mandi rates + trading engine
3. 26 vertical catalog (broad coverage)
4. “No pickup” connector model + partner network
5. Verified Grade-A product / quality standards page
6. Multi-language UX + referral structure

## 4. UX + Information Architecture

### Pages

- Home
- Sell (farmers inbound form)
- Buy (bulk orders)
- Live Market (ticker + chart + forecasts)
- Product Catalog (26 Verticals)
- Quality & Traceability
- Partners & Clients
- About (vision + mission)
- Resources (blog, FAQ, docs)
- Dashboard (for sellers and buyers)

### Home page modules

1. Sticky header: logo + live rate + 100% on-time badge + language + login
2. Hero: direct farmer trade, Grade-A, live rates
3. 3 Pillars: direct sourcing, quality, market intelligence
4. Live rate ticker + top commodities
5. 26 vertical cards
6. Seller journey + buyer journey
7. Quick lists (Zepto, Blinkit etc)
8. Featured metrics + testimonials
9. Content + SEO sections
10. CTA (sell now / buy now)

## 5. Feature Implementation

### 5.1 Live Market Rates

- API: `/api/market/live` & `/api/market/history`
- Frontend ticker component (`MarketTicker`) with auto-refresh and color change.
- High/low trend indicator, city-level, commodity-level.
- 30 sec refresh interval and failover to cached values.

### 5.2 Seller Flow

- Simple onboarding from `Sell` page (banded form): produce, quantity, location, vertical.
- Optional quality tag: Grade A, organic, specialty.
- Automated offer via competition, live matching in 3 steps.
- In-portal partner logistics chooser (no pickup by IGObuyback, partner connect).
- Dashboard: listing status, settlement status, documents.

### 5.3 Buyer Flow

- Browse by vertical + filter + real-time price.
- One-click bulk purchase with delivery partner selection.
- Supplier quality badges + traceability details.

### 5.4 Quality and Traceability

- page content:
  - Agrograde standards (Grade A definition)
  - Testing protocol (pesticide, water, soil, nutrients)
  - Traceability (QR scan chain, Superplum-style record)
  - “no forced ethylene” etc.

### 5.5 26 Vertical Catalog

- Data model in `src/config/verticals.ts`
- Each vertical page with:
  - category description
  - sample products
  - pricing insights
  - demand seasonality

## 6. Tech Stack and Architecture

- Frontend: React + Vite + Tailwind CSS + Framer Motion + React Router
- Backend: APIs (Node/Express or serverless endpoints) for market rates and orders
- Database: PostgreSQL (farmers / partners / orders) / Supabase optional
- Deployment: Vercel (via `vercel.json`) + CI build
- i18n: english, tamil, hindi, kannada

## 7. SEO and Growth

- Pages with strong keyword targets:
  - agriculture supply chain
  - direct farmer marketplace
  - 26 vertical produce marketplace
  - real-time mandi price tracking
- JSON-LD schema, Open Graph, canonical tags
- Content: blog about agri market insights + case studies
- CTAs for partner onboarding and bulk buyers

## 8. Operation and Go-to-Market

### 8.1 Partnerships
- Formalize tie-ups with Zepto, Blinkit, DMart, Instamart, Taj
- Highlight in homepage & about page

### 8.2 Communication
- Social channels (WhatsApp, Instagram, LinkedIn) links in footer and header
- Create “Success Stories” with early adopters

### 8.3 Metrics
- KPIs to track:
  - seller onboarding rate
  - orders transacted
  - payment success (T+1 ratio)
  - live rate updates subscriptions
  - SEO ranking for target keywords

## 9. Project Tasks (Kanban ready)

1. Finalize Vision + Mission text
2. Implement Live Market Rate components
3. Build 26 vertical catalog / product cards
4. Add Grade A quality / traceability section
5. Add trusted partner logos and case studies
6. Add unified Sell and Buy journeys
7. Add referral program and 100% payment guarantee UI
8. QA: build & run tests; performance; SEO
9. Deploy and validate (Vercel + site check)

## 10. Rollout Plan

- Week 1: UI skeleton + core pages + live ticker + hero
- Week 2: flows (sell/buy) + product catalog + partners + quality
- Week 3: SEO, analytics, brand trust, performance, user testing
- Week 4: launch, feedback loop + optimizations

---

## Call to Action

This markdown is now your advanced master implementation guide.  
Next step: integrate this plan into your backlog/tickets and assign to frontend/backend owners.

If you want, I can generate a second file with a specific JIRA-style sprint plan including tasks and acceptance criteria.