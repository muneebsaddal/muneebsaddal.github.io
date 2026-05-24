# Portfolio Overhaul Design

Date: 2026-05-24

## Goal

Overhaul the current Astro portfolio into a premium dark monochrome portfolio for Muhammad Muneeb Arshad. The site should present him as a Data Scientist and AI Systems Engineer who builds production computer vision systems and AI automation systems, using the latest Notion v5 profile and current GitHub project links as the content source.

## Approved Direction

The approved design direction is a monochrome, premium, production-AI portfolio.

- Visual style: near-black, graphite, warm off-white, and muted gray.
- Accent usage: no bright accent color system; rely on contrast, type, borders, spacing, and proof panels.
- Display font: Newsreader.
- Body and UI font: a polished sans such as Manrope.
- Tone: executive, precise, production-focused, and proof-heavy.
- Core message: "Production AI, made inspectable."

## Audience

The site should work for both:

- AI/ML and computer vision hiring managers who need to see technical depth.
- Freelance or client prospects who need proof that Muneeb can deliver production automation and AI systems.

The design should avoid looking like a generic developer template or a colorful SaaS landing page.

## Content Source

Use the Notion v5 "detailed_cv_updated" profile as the primary content source. The portfolio should update the old "Data Analyst" positioning to:

- Data Scientist
- AI Systems Engineer
- Computer Vision engineer
- AI automation / LangGraph systems builder

Use GitHub public repositories for project links and recency. Current known high-priority repositories include:

- `AI-Voice-Notes-to-Content`
- `Adaptive-AI-Office-Space-Planner`
- `n8n-workflows`
- `AI-Workflow-Automation-Agent`
- `AI-Business-Automation-Platform`
- `Padel-Analytics-System`
- `AI-Architecture-Plan-Auditor`
- `X-ray-Spine-Segmentation`
- `Deterministic-AI-Processor`
- `RAG-Document-QA-System`
- `retail-sales-data-analytics`
- `financial-performace-dashboard`
- `opensky-flight-data-analysis`

## Homepage Structure

Use a hybrid story structure:

1. Hero
   - Headline: "Production AI, made inspectable."
   - Supporting copy: Muneeb builds computer vision and AI automation systems that move beyond prototypes, including validated model pipelines, schema-governed agents, traceable workflows, dashboards, and production-ready integrations.
   - Primary links: GitHub, LinkedIn, email.

2. What I Build
   - Two main lanes:
     - Computer Vision Systems
     - AI Automation Systems
   - Each lane should include concise proof points and representative technologies.

3. Featured Systems
   - Large case-study cards with proof screens.
   - Balance computer vision and AI automation.
   - Suggested first set:
     - AI Business Automation Platform
     - Autonomous AI Developer Agent or AI Workflow Automation Agent
     - Padel Analytics System
     - AI Architecture Plan Auditor
     - X-ray Spine Segmentation or medical/industrial vision work

4. Project Archive
   - Smaller cards for additional projects.
   - Include category, stack, short outcome, and GitHub link.

5. Experience
   - Use the latest Notion v5 experience:
     - Data Scientist, Elunic GmbH, December 2025 - Present
     - Freelance AI Engineer, Upwork, 2025 - Present
     - Software Engineer, Emumba, March 2022 - November 2022
     - Managing Partner, Floreat Enterprises, 2020 - 2025
     - Machine Learning Research Assistant, TUKL-NUST R&D Centre, May 2019 - July 2019

6. Education and Certifications
   - NUST BS Computer Science.
   - Machine Learning Specialization.
   - MERN Stack certificate.
   - Bootstrap 4 certificate.
   - Microsoft Office Specialist Master Certification.

7. Contact
   - Short closing pitch.
   - GitHub, LinkedIn, email.

## Screenshot And Proof Strategy

Use hybrid proof screens:

- For UI-heavy projects, use real screenshots where they can be captured from the repo or existing assets.
- For backend-heavy projects, create designed monochrome proof panels that show:
  - LangGraph-style traces
  - workflow diagrams
  - API response panels
  - validation states
  - dashboard summaries
  - execution timelines
  - repo/source links

The proof panels should be visually consistent with the monochrome direction and should not pretend to be real screenshots when they are conceptual representations.

## Component Design

The current Astro component architecture can remain, but content needs a richer config model.

Recommended components:

- `Header.astro`: slim fixed/ambient nav with monochrome styling.
- `Hero.astro`: full viewport or near-full viewport premium type-led hero.
- `BuildLanes.astro`: two-lane section for Computer Vision and AI Automation.
- `FeaturedProjects.astro`: large proof-card section.
- `ProjectArchive.astro`: compact project grid.
- `Experience.astro`: updated premium timeline/list.
- `Education.astro`: compact credentials section.
- `Footer.astro`: closing contact strip.

The existing `Projects.astro` can either be replaced by `FeaturedProjects.astro` plus `ProjectArchive.astro`, or refactored into a richer project component.

## Data Model

Update `src/config.ts` so projects can include:

- `name`
- `category`
- `description`
- `outcome`
- `link`
- `skills`
- `featured`
- `proofType`
- `proofLabel`
- optional screenshot/proof asset path

Keep content centralized in `src/config.ts` unless the implementation becomes too large, in which case extract typed data into a dedicated file while preserving the simple editing story.

## Styling Rules

- Use Tailwind CSS v4 utilities and global CSS variables where useful.
- Use monochrome colors only: black, graphite, off-white, muted gray, warm paper.
- Avoid gradient orbs, colorful palettes, and decorative purple/blue SaaS aesthetics.
- Avoid rounded large pill-heavy UI except for small metadata tags.
- Use thin borders, disciplined spacing, and premium typography.
- Keep cards restrained and rectangular; no nested cards.
- Ensure mobile layouts remain readable and text never overlaps.

## Verification

Implementation should be verified with:

- `npm run build`
- Browser review of the local site
- Desktop and mobile viewport checks
- Visual confirmation that proof panels/screenshots render and text fits

