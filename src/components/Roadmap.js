import React from "react";
import styled, { keyframes } from "styled-components";
import { productDetails } from "../config/productDetails";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
  border-top: 1px solid ${props => props.theme.glassBorder};
  overflow: hidden;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  max-width: 600px;
  margin-bottom: 5rem;
  
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

const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    border-radius: 2px;
  }

  @media (max-width: 48em) {
    &::before {
      left: 10%;
    }
  }
`;

const pulse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 10px rgba(6, 182, 212, 0.4); }
  50% { transform: translate(-50%, -50%) scale(1.3); box-shadow: 0 0 20px rgba(6, 182, 212, 0.8); }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.theme.secondary};
  border: 4px solid ${props => props.theme.body};
  z-index: 3;
  animation: ${pulse} 3s infinite ease-in-out;

  @media (max-width: 48em) {
    left: 10%;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.even ? "flex-start" : "flex-end"};
  position: relative;
  width: 100%;

  @media (max-width: 48em) {
    justify-content: flex-end;
  }
`;

const Card = styled.div`
  width: 45%;
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.accent};
    box-shadow: 0 15px 30px rgba(236, 72, 153, 0.15);
  }

  span {
    display: inline-block;
    color: ${props => props.theme.accent};
    font-size: ${props => props.theme.fontxs};
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.text};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
  }

  @media (max-width: 48em) {
    width: 80%;
    padding: 1.5rem;
  }
`;

const Roadmap = () => {
  return (
    <Section id="roadmap">
      {/* Background blur */}
      <div className="glow-orb orb-2" style={{ top: '20%', left: '-10%' }} />
      
      <Container>
        <Header>
          <h2>{productDetails.roadmap.title}</h2>
          <p>{productDetails.roadmap.subtitle}</p>
        </Header>
        
        <Timeline>
          {productDetails.roadmap.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem key={index} even={isEven}>
                <TimelineDot />
                <Card>
                  <span>{item.phase}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Card>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Roadmap;
