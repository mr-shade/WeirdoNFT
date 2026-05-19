import React from "react";
import styled from "styled-components";
import { productDetails } from "../config/productDetails";

// Import social icons
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";

const Section = styled.section`
  min-height: 40vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: relative;
  border-top: 1px solid ${props => props.theme.glassBorder};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 0 3rem 0;
  overflow: hidden;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  z-index: 1;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 320px;
  
  h2 {
    font-size: ${props => props.theme.fontxl};
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
  }
`;

const IconList = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.glassBg};
    border: 1px solid ${props => props.theme.glassBorder};
    width: 45px;
    height: 45px;
    border-radius: 50%;
    color: ${props => props.theme.textSecondary};
    transition: all 0.3s ease;
    cursor: pointer;

    svg {
      fill: currentColor;
      transition: fill 0.3s ease;
    }

    &:hover {
      transform: translateY(-4px) scale(1.05);
      color: ${props => props.theme.secondary};
      border-color: ${props => props.theme.secondary};
      box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
    }
  }

  @media (max-width: 48em) {
    justify-content: center;
  }
`;

const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: 48em) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MenuCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h4 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const MenuItem = styled.li`
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.textSecondary};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const BottomBox = styled.div`
  width: 85%;
  margin: 3rem auto 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontxs};
  color: ${props => props.theme.textSecondary};
  z-index: 1;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  return (
    <Section>
      <Container>
        <LeftBox>
          <h2>{productDetails.name}</h2>
          <p>The premium animated landing page template engineered specifically for NFT collections and Web3 creators.</p>
          <IconList>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook width={20} height={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter width={20} height={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram width={20} height={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn width={20} height={20} />
            </a>
          </IconList>
        </LeftBox>
        
        <RightBox>
          <MenuCol>
            <h4>Navigation</h4>
            <MenuList>
              <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
              <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
              <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
              <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
            </MenuList>
          </MenuCol>
          <MenuCol>
            <h4>Support</h4>
            <MenuList>
              <MenuItem onClick={() => scrollTo("pricing")}>Pricing</MenuItem>
              <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
              <MenuItem onClick={() => window.open("https://github.com", "_blank")}>GitHub Repository</MenuItem>
              <MenuItem onClick={() => window.open("https://devdreaming.com", "_blank")}>Documentation</MenuItem>
            </MenuList>
          </MenuCol>
        </RightBox>
      </Container>
      
      <BottomBox>
        <span>&copy; {new Date().getFullYear()} {productDetails.name}. All rights reserved.</span>
        <span>Designed &amp; Developed with 💜 by Antigravity AI.</span>
      </BottomBox>
    </Section>
  );
};

export default Footer;
