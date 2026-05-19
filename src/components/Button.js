import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background-color: ${props => props.primary ? props.theme.primary : "transparent"};
  color: ${props => props.theme.text};
  outline: none;
  border: ${props => props.primary ? "none" : `2px solid ${props.theme.secondary}`};
  
  font-size: ${props => props.theme.fontsm};
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  box-shadow: ${props => props.primary ? `0 4px 20px rgba(139, 92, 246, 0.4)` : "none"};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100%;
    height: 100%;
    background: ${props => props.primary ? `linear-gradient(135deg, ${props.theme.accent}, ${props.theme.primary})` : `rgba(6, 182, 212, 0.15)`};
    border-radius: 50px;
    transition: transform 0.5s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.primary 
      ? `0 8px 25px rgba(236, 72, 153, 0.5)` 
      : `0 0 15px rgba(6, 182, 212, 0.3)`};
    border-color: ${props => props.primary ? "none" : props.theme.accent};
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1.05);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Button = ({ text, link, primary = false, onClick }) => {
  if (link) {
    return (
      <a href={link} aria-label={text}>
        <Btn primary={primary}>{text}</Btn>
      </a>
    );
  }
  return <Btn primary={primary} onClick={onClick}>{text}</Btn>;
};

export default Button;
