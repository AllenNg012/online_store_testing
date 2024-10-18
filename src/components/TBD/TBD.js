import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal'; // Import the zoom animation
import backgroundImage from '../Pic/box4d.jpg'; // Update with your background image path

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


const TBD = () => {
  return (
    <Container>
      <Zoom duration={2000} triggerOnce>
        <Title>TBD</Title>
      </Zoom>
      <Zoom duration={2000} delay={500} triggerOnce>
        <Description>
          Coming soon
        </Description>
      </Zoom>

    </Container>
  );
};

export default TBD;
