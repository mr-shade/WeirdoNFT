export const productDetails = {
  name: "WeirdoNFT",
  tagline: "Premium React NFT Landing Page Template",
  metaTitle: "WeirdoNFT - Premium React NFT Landing Page Template",
  metaDesc: "Launch your Web3 project in minutes with the most stunning, highly responsive, and animated NFT collection React landing page template.",
  
  hero: {
    badge: "🔥 STUNNING WEBPAGE TEMPLATE FOR DEVELOPERS & CREATORS",
    title: "Launch Your NFT Project in Style & Speed",
    subtitle: "A premium, fully responsive, and beautifully animated React landing page template built with styled-components, GSAP, and Swiper. Set your collection apart from the crowd.",
    primaryCta: {
      text: "Get Template Now",
      link: "#pricing"
    },
    secondaryCta: {
      text: "Live Demo Showcase",
      link: "#showcase"
    }
  },

  features: {
    title: "Why Choose WeirdoNFT?",
    subtitle: "Engineered for maximum conversion, stellar performance, and seamless user experience.",
    items: [
      {
        title: "Stunning Animations",
        desc: "Smooth scroll and entrance animations built using GSAP (GreenSock) for that premium Web3 aesthetic."
      },
      {
        title: "Styled Components",
        desc: "Fully modular CSS-in-JS design system. Easily change colors, fonts, and spacings globally in seconds."
      },
      {
        title: "100% Responsive Layout",
        desc: "Designed meticulously to look gorgeous on mobile screens, tablets, and massive 4K monitors alike."
      },
      {
        title: "Rich Interactive FAQ",
        desc: "Built-in interactive accordion FAQs ready to resolve any doubts your collectors might have."
      },
      {
        title: "Clean Modern Codebase",
        desc: "Structured cleanly following standard React practices. Ready for Next.js ports or direct builds."
      },
      {
        title: "Complete Swiper Slider",
        desc: "Features beautiful custom sliders for showcasing your unique NFT characters effortlessly."
      }
    ]
  },

  showcase: {
    title: "NFT Showcase Preview",
    subtitle: "Here's a preview of the high-quality character figures included directly in this landing page template. Ready to swap with your own art!",
    items: [
      { name: "Weirdo #1", trait: "Gold Crown & Cyber Visor" },
      { name: "Weirdo #2", trait: "Space Helmet & Bubblegum" },
      { name: "Weirdo #3", trait: "Punk Hair & Cool Shades" },
      { name: "Weirdo #4", trait: "Golden Chain & Bandana" },
      { name: "Weirdo #5", trait: "Laser Eyes & Pilot Cap" },
      { name: "Weirdo #6", trait: "Viking Helmet & Mustache" },
      { name: "Weirdo #7", trait: "Chef Hat & Pizza Slices" },
      { name: "Weirdo #8", trait: "Wizard Hat & Magic Staff" }
    ]
  },

  roadmap: {
    title: "Template Roadmap",
    subtitle: "Our planned updates and extra features coming soon to all buyers at no additional charge.",
    items: [
      {
        phase: "Phase 1 - Core Release",
        title: "React CRA + styled-components",
        desc: "High-performance base template with complete animations, Swiper slider, and CSS transitions."
      },
      {
        phase: "Phase 2 - Design Assets",
        title: "Figma Source Files",
        desc: "Complete UI kit and component layouts in Figma, enabling easy prototyping before coding."
      },
      {
        phase: "Phase 3 - Framework Expansion",
        title: "Next.js & Tailwind Ports",
        desc: "Rebuilding the template in Next.js 14 and Tailwind CSS for developers who prefer utility classes."
      },
      {
        phase: "Phase 4 - Web3 Integration",
        title: "Wagmi & WalletConnect Minting",
        desc: "Adding modular Web3 connection scripts and a fully functional minting smart contract interface."
      }
    ]
  },

  pricing: {
    title: "Flexible Premium Pricing",
    subtitle: "Get lifetime access to the template, all assets, and free updates. No recurring subscriptions.",
    tiers: [
      {
        name: "Standard License",
        price: "$29",
        desc: "Ideal for a single project or launch. Fully customizable.",
        popular: false,
        features: [
          "1 Active Commercial Project",
          "Complete React Source Code",
          "GSAP Animations & Swiper Slider",
          "Standard Documentation",
          "6 Months of Free Updates",
          "Community Support"
        ],
        ctaText: "Purchase Standard",
        link: "https://buy.stripe.com/mock-standard"
      },
      {
        name: "Developer License",
        price: "$89",
        desc: "Perfect for creators, agencies, and Web3 developers.",
        popular: true,
        features: [
          "Unlimited Active Projects",
          "Developer-Friendly Source Files",
          "Figma Design Files Included",
          "Next.js & Tailwind CSS Ports (Soon)",
          "Lifetime Updates & Upgrades",
          "Priority 24/7 Slack Support"
        ],
        ctaText: "Purchase Developer",
        link: "https://buy.stripe.com/mock-developer"
      }
    ]
  },

  testimonials: {
    title: "Loved by Web3 Teams",
    subtitle: "See how designers and developers are launching their collections faster with WeirdoNFT.",
    items: [
      {
        quote: "This React template saved us at least 40 hours of frontend development. The GSAP animations are buttery smooth and our collection launched perfectly!",
        author: "Alex Rivers",
        role: "Founder, CyberApes Club",
        avatarId: 1
      },
      {
        quote: "Super clean codebase! As a freelancer, I was able to customize the entire color palette and swap the NFT art in less than 30 minutes for a client. Highly recommended.",
        author: "Sarah Chen",
        role: "Freelance Web3 Developer",
        avatarId: 3
      },
      {
        quote: "The responsive design on mobile is flawless. Most of our mint traffic came from mobile browsers, and the Swiper showcase worked beautifully without any lag.",
        author: "Marcus Vance",
        role: "Lead Tech, StellarPunk Studio",
        avatarId: 5
      }
    ]
  },

  faqs: [
    {
      q: "What is included with the template purchase?",
      a: "You get the full React JS source code, all character SVG assets, styled-components configurations, detailed documentation, and lifetime access to future updates."
    },
    {
      q: "Can I use this template for commercial client projects?",
      a: "Yes! The Standard License allows 1 commercial client project. The Developer License permits unlimited commercial projects and clients."
    },
    {
      q: "Is it easy to swap the NFTs with my own artwork?",
      a: "Absolutely. All NFT preview images are loaded from a central directory. You just need to drop your SVGs, PNGs, or GIFs into the assets folder and update the imports."
    },
    {
      q: "Which React framework version does this template use?",
      a: "It's built with React 18, utilizing create-react-app (react-scripts), styled-components for CSS-in-JS styling, and GSAP for state-of-the-art Web3 animations."
    },
    {
      q: "Will I get free access to future framework ports?",
      a: "Yes! If you purchase the Developer License, you will receive the Next.js and Tailwind CSS versions of the template at no extra cost as soon as they are released."
    }
  ]
};
