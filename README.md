# Next-Gen Learning Dashboard

A futuristic, high-fidelity education platform prototype built for the Frontend Intern Challenge. It features hardware-accelerated animations, zero layout shifts, and a buttery-smooth user experience powered by efficient, server-rendered data.

## 🚀 Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Database/BaaS**: Supabase
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏗 Architectural Choices

### Server Components vs Client Components
To ensure maximum performance and adhere to Next.js best practices:
- **`page.tsx` (Server Component)**: Handles the secure connection to Supabase via `@supabase/ssr` and fetches the initial course data. This keeps our database logic completely off the client and reduces the initial JavaScript bundle size.
- **`BentoGrid.tsx` & Children (Client Components)**: Because the dashboard relies heavily on complex interactivity (Framer Motion animations, layout shifts, state management for tabs), these are marked with `"use client"`. The server-fetched data is passed down as props to these interactive islands.

### Semantic HTML & Zero Layout Shifts
- Replaced generic `div` soup with `<main>`, `<aside>`, `<nav>`, `<section>`, and `<article>`.
- All hover states (like the 1-2% scale up on Bento tiles) use Framer Motion's `scale` property combined with `type: "spring"`. This strictly leverages the GPU (`transform`) and completely avoids triggering browser layout recalculations (repaints/reflows).
- Background textures (grain/mesh) use pseudo-elements (`::before`) or absolute positioning with `pointer-events: none` to keep the DOM tree clean.

### Responsive Strategy
- **Mobile (< 768px)**: Sidebar shifts to a fixed bottom navigation bar using CSS `safe-area` considerations. The grid stacks vertically.
- **Tablet (768px - 1024px)**: The sidebar shrinks to an icon-only `<aside>` to preserve screen real estate, and the Bento grid adopts a 2-column layout.
- **Desktop (> 1024px)**: Full expanded sidebar and 3-column Bento grid.

## 🛠 Setup Instructions

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env.local` file based on the `.env.example` template and add your Supabase credentials.
4. Run `npm run dev` to start the development server.

## 💾 Database Schema

The dashboard requires a Supabase PostgreSQL database with the following `courses` table:
```sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```
