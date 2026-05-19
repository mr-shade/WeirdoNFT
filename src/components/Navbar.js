import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { productDetails } from "../config/productDetails";

const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.glassBorder};
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const Logo = styled.h1`
  font-size: ${props => props.theme.fontxl};
  font-weight: 800;
  letter-spacing: -1px;
  cursor: pointer;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* Mobile Menu styles */
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - ${props => props.theme.navHeight});
    z-index: 50;
    background-color: rgba(${props => props.theme.bodyRgba}, 0.95);
    backdrop-filter: blur(15px);
    flex-direction: column;
    justify-content: center;
    transform: ${props => props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.textSecondary};
  cursor: pointer;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.text};
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 64em) {
    margin: 1.5rem 0;
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.text};
  }
`;

const HamburgerMenu = styled.span`
  width: ${props => props.click ? "2rem" : "1.5rem"};
  height: 2px;
  background-color: ${props => props.theme.text};
  position: absolute;
  top: 2.5rem;
  right: 7.5%;
  transform: ${props => props.click ? "rotate(135deg)" : "rotate(0)"};
  transition: all 0.3s ease;
  cursor: pointer;
  display: none;
  z-index: 100;

  @media (max-width: 64em) {
    display: flex;
  }

  &::before, &::after {
    content: ' ';
    width: ${props => props.click ? "2rem" : "1.5rem"};
    height: 2px;
    background-color: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${props => props.click ? "0" : "-0.5rem"};
    transform: ${props => props.click ? "rotate(90deg)" : "rotate(0)"};
  }

  &::after {
    top: ${props => props.click ? "0" : "0.5rem"};
    transform: ${props => props.click ? "rotate(90deg)" : "rotate(0)"};
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
      setClick(false);
    }
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo onClick={() => scrollTo("home")}>{productDetails.name}</Logo>
        
        <HamburgerMenu click={click} onClick={() => setClick(!click)} />
        
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("pricing")}>Pricing</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
          <MenuItem className="mobile">
            <Button text="Get Template" link="#pricing" primary />
          </MenuItem>
        </Menu>

        <div className="desktop">
          <Button text="Get Template" link="#pricing" primary />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navbar;
