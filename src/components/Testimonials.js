import React from "react";
import styled from "styled-components";
import { productDetails } from "../config/productDetails";

// Avatars from the local SVGs
import avatar1 from "../assets/Nfts/bighead-1.svg";
import avatar3 from "../assets/Nfts/bighead-3.svg";
import avatar5 from "../assets/Nfts/bighead-5.svg";

const avatars = {
  1: avatar1,
  3: avatar3,
  5: avatar5
};

const Section = styled.section`
  min-height: 80vh;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 64em) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const TestimonialCard = styled.div`
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary};
    box-shadow: 0 15px 30px rgba(139, 92, 246, 0.15);
  }

  &::before {
    content: '“';
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    font-size: 5rem;
    color: rgba(139, 92, 246, 0.15);
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const Stars = styled.div`
  color: #fbbf24; // Amber yellow
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
`;

const Quote = styled.p`
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.text};
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 2rem;
  z-index: 1;
`;

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid ${props => props.theme.secondary};
  padding: 2px;
`;

const AuthorMeta = styled.div`
  h4 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
    font-weight: 600;
  }
  
  p {
    font-size: ${props => props.theme.fontxs};
    color: ${props => props.theme.textSecondary};
  }
`;

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="glow-orb orb-1" style={{ bottom: '10%', left: '-15%' }} />
      
      <Container>
        <Header>
          <h2>{productDetails.testimonials.title}</h2>
          <p>{productDetails.testimonials.subtitle}</p>
        </Header>
        
        <Grid>
          {productDetails.testimonials.items.map((item, index) => (
            <TestimonialCard key={index}>
              <div>
                <Stars>★★★★★</Stars>
                <Quote>{item.quote}</Quote>
              </div>
              
              <AuthorBox>
                <Avatar src={avatars[item.avatarId]} alt={item.author} />
                <AuthorMeta>
                  <h4>{item.author}</h4>
                  <p>{item.role}</p>
                </AuthorMeta>
              </AuthorBox>
            </TestimonialCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Testimonials;
