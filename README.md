# ScanHer Website

🚀 **ScanHer** is a health-tech initiative bringing **affordable, AI-powered early cancer detection** to women across Liberia and Africa. This repository contains the official website for the project, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 📖 Table of Contents

* [About](#about)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Development](#development)
* [Fonts](#fonts)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)

## 🔎 About

Breast and cervical cancer are leading causes of death among women in Liberia, often detected too late due to **limited access, stigma, and cost**.
ScanHer changes that by:

* 🩺 **Community Screening**: Portable and affordable clinics and outreach events
* 🤖 **AI-Powered Detection**: Smartphone-based tools with offline AI analysis
* 📚 **Health Education**: Awareness campaigns and self-exam training

This website showcases the project’s mission, solutions, and impact.

## 🛠 Tech Stack

* **[Astro](https://astro.build/)** — Static site generator, optimized for performance & SEO
* **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for responsive design
* **Self-hosted Fonts** — [Inter](https://rsms.me/inter/) for body, [Fugaz One](https://fonts.google.com/specimen/Fugaz+One) for display
* **SEO-ready** with Open Graph metadata & responsive layouts

## 📂 Project Structure

```bash
/
├── public/              # Static assets
│   ├── fonts/           # Self-hosted Inter + Fugaz One
│   ├── icons/          # icons
│   ├── images/         # Logo, hero, icons              # Open Graph images
├── src/
│   ├── components/      # UI components (Hero, Seo, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Astro pages (index.astro, about.astro, contact.astro)
│   └── styles/          # Global styles (Tailwind, overrides)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind theme config
├── package.json
└── README.md
```

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Nas100-12/team_scanher.git
cd team_scanher
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Now visit [http://localhost:4321](http://localhost:4321).

## 💻 Development

* All pages live in `src/pages/`
* Shared layout: `src/layouts/Page.astro`
* Reusable components: `src/components/`
* Styles are managed with **Tailwind** (`tailwind.config.mjs`) and global overrides (`src/styles/globals.css`)

## 🔤 Fonts

Fonts are **self-hosted** for reliability and performance:

* **Inter** — primary body font, multiple weights (100–900)
* **Fugaz One** — display font for headings & brand elements

They are stored in `/public/fonts/` and loaded via `style.css`.

## 🚀 Deployment

The site is optimized for static hosting. Supported platforms:

* **Vercel** (recommended)
* **Netlify**
* **GitHub Pages**
* Any static hosting service

Build & preview locally:

```bash
npm run build
npm run preview
```

## 🤝 Contributing

We welcome feedback, bug reports, and suggestions!
To contribute:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m "Add amazing feature"`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📜 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.


✨ Built with care to support women’s health by the **ScanHer team**.
