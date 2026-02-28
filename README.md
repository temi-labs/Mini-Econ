# VibeVault

VibeVault is a modern storefront UI showcasing premium jewelry and apparel. Built with React, Vite and Tailwind CSS, the site focuses on large imagery, bold typography and a fast shopping experience.

## Quick Start

Prerequisites: Node.js (16+)

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Project Structure (key files)

- `src/main.tsx` — app entry
- `src/App.tsx` — routes and providers
- `src/components` — UI components (Navbar, Layout, Preloader...)
- `src/pages` — page components (Home, Products, New, About...)
- `src/assets/images` — local images

## About the Site

This prototype demonstrates:

- Hero landing with product highlights
- New arrivals and product grid
- Product details with image gallery
- Lightweight chatbot and toast notifications
- Preloader for polished initial load

## Performance Tips

- Convert large images to WebP/AVIF for smaller payloads.
- Import local images in JS/TS so Vite can optimize and fingerprint them.
- Use `loading="lazy"` and `decoding="async"` on non-critical images.
- Preload the main hero image (see `index.html`).



## License

This project is licensed under the MIT License — see the `LICENSE` file.

---

If you want me to replace the placeholder screenshots with actual site screenshots, I can:

- run the dev server and capture screenshots automatically, or
- you can paste screenshots and I'll add them to `src/assets/screenshots` and update the README.

Want me to run the dev server and capture real screenshots now?
