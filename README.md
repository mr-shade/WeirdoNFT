# WeirdoNFT - Premium React NFT Landing Page Template

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![React: 18.x](https://img.shields.io/badge/React-18.x-cyan.svg)](https://react.dev/)
[![GSAP: 3.x](https://img.shields.io/badge/GSAP-3.x-green.svg)](https://greensock.com/gsap/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-5.x-pink.svg)](https://styled-components.com/)

**WeirdoNFT** is an ultra-premium, high-converting, and stunningly animated React landing page template designed specifically for NFT collections, digital artists, and Web3 projects. Engineered with visual excellence, smooth scrolling animations, and glassmorphic aesthetics to instantly captivate your visitors.

---

## ✨ Features

- **Smooth GSAP Animations**: Fully animated sections using GreenSock, offering a high-fidelity interactive experience.
- **Glassmorphism Design System**: Futuristic, glowing space-navy aesthetic built utilizing the highest standards of modern UI design.
- **Dynamic Typewriter Headline**: Engaging interactive text typing animations out-of-the-box.
- **Infinite Showcase Marquees**: GPU-accelerated, infinite-loop character showcases moving in opposite directions with smooth hover slowing.
- **Centralized Text Configuration**: All copywriting, FAQ contents, roadmap items, pricing tiers, and testimonials are loaded from a single file (`src/config/productDetails.js`) for lightning-fast edits.
- **Alternating vertical Timeline**: Sleek, interactive Web3 project roadmap tracker.
- **Interactive FAQ Accordion**: Fluid slide-down collapsible card lists to resolve buyer doubts.
- **Testimonial Showcase**: Premium review cards complete with star rating glows and SVG user avatars.
- **Conversion-Optimized Pricing Cards**: High-converting pricing tables with glow borders and recommended badge highlighting.
- **100% Fully Responsive Layout**: Meticulously designed for a flawless UX on mobile screens, tablets, laptops, and massive 4K monitors.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React.js (v18.x)
- **Styling**: Styled-Components (v5.x)
- **Animations**: GSAP (GreenSock) & Typewriter-Effect
- **Iconography**: Custom SVG components inside `src/Icons/`
- **Illustrations**: High-quality SVG character builders from `BigHeads.io`

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or above recommended).

### 2. Install Dependencies
Navigate to the root directory and install all packages:
```bash
npm install
```

### 3. Run Development Server
Start the local server. The app automatically launches on `http://localhost:3000`:
```bash
npm start
```

### 4. Build for Production
Create an optimized production bundle in the `build/` directory:
```bash
npm run build
```

---

## ⚙️ Customization Instructions

WeirdoNFT is designed for developer ergonomics. You do **not** need to traverse multiple components to edit your landing page texts.

### Changing Text, FAQs, and Prices
Simply open [src/config/productDetails.js](file:///Users/shaswatraj/Desktop/landing-pages/landingweb/nft-web/src/config/productDetails.js) and update the JSON properties:
- **Hero Title & taglines**: Update `productDetails.hero`
- **Feature Cards**: Add, modify, or delete features in `productDetails.features.items`
- **Roadmap Milestones**: Update phase details in `productDetails.roadmap.items`
- **Pricing Tiers**: Change price points, details, or checkout links in `productDetails.pricing.tiers`
- **Client Reviews**: Edit testimonials in `productDetails.testimonials.items`
- **Accordion FAQs**: Modify questions and answers in `productDetails.faqs`

### Modifying Colors & Typography
Open [src/styles/Themes.js](file:///Users/shaswatraj/Desktop/landing-pages/landingweb/nft-web/src/styles/Themes.js) to globally change styling tokens:
- **Gradients & Accents**: Update primary (purple), secondary (cyan), or accent (pink) HSL or HEX codes.
- **Backgrounds & Card Glows**: Edit the glassmorphic background colors (`glassBg` and `glassBorder`).

---

## 🌐 Deployment to Surge.sh

To deploy this landing page to Surge in seconds:

1. **Build the production folder**:
   ```bash
   npm run build
   ```

2. **Deploy to Surge**:
   Install Surge globally if you haven't already:
   ```bash
   npm install -g surge
   ```
   Deploy the `build` folder:
   ```bash
   surge build
   ```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///Users/shaswatraj/Desktop/landing-pages/landingweb/nft-web/LICENSE) file for details.
