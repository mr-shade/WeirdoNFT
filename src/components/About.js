import React from "react";
import styled from "styled-components";
import { productDetails } from "../config/productDetails";
import bigheadImg from "../assets/Nfts/bighead-4.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
  overflow: hidden;
  border-top: 1px solid ${props => props.theme.glassBorder};
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  max-width: 600px;
  
  h2 {
    font-size: ${props => props.theme.fontxxl};
    background: linear-gradient(135deg, ${props => props.theme.text}, ${props => props.theme.textSecondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4rem;

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 32px;
  padding: 3rem;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 36px;
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
    z-index: -1;
    opacity: 0.15;
  }

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
  }

  @media (max-width: 64em) {
    width: 60%;
    padding: 2rem;
  }
  @media (max-width: 48em) {
    width: 80%;
  }
`;

const FeatureGrid = styled.div`
  width: 55%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 64em) {
    width: 100%;
  }
  @media (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  h3 {
    font-size: ${props => props.theme.fontlg};
    margin-bottom: 0.75rem;
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
      content: '✦';
      color: ${props => props.theme.secondary};
    }
  }

  p {
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary};
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.15);
    background: ${props => props.theme.glassBgHover};
  }
`;

const About = () => {
  return (
    <Section id="about">
      {/* Background glow orbs */}
      <div className="glow-orb orb-3" />
      
      <Container>
        <Header>
          <h2>{productDetails.features.title}</h2>
          <p>{productDetails.features.subtitle}</p>
        </Header>
        
        <Content>
          <ImageContainer>
            <img src={bigheadImg} alt="Weirdos Club Character" />
          </ImageContainer>
          
          <FeatureGrid>
            {productDetails.features.items.map((item, index) => (
              <FeatureCard key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Content>
      </Container>
    </Section>
  );
};

export default About;
