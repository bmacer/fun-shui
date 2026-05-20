# AGENTS.md - Fun Shui Project Context

Welcome to the **Fun Shui** repository. This document provides the essential context, architectural decisions, and stylistic mandates for all agents working on this project.

## 1. Project Overview
**Fun Shui** is an Asheville-based "ladies night out" business. It is a social, tactile experience where participants rearrange furniture in a warehouse setting.
*   **Tagline:** "Sip and Design"
*   **Core Hook:** Social connection and creative play.
*   **Target Audience:** Bachelorette parties, tourists, and corporate team-building groups.
*   **The "Reveal":** Participants receive a **digital 3D model** of their finished room and an **AI-generated highlight reel** (stretch goal).

## 2. Technical Stack
*   **Website:** Vite + React + TypeScript.
*   **Styling:** Vanilla CSS (located in `website/src/App.css` and `website/src/index.css`).
*   **Business Model:** A standalone `business.html` page in the root for quick presentation.
*   **Documentation:** Requirements and brainstorming are kept in `docs/brainstorms/`.

## 3. Brand & Visual Identity
The branding is inspired by the provided logo: a deep purple house with a gold hourglass/wine glass infinity symbol.
*   **Primary Purple:** `#4B006E` (Headers, footers, primary text)
*   **Metallic Gold:** `#D4AF37` (Accents, borders, buttons, highlights)
*   **Dark Plum:** `#2D0044` (Hero backgrounds, immersive sections)
*   **Cream Background:** `#FDFCF0` (Main page background for a vintage/boutique feel)
*   **Font:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif (Clean and modern).

## 4. Product Workflows & Logic
### The "How it Works" Process
The website and business materials MUST reflect these four steps:
1.  **Choose Your Base:** Selecting flooring/rugs.
2.  **Pick the Heavy Hitters:** Selecting large furniture.
3.  **The Heavy Lifting:** The "Fun Shui Team" (staff) moves the large items for the participants.
4.  **Sip and Walk:** Participants sip wine while accessorizing with smaller decor.

### Booking Model
*   **Model:** Individual Tickets (with group bucketing/naming).
*   **Wine:** Integral to the experience ("Sip and Design"). To-go wine sales are secondary and not a primary website feature.

## 5. Directory Structure
*   `/website`: The main React application.
*   `/docs/brainstorms`: Requirements documents and design notes.
*   `business.html`: The static business model presentation.
*   `logo.png`: Located in `website/public/logo.png`.

## 6. Development Mandates
*   **Keep it Tactile:** The UI should feel elegant but "uniquely Asheville"—warm, vintage-inspired, and social.
*   **Conversion First:** The primary goal of the website is to drive group bookings.
*   **Standardized Styling:** Do NOT introduce Tailwind or other CSS frameworks without explicit instruction. Maintain the existing Vanilla CSS variables.
*   **GitHub CLI Management:** The user has multiple usernames configured in `gh` CLI. Whenever using the `gh` tool, you MUST check `gh auth status`. If the active user for `github.com` is not `bmacer`, you MUST perform a `gh auth switch --hostname github.com --user bmacer` before proceeding with any repository operations (pushing, creating PRs, etc.).
*   **Document Maintenance:** Agents MUST keep this `AGENTS.md` file updated. Whenever a significant architectural decision, branding change, or workflow shift is recommended and approved, this file should be updated to reflect the new state of the project. This is the living source of truth.
