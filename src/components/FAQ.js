import React, { useState } from "react";
import styled from "styled-components";
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

const AccordionList = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AccordionItem = styled.div`
  background: ${props => props.theme.glassBg};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${props => props.theme.secondary};
    box-shadow: 0 5px 15px rgba(6, 182, 212, 0.1);
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.2rem;
  cursor: pointer;
  user-select: none;
  
  h3 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.text};
    font-weight: 600;
    line-height: 1.4;
  }
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.secondary};
  transition: transform 0.3s ease;
  transform: ${props => props.active ? "rotate(180deg)" : "rotate(0)"};
  
  /* Circle container for icon */
  background: rgba(6, 182, 212, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const AccordionContent = styled.div`
  max-height: ${props => props.active ? "250px" : "0"};
  opacity: ${props => props.active ? "1" : "0"};
  padding: ${props => props.active ? "0 2.2rem 2.2rem 2.2rem" : "0 2.2rem"};
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  
  p {
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.textSecondary};
    line-height: 1.7;
  }
`;

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIdx === index) {
      setActiveIdx(null);
    } else {
      setActiveIdx(index);
    }
  };

  return (
    <Section id="faq">
      {/* Background orb */}
      <div className="glow-orb orb-2" style={{ bottom: '10%', right: '-10%' }} />
      
      <Container>
        <Header>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the WeirdoNFT React Landing Page Template.</p>
        </Header>
        
        <AccordionList>
          {productDetails.faqs.map((faq, index) => {
            const isActive = activeIdx === index;
            return (
              <AccordionItem key={index}>
                <AccordionHeader onClick={() => toggleAccordion(index)}>
                  <h3>{faq.q}</h3>
                  <Icon active={isActive}>{isActive ? "−" : "+"}</Icon>
                </AccordionHeader>
                <AccordionContent active={isActive}>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </AccordionList>
      </Container>
    </Section>
  );
};

export default FAQ;
