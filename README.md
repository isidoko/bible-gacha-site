# bible-gacha-site

The project showcase website for Thorncrown Games' Bible Gacha. The site is live here: https://isidoko.github.io/bible-gacha-site/

Built with HTML, CSS, [Tailwind CSS](https://tailwindcss.com) (v3), and [TypeScript](https://www.typescriptlang.org/). Bundled with [Vite](https://vitejs.dev/). The contact form is made using [Web3Forms](https://web3forms.com).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later works, this was built with v22)
- npm (comes with Node.js)
- A GitHub account with access to the repo

## Getting Started

Clone the repo and install dependencies with npm:
```bash
git clone https://github.com/isidoko/bible-gacha-site.git
cd bible-gacha-site
npm install
```

Run the local dev server with Vite:
```bash
npm run dev
```

This opens a local preview (should be at `http://localhost:5173/`). Vite will hot-reload the page when you save changes to files so you can immediately see your changes without needing to refresh the page.

## Project Structure

```
bible-gacha-site/
├── index.html            ← The entire page (all sections are found here)
├── src/
│   ├── main.ts           ← Contributor carousel data and logic
│   └── style.css         ← Tailwind directives + custom CSS
├── public/               ← Images and static assets
├── tailwind.config.js    ← Custom color palette for use with Tailwind
└── vite.config.ts        ← Build settings (GitHub Pages base path is set here)
```

## Deploying to GitHub Pages

Building and deploying for GitHub Pages is handled with one command:
```bash
npm run deploy
```

This builds the site into the `dist` folder, then pushes the built site to the `gh-pages` branch. After you're finished with your changes, run `npm run deploy`, then run `git push` to push your changes to the repo. GitHub Pages will deploy the built site from the `gh-pages` branch automatically.

The live site can be found at https://isidoko.github.io/bible-gacha-site/
