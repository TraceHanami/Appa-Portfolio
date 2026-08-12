# 🏛️ Elite Tile & Granite Works — Professional Web Application

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-blue)

A high-performance, responsive web application for **Elite Tile & Granite Works** — showcasing master stonemasonry, custom tile fitting, porcelain flooring, and luxury granite countertop installations.

The repository also includes a dedicated **Birthday Tribute Page** (`wishes.html`) created with love for Appa (Founder & Principal Master Stonemason).

---

## 🌟 Key Features

### 🏛️ Main Business Website (`index.html`)
- **Hero Image Slideshow**: High-impact, multi-slide hero showcasing kitchen granite, spa bathrooms, and large-format porcelain flooring.
- **Interactive Before & After Slider**: Touch-enabled and mouse-draggable comparison slider displaying real bathroom transformation work.
- **Instant Project Cost Calculator**: Interactive pricing tool allowing clients to estimate job costs based on area (sq ft), material grade (Porcelain, Marble, Granite), and add-ons (Schluter® waterproofing, radiant in-floor heating).
- **Categorized Portfolio Gallery**: Filterable project gallery (Bathrooms, Kitchens, Flooring, Commercial, Outdoor) complete with rich modal dialog detail popups.
- **Direct Consultation Form & WhatsApp Integration**: One-click direct calling, instant WhatsApp photo attachment links, and estimate inquiry form.
- **SEO & Schema.org LocalBusiness**: Full JSON-LD structured data, Open Graph meta tags, canonical links, and search engine directives.

### 🎂 Birthday Tribute Page (`wishes.html`)
- **Interactive Celebration Suite**: Floating particle animation, Hall of Fame timeline, heartfelt family letters, fun facts, and interactive birthday cake surprise.
- **Cross-Navigation**: Seamless links connecting the tribute page and the primary business portfolio.

---

## 📁 Repository Structure

```
appa-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD automated deployment
├── public/
│   ├── favicon.svg             # Custom geometric stone tile favicon
│   ├── robots.txt              # Search engine index rules
│   └── sitemap.xml             # XML Sitemap for search indexing
├── src/
│   └── style.css               # PostCSS & Tailwind CSS entry stylesheet
├── assets/                     # High-resolution project showcase imagery
│   ├── bathroom_after.jpg
│   ├── bathroom_before.jpg
│   ├── commercial_lobby.jpg
│   ├── craftsman_at_work.jpg
│   ├── hero_tiling.jpg
│   ├── kitchen_granite.jpg
│   ├── living_flooring.jpg
│   └── outdoor_patio.jpg
├── .editorconfig               # Code style & whitespace enforcement
├── .gitignore                  # Git tracking rules
├── .prettierrc                 # Code formatting rules
├── favicon.svg                 # Root favicon fallback
├── index.html                  # Main Elite Tile & Granite Works site
├── wishes.html                 # Happy Birthday Dad tribute page
├── LICENSE                     # MIT License
├── package.json                # NPM configuration & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme configuration
├── vite.config.js              # Vite multi-page build configuration
└── README.md                   # Project documentation
```

---

## 🛠️ Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Tailwind CSS (Utility-First), Vanilla CSS (Custom UI Effects & Micro-Animations)
- **Build System**: Vite 6.1, PostCSS, Autoprefixer
- **Typography & Icons**: Google Fonts (Cinzel, Montserrat, Plus Jakarta Sans, Fraunces, DM Sans), Remix Icon
- **Deployment**: GitHub Pages (CI/CD Workflow included), Vercel, or static web servers

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TraceHanami/Appa-Portfolio.git
   cd Appa-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The bundled static files will be compiled into the `dist/` directory.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment

### GitHub Pages (Automated)
This repository includes a preconfigured GitHub Actions workflow in `.github/workflows/deploy.yml`. 
Simply push to the `main` branch, and GitHub Actions will automatically build and publish the site.

### Vercel Deployment (Recommended)
This repository includes a [`vercel.json`](file:///home/tracehanami/Backup/scrap/appa%20website/vercel.json) configured for Vite with clean URLs, immutable asset caching, and route rewrites.

#### Option A: Deploy via GitHub Integration (Zero Config)
1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Vercel will automatically detect Vite and [`vercel.json`](file:///home/tracehanami/Backup/scrap/appa%20website/vercel.json).
4. Click **Deploy**.

#### Option B: Deploy via Vercel CLI
Run the following command in your terminal:
```bash
npx vercel --prod
```

### GitHub Pages (Automated)
This repository includes a preconfigured GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///home/tracehanami/Backup/scrap/appa%20website/.github/workflows/deploy.yml). 
Simply push to the `main` branch, and GitHub Actions will automatically build and publish the site.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
