import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import pic1 from './Pic/home1.jpg'; 
import pic2 from './Pic/home2.jpg'; 
import pic3 from './Pic/home3.jpg'; 
import pic4 from './Pic/home4.jpg'; 
import boxPic1 from './Pic/box1.jpg'; 
import boxPic2 from './Pic/box2.jpg';
import boxPic3 from './Pic/box3.jpg';
import boxPic4 from './Pic/box4.jpg';
import 'typeface-league-spartan';
import 'typeface-poppins';
import 'typeface-quicksand';
import 'typeface-roboto';
import { Link } from 'react-router-dom';  
import {   Slide ,Fade} from 'react-awesome-reveal';  

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 20px;
  padding-top: 150px; 
  padding-bottom: 150px; 
  background-color: #2E323B;
`;

const BigContainer = styled.div`
  background-color: #2E323B;
  color: #C2C2C2;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  width: 100%; 
  max-width: 900px; 
`;

const Slideshow = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px; 
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.05); 
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
  }

  &:hover > .disc {
    bottom: 0; 
  }
`;

const Title = styled.div`
  margin: 20px 0;
  font-size: 24px; 
  text-align: left; 
  color: #C2C2C2; 
  width: 100%; 
  font-family: 'quicksand', sans-serif;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  width: 100%;
  margin-top: 20px; 
`;

const Box = styled.div`
  position: relative;
  aspect-ratio: 16 / 9; 
  overflow: hidden; 
  cursor: pointer;
  transition: transform 0.3s ease; 
  border-radius: 10px;

  &:hover {
    transform: scale(1.05); 
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
  }
`;

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  position: absolute; 
  transition: opacity 0.5s ease; 
  opacity: 0; 
`;

const Description = styled.div`
  position: absolute;
  bottom: -2.5rem; 
  left: 0;
  right: 0;
  text-align: left;
  padding: 0.5rem;
  background: linear-gradient(rgba(0,0,0, 0.1), rgba(0,0,0, 0.8)); 
  transition: all 400ms ease-in-out;
  z-index: 2; 

  h1 {
    font-size: 1rem;
    color: white; 
  }
  
  p {
    width: 90%;
    font-size: 0.8rem;
    color: #C6BBA8; 
  }

  /* Show description on hover */
  ${Box}:hover & {
    bottom: 0; 
  }
`;

const Home = () => {
  const images = [pic1, pic2, pic3, pic4];
  const boxImages = [boxPic1, boxPic2, boxPic3, boxPic4]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const descriptions = [
    {
      title: "Who Are We?",
      text: "A team crafting unique travel experiences.",
      path: "/WhoAreWe"
    },
    {
      title: "Our Product",
      text: "Custom travel packages for every style.",
      path: "/Products"
    },
    {
      title: "Travel Guide",
      text: "Your go-to for destination tips.",
      path: "/TravelGuide"
    },
    {
      title: "TBD",
      text: "Coming soon.",
      path: "/TBD"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const descriptionText = "Get start to your journey.";

  return (
    <BigContainer>
    <Container>
      <Fade duration={4000} triggerOnce>
        <Wrapper>
          <Slideshow>
            {images.map((img, index) => (
              <React.Fragment key={index}>
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{ opacity: currentIndex === index ? 1 : 0 }} 
                />
                <Description className="disc">
                  <h1>Come with us</h1>
                  <p>{descriptionText}</p>
                </Description>
              </React.Fragment>
            ))}
          </Slideshow>
          
          <Title>Our Story</Title>

          <GridContainer>
            {descriptions.map((desc, index) => (
              <Slide key={index} direction={index % 2 === 0 ? "left" : "right"} duration={1500} triggerOnce>
                <Link to={desc.path} style={{ textDecoration: 'none' }}>
                  <Box>
                    <BoxImage src={boxImages[index]} alt={`Box ${index + 1}`} />
                    <Description className="disc">
                      <h1>{desc.title}</h1>
                      <p>{desc.text}</p>
                    </Description>
                  </Box>
                </Link>
              </Slide>
            ))}
          </GridContainer>
        </Wrapper>
      </Fade>
    </Container>
    </BigContainer>
  );
};

export default Home;
