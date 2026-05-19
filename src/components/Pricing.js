import React from "react";
import styled, { keyframes } from "styled-components";
import { productDetails } from "../config/productDetails";
import Button from "./Button";

const borderGlow = keyframes`
  0%, 100% { border-color: rgba(6, 182, 212, 0.4); box-shadow: 0 0 15px rgba(6, 182, 212, 0.2); }
  50% { border-color: rgba(236, 72, 153, 0.7); box-shadow: 0 0 25px rgba(236, 72, 153, 0.4); }
`;

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

const TiersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 900px;
  gap: 3rem;

  @media (max-width: 64em) {
    flex-direction: column;
    align-items: center;
    max-width: 500px;
  }
`;

const PricingCard = styled.div`
  width: 50%;
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 28px;
  padding: 3.5rem 2.5rem;
  backdrop-filter: blur(10px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-8px);
  }

  ${props => props.popular && `
    border-color: rgba(6, 182, 212, 0.5);
    background: rgba(255, 255, 255, 0.04);
    animation: ${borderGlow} 6s infinite ease-in-out;
  `}

  @media (max-width: 64em) {
    width: 100%;
    padding: 2.5rem 2rem;
  }
`;

const PopularBadge = styled.span`
  position: absolute;
  top: -15px;
  right: 30px;
  background: linear-gradient(135deg, ${props => props.theme.secondary}, ${props => props.theme.primary});
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontxs};
  font-weight: 700;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.4);
`;

const CardHeader = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.text};
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.textSecondary};
    line-height: 1.4;
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 2rem;
  
  span.price {
    font-size: 3.5rem;
    font-weight: 800;
    color: ${props => props.theme.text};
    background: linear-gradient(135deg, ${props => props.theme.text}, #cbd5e1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  span.period {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.textSecondary};
    margin-left: 0.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.textSecondary};
  
  &::before {
    content: '✓';
    color: ${props => props.theme.secondary};
    font-weight: 900;
    font-size: 1.1rem;
    margin-right: 0.75rem;
    background: rgba(6, 182, 212, 0.1);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Pricing = () => {
  return (
    <Section id="pricing">
      {/* Background orbs */}
      <div className="glow-orb orb-3" style={{ bottom: '-10%', right: '20%' }} />
      
      <Container>
        <Header>
          <h2>{productDetails.pricing.title}</h2>
          <p>{productDetails.pricing.subtitle}</p>
        </Header>
        
        <TiersContainer>
          {productDetails.pricing.tiers.map((tier, index) => (
            <PricingCard key={index} popular={tier.popular}>
              {tier.popular && <PopularBadge>RECOMMENDED</PopularBadge>}
              
              <div>
                <CardHeader>
                  <h3>{tier.name}</h3>
                  <p>{tier.desc}</p>
                </CardHeader>
                
                <PriceBox>
                  <span className="price">{tier.price}</span>
                  <span className="period">/ lifetime</span>
                </PriceBox>
                
                <FeatureList>
                  {tier.features.map((feature, idx) => (
                    <FeatureItem key={idx}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </div>
              
              <Button 
                text={tier.ctaText} 
                onClick={() => alert(`Redirecting to payment for the ${tier.name}...`)} 
                primary={tier.popular}
                style={{ width: '100%', textAlign: 'center' }} 
              />
            </PricingCard>
          ))}
        </TiersContainer>
      </Container>
    </Section>
  );
};

export default Pricing;
