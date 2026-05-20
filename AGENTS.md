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
The branding is a "Psychedelic-Corporate" or "Immersive Minimalist" aesthetic, inspired by Meow Wolf.
*   **Foundation:** Deep Plum/Black (`#0F0016`) for an atmospheric, "void-like" warehouse feel.
*   **Primary Accent:** Metallic Gold (`#D4AF37`) for critical UI elements, buttons, and "glowing" highlights.
*   **Secondary Accents:** Deep Purple (`#4B006E`) and subtle gradients to create depth.
*   **Typography:** Bold, high-contrast, often all-caps headers. Use 'Segoe UI', Tahoma, or other clean sans-serifs in maximalist sizes.
*   **Layout:** "Bento Box" style grids, overlapping elements, and non-traditional spacing to break the standard grid.

## 4. Product Workflows & Logic
### The "How it Works" Process
The website acts as a **Digital Portal**. The 4-step process is framed as "Rearranging Your Reality":
1.  **Select Your Base:** Flooring/Rugs.
2.  **The Heavy Hitters:** Large furniture selection.
3.  **The Dimensional Shift:** The "Fun Shui Team" (staff) moves items, allowing the participant to remain in "the flow."
4.  **The Finishing Glow:** Sips and accessories.

### Booking Model
*   **Model:** Individual Tickets (with group bucketing/naming).
*   **Wine:** Integral to the experience ("Sip and Design"). To-go wine sales are secondary and not a primary website feature.

## 5. Directory Structure
*   `/website`: The main React application.
*   `/docs/brainstorms`: Requirements documents and design notes.
*   `business.html`: The static business model presentation.
*   `logo.png`: Located in `website/public/logo.png`.

## 6. Development Mandates
*   **Immersive First:** The UI should feel like a destination, not just a page. Use dark backgrounds, gradients, and subtle animations (glow, glitch, or hover states).
*   **Maximalist Energy:** Don't be afraid of large typography or bold imagery. Mirror the sensory density of the Meow Wolf experience.
*   **Conversion First:** Despite the immersive aesthetic, the primary goal is still group bookings. The "Book" and "Call" buttons must remain high-contrast and easy to find.
*   **Standardized Styling:** Do NOT introduce Tailwind or other CSS frameworks without explicit instruction. Maintain the existing Vanilla CSS variables.
*   **GitHub CLI Management:** The user has multiple usernames configured in `gh` CLI. Whenever using the `gh` tool, you MUST check `gh auth status`. If the active user for `github.com` is not `bmacer`, you MUST perform a `gh auth switch --hostname github.com --user bmacer` before proceeding with any repository operations (pushing, creating PRs, etc.).
*   **Document Maintenance:** Agents MUST keep this `AGENTS.md` file updated. Whenever a significant architectural decision, branding change, or workflow shift is recommended and approved, this file should be updated to reflect the new state of the project. This is the living source of truth.
