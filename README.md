# bible-gacha-site

The project showcase website for Thorncrown Games' Bible Gacha. The site is live here: https://isidoko.github.io/bible-gacha-site/

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com) (v3), and [TypeScript](https://www.typescriptlang.org/). The contact form is made using [Web3Forms](https://web3forms.com).

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or v22 works, this was built with v22)
- npm (comes with Node.js)
- A GitHub account with access to the repo

## Getting Started

Clone the repo and install dependencies with npm:
```bash
git clone https://github.com/isidoko/bible-gacha-site.git
cd bible-gacha-site
npm install
```

Run the local dev server with Astro:
```bash
npm run dev
```

This opens a local preview (should be at `http://localhost:4321/`). Astro will hot-reload the page when you save changes to files so you can immediately see your changes without needing to refresh the page.

## Project Structure
```
bible-gacha-site/
├── src/
│   ├── components/           ← One file per page section
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── FAQ.astro
│   │   ├── Contributors.astro
│   │   ├── NewsPreview.astro
│   │   ├── PrayerRequests.astro
│   │   ├── ContactForm.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── news/             ← News articles as Markdown files
│   ├── data/
│   │   └── contributors.ts   ← Contributor list (add yourself here!)
│   ├── layouts/
│   │   └── BaseLayout.astro  ← Shared HTML wrapper (head, body, etc.)
│   ├── pages/
│   │   ├── index.astro       ← Homepage
│   │   └── news/
│   │       ├── index.astro   ← News listing page
│   │       └── [slug].astro  ← Individual news post template
│   ├── scripts/
│   │   └── carousel.ts       ← Contributor carousel logic
│   └── styles/
│       └── global.css        ← Tailwind directives + custom CSS
├── public/                   ← Images and static assets
├── tailwind.config.mjs       ← Custom color palette for use with Tailwind
└── astro.config.mjs          ← Build settings (GitHub Pages base path is set here)
```

## Adding a Contributor

Open `src/data/contributors.ts` and add a new entry to the array:
```ts
{
  name: 'Your Name',
  profile: `${base}your-image.png`,
  roles: ['Your Role'],
  blurb: 'A short bio about yourself.',
  rarity: 'Random',
},
```

Put your profile image in `public/`. If you don't have one, use `placeholder.png`.

## Deploying to GitHub Pages

Building and deploying for GitHub Pages is handled with one command:
```bash
npm run deploy
```

This builds the site into the `dist` folder, then pushes the built site to the `gh-pages` branch. After you're finished with your changes, run `npm run deploy`, and GitHub Pages will deploy the built site from the `gh-pages` branch automatically.

The live site can be found at https://isidoko.github.io/bible-gacha-site/