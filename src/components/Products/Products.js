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

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw; 
  height: auto; 
  color: #C2C2C2; 
  text-align: center; 
  overflow: hidden; 
  background-color: #2E323B;
  padding-bottom: 10vh;
  font-family: 'quicksand', sans-serif;
`;

const Background = styled.div`
  height: 51.20vw; /* Maintain 16:9 aspect ratio */
  width: 100%; 
  background: url(${backgroundImage}) no-repeat center center; 
`;

const Title = styled.h2`
  font-size: 4rem; 
  margin-top: 35vh; 
`;

const Description = styled.p`
  font-size: 1.5rem; 
  margin-top: 10px; 
`;

const Section = styled.div`
  width: 80%; 
  margin-top: 40px; 
  text-align: left; 
  border: solid;
  border-radius: 1%;
  border-color:    #e8e0d3;
  padding: 0 2rem;
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;  
  margin-bottom: 30px; 
  text-decoration: underline; 
  text-decoration-color: #C2C2C2; 
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-wrap: wrap; 
  cursor: pointer; 
`;

const ImageWrapper = styled.div`
  position: relative;
  width: calc(15% - 10px); 
  margin-bottom: 15px; 
  border-radius: 15px; 
  overflow: hidden; 

  &:hover img {
    transform: scale(1.1); 
    filter: brightness(70%); 
  }

  &:hover div {
    opacity: 1; 
  }
`;

const Image = styled.img`
  width: 100%; 
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
`;

const ProductDetails = styled.div`
  margin-top: 5px; /* Space between image and details */
  text-align: center; /* Center the text */
  font-size: 1rem; /* Font size for the details */
  color: #ffffff; /* Text color for better contrast */
  background-color: rgba(46, 50, 59, 0.8); /* Semi-transparent background */
  border-radius: 5px; /* Rounded corners */
`;
const ArrowIcon = styled.svg`
  width: 40px; 
  height: 40px; 
  margin-top: 20vh; 
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
`;

const Products = () => {
  const navigate = useNavigate();

  // Data for products (example)
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

  return (
    <Container>
      <Background>
        <Zoom duration={2000} triggerOnce>
          <Title>Let's boost up your experiences</Title>
        </Zoom>
        <Zoom duration={2000} delay={500} triggerOnce>
          <Description>
            We provide you the best equipment for your next journey
          </Description>
          <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17l-5-5h10z" />
          </ArrowIcon>
        </Zoom>
      </Background>

      {/* Camping Section */}
      <Section>
        <SectionTitle>Camping</SectionTitle>
        <ImageRow>
          {productsData.filter(product => product.name.startsWith("Camping")).map((product) => (
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

      {/* Clothing Section */}
      <Section>
        <SectionTitle>Clothing</SectionTitle>
        <ImageRow>
          {productsData.filter(product => product.name.startsWith("Clothing")).map((product) => (
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

      {/* Snack Section */}
      <Section>
        <SectionTitle>Snack</SectionTitle>
        <ImageRow>
          {productsData.filter(product => product.name.startsWith("Snack")).map((product) => (
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
    </Container>
  );
};

export default Products;
