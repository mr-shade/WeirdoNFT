import React from "react";
import styled, { keyframes } from "styled-components";
import { productDetails } from "../config/productDetails";

// Import all NFT character assets
import img0 from "../assets/Nfts/bighead.svg";
import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";
import img10 from "../assets/Nfts/bighead-10.svg";

const nftImages = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const moveLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const moveRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 0;
  border-top: 1px solid ${props => props.theme.glassBorder};
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  margin-bottom: 4rem;
`;

const Header = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
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

const MarqueeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const MarqueeRow = styled.div`
  display: flex;
  width: max-content;
  white-space: nowrap;
  animation: ${props => props.reverse ? moveRight : moveLeft} 30s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const Card = styled.div`
  width: 220px;
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 1.2rem;
  margin: 0 1rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: ${props => props.theme.secondary};
    box-shadow: 0 15px 30px rgba(6, 182, 212, 0.25);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 80%;
    height: auto;
    object-fit: contain;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.15) rotate(5deg);
  }
`;

const CardMeta = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h4 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
  }
  
  span {
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.accent};
    font-weight: 700;
  }
`;

// Helper list of items to ensure seamless loops
const doubles = [...nftImages, ...nftImages];

const Showcase = () => {
  return (
    <Section id="showcase">
      {/* Background Orbs */}
      <div className="glow-orb orb-1" style={{ top: '30%', right: '-15%' }} />
      
      <Container>
        <Header>
          <h2>{productDetails.showcase.title}</h2>
          <p>{productDetails.showcase.subtitle}</p>
        </Header>
      </Container>
      
      <MarqueeContainer>
        {/* Row 1: Leftward sliding */}
        <MarqueeRow>
          {doubles.map((img, idx) => {
            const displayId = (idx % nftImages.length) + 1;
            return (
              <Card key={`row1-${idx}`}>
                <ImageContainer>
                  <img src={img} alt={`Weirdo NFT #${displayId}`} />
                </ImageContainer>
                <CardMeta>
                  <h4>Weirdo #{displayId}</h4>
                  <span>★ PREMIUM</span>
                </CardMeta>
              </Card>
            );
          })}
        </MarqueeRow>

        {/* Row 2: Rightward sliding */}
        <MarqueeRow reverse>
          {doubles.map((img, idx) => {
            const displayId = nftImages.length - (idx % nftImages.length);
            return (
              <Card key={`row2-${idx}`}>
                <ImageContainer>
                  <img src={img} alt={`Weirdo NFT #${displayId}`} />
                </ImageContainer>
                <CardMeta>
                  <h4>Weirdo #{displayId}</h4>
                  <span>★ PREMIUM</span>
                </CardMeta>
              </Card>
            );
          })}
        </MarqueeRow>
      </MarqueeContainer>
    </Section>
  );
};

export default Showcase;
