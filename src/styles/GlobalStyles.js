import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.body};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.accent};
  }

  /* Background Glow Orbs */
  .glow-orb {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    filter: blur(150px);
    z-index: 0;
    pointer-events: none;
    opacity: 0.12;
  }

  .orb-1 {
    background: ${props => props.theme.primary};
    top: 10%;
    left: -10%;
  }

  .orb-2 {
    background: ${props => props.theme.secondary};
    top: 40%;
    right: -10%;
  }

  .orb-3 {
    background: ${props => props.theme.accent};
    bottom: 15%;
    left: 20%;
  }
`;

export default GlobalStyles;
