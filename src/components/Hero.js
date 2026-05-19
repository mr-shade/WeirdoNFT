import React from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import { productDetails } from "../config/productDetails";

// SVGs of character artwork
import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const floatOpposite = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(15px) rotate(-3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.theme.navHeight};
  overflow: hidden;
`;

const Container = styled.div`
  width: 85%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  z-index: 1;

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 64em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Badge = styled.span`
  align-self: flex-start;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: ${props => props.theme.primary};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: ${props => props.theme.fontxs};
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  animation: ${pulse} 3s infinite ease-in-out;

  @media (max-width: 64em) {
    align-self: center;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  span {
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`;

const Subtitle = styled.p`
  font-size: ${props => props.theme.fontlg};
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 2.5rem;
  width: 90%;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 48em) {
    flex-direction: column;
    width: 80%;
    gap: 1rem;
  }
`;

// 3D Glass Card visual styling
const VisualContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    height: 350px;
    margin-top: 3rem;
  }
`;

const MainCard = styled.div`
  width: 280px;
  height: 340px;
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 24px;
  backdrop-filter: blur(15px);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  z-index: 5;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 48em) {
    width: 220px;
    height: 280px;
  }
`;

const CardImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`;

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  margin-top: 1rem;
  
  h4 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
  }
  
  span {
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.secondary};
    font-weight: 600;
  }
`;

const DecorativeCard = styled(MainCard)`
  position: absolute;
  z-index: 3;
  opacity: 0.5;
  animation: ${floatOpposite} 7s ease-in-out infinite;
  box-shadow: none;
`;

const LeftCard = styled(DecorativeCard)`
  left: 10%;
  transform: scale(0.85) rotate(-10deg);
  
  @media (max-width: 64em) {
    left: 15%;
  }
  @media (max-width: 48em) {
    left: 5%;
  }
`;

const RightCard = styled(DecorativeCard)`
  right: 10%;
  transform: scale(0.85) rotate(10deg);
  
  @media (max-width: 64em) {
    right: 15%;
  }
  @media (max-width: 48em) {
    right: 5%;
  }
`;

const Hero = () => {
  return (
    <Section id="home">
      {/* Background glow effects */}
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      
      <Container>
        <Box>
          <Badge>{productDetails.hero.badge}</Badge>
          <Title>
            {productDetails.hero.title} <br />
            <span>
              <Typewriter
                options={{
                  strings: [
                    "With Stunning Aesthetics.",
                    "With Buttery GSAP Animations.",
                    "In Record Time.",
                    "Ready to Convert."
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 20
                }}
              />
            </span>
          </Title>
          <Subtitle>{productDetails.hero.subtitle}</Subtitle>
          <ButtonContainer>
            <Button text={productDetails.hero.primaryCta.text} link={productDetails.hero.primaryCta.link} primary />
            <Button text={productDetails.hero.secondaryCta.text} link={productDetails.hero.secondaryCta.link} />
          </ButtonContainer>
        </Box>

        <Box style={{ position: 'relative' }}>
          <VisualContainer>
            {/* Left Card */}
            <LeftCard>
              <CardImage src={img2} alt="Weirdo NFT Left Card" />
              <CardInfo>
                <h4>Weirdo #88</h4>
                <span>TRAIT L2</span>
              </CardInfo>
            </LeftCard>

            {/* Main Interactive Card */}
            <MainCard>
              <CardImage src={img1} alt="Weirdo NFT Main Card" />
              <CardInfo>
                <h4>Weirdo #99</h4>
                <span>TRAIT L3</span>
              </CardInfo>
            </MainCard>

            {/* Right Card */}
            <RightCard>
              <CardImage src={img3} alt="Weirdo NFT Right Card" />
              <CardInfo>
                <h4>Weirdo #45</h4>
                <span>TRAIT L1</span>
              </CardInfo>
            </RightCard>
          </VisualContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default Hero;
