# GDG RBU Website

A responsive React website for **Google Developer Groups (GDG) on campus, Ramdeobaba University**, built from the provided Figma design as my submission for the **GDG RBU Recruitment Drive 2026-27, Web Development (Frontend)** task.

The design is neo-brutalist: thick black borders, hard offset shadows, bright Google colors and a pixel heading font.

## Task requirements

| Requirement | Status | How it is covered |
| --- | --- | --- |
| Convert the Figma design into a React website | In progress | Home and Events pages are complete. Team and Gallery have their top sections built. The login screen is built as UI only |
| Responsive on mobile, tablet and desktop | Done | Mobile-first layouts with `sm`, `md` and `lg` breakpoints, and a hamburger menu below 768px |
| Deploy on Vercel | Not yet | See [Deployment](#deployment) |
| Well-structured GitHub repository with documentation | Done | This README, a clear folder structure and setup steps |
| Dark / Light mode | Done | Navbar toggle, class-based dark mode, see [Dark and light mode](#dark-and-light-mode) |
| Smooth animations and transitions | Done | See [Animations](#animations) |

Bonus features: TypeScript, AI-powered features and Next.js are not used. The project is plain React with Vite.

## Tech stack

- **React** with **Vite** (JavaScript, JSX): fast dev server and a simple build
- **Tailwind CSS v4** through the `@tailwindcss/vite` plugin: the design repeats a few styles (borders, shadows, colors) that map cleanly to theme tokens
- **React Router**: separate pages for Home, Events, Team, Gallery and the login screen

## Pages

| Route | Page | Status |
| --- | --- | --- |
| `/` | Home: hero, upcoming event, team intro, FAQs | Done |
| `/events` | Upcoming event and past event cards | Done |
| `/team` | Heading, domain tag buttons and team photo | Top section only |
| `/gallery` | EVIDENCE header with event filter buttons | Top section only |
| `/portfolio` | Login and sign-up form | UI only, no backend |

The navbar also has a **More** dropdown (Recruitment, Docs, Blogs, Links), a theme toggle and a **Join Us** button.

## Getting started

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── assets/       Images: logo, shapes strip, team photo, event posters
├── components/   Reusable pieces and Home page sections
├── data/         Content as data (events.js)
├── pages/        One file per route
├── App.jsx       Navbar, routes and footer
├── main.jsx      App entry, wrapped in BrowserRouter
└── index.css     Tailwind import, theme tokens, global styles
```

Components go in `src/components` and pages go in `src/pages`. A page is a full screen for one route, and a section is a piece of the Home page, which is why the Home sections are named `TeamSection` and `EventsSection`.

## Architecture and design decisions

- **Reusable building blocks.** `Card` carries the border, shadow and radius, and `Button` carries the border, shadow and hover effect. Sections build on them, so the long class strings are written once. `Accordion`, `PastEventCard`, `MoreMenu`, `ThemeToggle` and `TypingText` are single-purpose components.
- **One component, many tags.** `Button` takes an `as` prop, so the same styled button renders as a `<button>`, a router `Link` or a plain `<a>`. A `rounded` prop switches between sharp and rounded corners, because two conflicting Tailwind classes are not reliably resolved by their order.
- **Content as data.** Events, FAQs, nav links, social links and team tags live in arrays and are rendered with `.map()`, so adding an item never means copying JSX.
- **Theme tokens.** Colors, shadows and fonts are defined once in `src/index.css` under `@theme` and used as classes such as `bg-gdg-yellow`, `shadow-brutal` and `font-pixel`.
- **Tailwind class lookups.** Tailwind only generates class names written out in full, so colored variants use lookup objects instead of building names dynamically.
- **Shared sections.** `EventsSection` takes an optional `event` prop, so the Home and Events pages use the same component.
- **Derived state instead of effects.** The mobile menu stores the page it was opened on and counts as open only while that page is showing, so it closes on navigation without calling `setState` inside an effect.

## Dark and light mode

- The site is light on every page load, for every visitor.
- The toggle in the navbar switches to dark mode, and it stays on while the visitor moves between pages, until they switch back.
- It works by toggling a `dark` class on the `<html>` element. Semantic color tokens (`ink`, `surface`, `surface-alt` and the page background) are redefined under `.dark`, so components switch themes without a `dark:` variant on every element.
- The choice is not saved between visits and does not follow the system setting.

## Responsiveness

The layouts are mobile first, with larger layouts added at breakpoints:

- Hero, team section and footer stack on phones and become two columns from `md` (768px).
- The past events grid is one column on phones, two from `sm` and four from `lg`.
- Images use `object-cover` so they crop instead of stretching.
- Below 768px the nav links collapse into a hamburger menu with the page links, the More items, the theme toggle and Join Us. It closes on a link click, a route change or the Escape key.

## Animations

- Typing animation in the hero, written as a small React component with `useEffect` and cleanup
- Smooth height and fade transition on the FAQ accordion, with a rotating arrow
- Hover and press effect on buttons: the element moves and its shadow shrinks
- Smooth color transition when switching between light and dark mode
- Active page state in the navbar
- Dropdown open and close for the More menu and the mobile menu

## Accessibility and semantics

- Semantic tags: `nav`, `main`, `section`, `header` and `footer`
- `aria-expanded` on the accordion, the More menu and the hamburger button, and `aria-pressed` on the theme toggle and filter buttons
- `aria-label` on icon-only buttons and links, and `alt` text on content images
- The More menu and the mobile menu close with the Escape key

## Deployment

The site is a Vite single-page app, so it deploys to Vercel as a static build:

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep the detected settings: framework **Vite**, build command `npm run build`, output directory `dist`.
4. Deploy, then put the URL in the [Links](#links) table.

Because routes such as `/events` are handled by React Router, the repository includes a `vercel.json` file so a page refresh does not return a 404:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Updating content

- **Events:** edit `src/data/events.js`. Add an object to `pastEvents` for a new past event card.
- **FAQs:** edit the `faqs` array in `src/components/FAQSection.jsx`.
- **Navbar and More menu links:** edit `links` in `Navbar.jsx` and `items` in `MoreMenu.jsx`.
- **Social links:** edit `socials` in `Footer.jsx`.

## Roadmap

- [ ] Deploy on Vercel and add the live link
- [ ] Team member cards filtered by the domain tags
- [ ] Gallery photo blocks, with counts taken from the photo data
- [ ] Loading screen between page changes
- [ ] Notched folder-tab shape on past event cards

## Known limitations

- There is no backend, so the login and sign-up form does nothing when submitted.
- The Team and Gallery pages are only partly built.
- Some placeholder text and links (some FAQ answers and the More menu's Docs, Blogs and Links) still need real content.

## Credits

Built by **YOUR NAME** for the GDG RBU Recruitment Drive 2026-27. Design provided by GDG RBU.
