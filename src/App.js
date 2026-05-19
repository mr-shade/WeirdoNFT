import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { darkTheme } from "./styles/Themes";

// Component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Roadmap />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
