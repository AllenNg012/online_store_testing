import React from 'react';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

import backgroundImage from '../Pic/box2dd.jpg';
import snack1 from '../Pic/snack1.jpg';
import snack2 from '../Pic/snack2.jpg';
import snack3 from '../Pic/snack3.jpg';
import cloth1 from '../Pic/cloth1.jpg';
import cloth2 from '../Pic/cloth2.jpg';
import cloth3 from '../Pic/cloth3.jpg';
import cloth4 from '../Pic/cloth4.jpg';
import cloth5 from '../Pic/cloth5.jpg';
import camp1 from '../Pic/camp1.jpg';
import camp2 from '../Pic/camp2.jpg';
import camp3 from '../Pic/camp3.jpg';
import camp4 from '../Pic/camp4.jpg';
import camp5 from '../Pic/camp5.jpg';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  color: #C2C2C2;
  text-align: center;
  overflow-x: hidden;
  background-color: #2E323B;
  padding-bottom: 10vh;
  font-family: 'quicksand', sans-serif;
`;

const Background = styled.div`
  height: 51.20vw;
  width: 100%;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    @media (max-width: 500px) {
  height: 80.20vw;
  }
`;


const Title = styled.h2`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 25vh;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-top: 20vh;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Section = styled.div`
  width: 90%;
  margin-top: 40px;
  margin-bottom: 60px; /* 👈 Add spacing between sections */
  text-align: left;
  border: solid;
  border-radius: 1%;
  border-color: #e8e0d3;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-decoration: underline;
  text-decoration-color: #C2C2C2;
`;

const ImageRow = styled.div`
  display: flex;
  gap: 100px;
  overflow-x: scroll;
 
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 150px;
  height: 220px; /* Set a fixed height */
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 130px;
    height: 190px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 170px;
  }

  &:hover img {
    transform: scale(1.1);
    filter: brightness(70%);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
`;


const ProductDetails = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 0.9rem;
  color: #ffffff;
  background-color: rgba(46, 50, 59, 0.8);
  padding: 5px 0;
  text-align: center;
  z-index: 2;
`;

const ArrowIcon = styled.svg`
  width: 40px;
  height: 40px;
  margin-top: 10vh;
  fill: white;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  @media (max-width: 1200px) {
     margin-top: 10vh;

  }

  @media (max-width: 800px) {
         margin-top: 0vh;

  }

`;

// Main Component
const Products = () => {
  const navigate = useNavigate();

  const productsData = [
    { id: 1, name: "Camping 1", image: camp1, description: "Great for outdoor adventures", price: "$100" },
    { id: 2, name: "Camping 2", image: camp2, description: "Durable and spacious", price: "$110" },
    { id: 3, name: "Camping 3", image: camp3, description: "Durable and spacious", price: "$120" },
    { id: 4, name: "Camping 4", image: camp4, description: "Durable and spacious", price: "$130" },
    { id: 5, name: "Camping 5", image: camp5, description: "Lightweight and portable", price: "$150" },
    { id: 6, name: "Clothing 1", image: cloth1, description: "Comfortable for all seasons", price: "$40" },
    { id: 7, name: "Clothing 2", image: cloth2, description: "Comfortable for all seasons", price: "$50" },
    { id: 8, name: "Clothing 3", image: cloth3, description: "Comfortable for all seasons", price: "$60" },
    { id: 9, name: "Clothing 4", image: cloth4, description: "Comfortable for all seasons", price: "$70" },
    { id: 10, name: "Clothing 5", image: cloth5, description: "Comfortable for all seasons", price: "$80" },
    { id: 11, name: "Snack 1", image: snack1, description: "Delicious and energizing", price: "$5" },
    { id: 12, name: "Snack 2", image: snack2, description: "Delicious and energizing", price: "$10" },
    { id: 13, name: "Snack 3", image: snack3, description: "Delicious and energizing", price: "$15" },
  ];

  const handleImageClick = (id) => {
    navigate(`/ProductDetail/${id}`);
  };

  const renderSection = (title, keyword) => (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <ImageRow>
        {productsData
          .filter(product => product.name.startsWith(keyword))
          .map(product => (
            <ImageWrapper key={product.id} onClick={() => handleImageClick(product.id)}>
              <Image src={product.image} alt={product.name} />
              <Overlay />
              <ProductDetails>
                {product.name} - {product.price}
              </ProductDetails>
            </ImageWrapper>
          ))}
      </ImageRow>
    </Section>
  );

  return (
    <Container>
      <Background>
        <Zoom duration={2000} triggerOnce>
          <Title>Let's boost up your experiences</Title>
        </Zoom>
        <Zoom duration={2000} delay={500} triggerOnce>
          <Description>We provide you the best equipment for your next journey</Description>
          <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17l-5-5h10z" />
          </ArrowIcon>
        </Zoom>
      </Background>

      {renderSection("Camping", "Camping")}
      {renderSection("Clothing", "Clothing")}
      {renderSection("Snack", "Snack")}
    </Container>
  );
};

export default Products;
