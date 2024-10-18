import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../Pic/box3d.jpg'; // Update with your background image path
import { Zoom } from 'react-awesome-reveal'; // Import the zoom animation

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover; /* Cover the entire container */
  color: #C2C2C2; 
  text-align: center; /* Center the text */
`;

const Title = styled.h1`
  font-size: 4rem; /* Large title */
  margin: 0; /* Remove default margin */
`;

const Description = styled.p`
  font-size: 1.5rem; /* Smaller description text */
  margin-top: 10px; /* Space between title and description */
`;

const ContactUs = styled.div`
  margin-top: 20px; /* Space above the contact section */
  font-size: 1.2rem; /* Font size for contact text */
`;

const TravelGuide = () => {
  return (
    <Container>
    <Zoom duration={2000} triggerOnce>
      <Title>Travel Guide</Title>
    </Zoom>
    <Zoom duration={2000} delay={500} triggerOnce>
      <Description>
        Tips and insights for your travels. Discover must-see attractions and local favorites!
      </Description>
    </Zoom>
    <Zoom duration={2000} delay={1000} triggerOnce>
      <ContactUs>
        <p>Questions? Contact Us Now!</p>
      </ContactUs>
    </Zoom>
  </Container>
  );
};

export default TravelGuide;
