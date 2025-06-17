import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; // For accessing route parameters
import { useCart } from '../Cart/CartContext';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  color: #C2C2C2;
  background-color: #2E323B;
  padding: 10vh 2rem;
  box-sizing: border-box;
  font-family: 'quicksand', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 25vh 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  width: 30%;
  max-width: 350px;
  margin-right: 5vw;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 60%;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-radius: 1%;
  border-color: #e8e0d3;
  padding: 3rem;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 2rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const AddToCartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;


const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const { addToCart } = useCart();

  // Sample data for products (to simulate a database or API)
  const productsData = [
    { id: 1, name: "Camping 1", image: require('../Pic/camp1.jpg'), description: "Great for outdoor adventures", price: "$100" },
    { id: 2, name: "Camping 2", image: require('../Pic/camp2.jpg'), description: "Durable and spacious", price: "$110" },
    { id: 3, name: "Camping 3", image: require('../Pic/camp3.jpg'), description: "Durable and spacious", price: "$120" },
    { id: 4, name: "Camping 4", image: require('../Pic/camp4.jpg'), description: "Durable and spacious", price: "$130" },
    { id: 5, name: "Camping 5", image: require('../Pic/camp5.jpg'), description: "Lightweight and portable", price: "$150" },
    { id: 6, name: "Clothing 1", image: require('../Pic/cloth1.jpg'), description: "Comfortable for all seasons", price: "$40" },
    { id: 7, name: "Clothing 2", image: require('../Pic/cloth2.jpg'), description: "Comfortable for all seasons", price: "$50" },
    { id: 8, name: "Clothing 3", image: require('../Pic/cloth3.jpg'), description: "Comfortable for all seasons", price: "$60" },
    { id: 9, name: "Clothing 4", image: require('../Pic/cloth4.jpg'), description: "Comfortable for all seasons", price: "$70" },
    { id: 10, name: "Clothing 5", image: require('../Pic/cloth5.jpg'), description: "Comfortable for all seasons", price: "$80" },
    { id: 11, name: "Snack 1", image: require('../Pic/snack1.jpg'), description: "Delicious and energizing", price: "$5" },
    { id: 12, name: "Snack 2", image: require('../Pic/snack2.jpg'), description: "Delicious and energizing", price: "$10" },
    { id: 13, name: "Snack 3", image: require('../Pic/snack3.jpg'), description: "Delicious and energizing", price: "$15" },
  ];

  // Find the product based on the ID
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>; // Handle case where product doesn't exist
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!'); // Show alert message
  };

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <DetailsContainer>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price}</Price>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </DetailsContainer>
    </Container>
  );
};

export default ProductDetail;
