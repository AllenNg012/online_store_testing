import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; // For accessing route parameters
import { useCart } from '../Cart/CartContext';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row; /* Align items in a row */
  align-items: center; /* Center vertically */
  justify-content: center;
  width: 100vw; 
  height: auto; 
  color: #C2C2C2; 
  background-color: #2E323B;
  padding-top: 25vh;
  padding-bottom: 8.7vh;
  font-family: 'quicksand', sans-serif;
`;

const Title = styled.h2`
  font-size: 3rem; 
  margin-top: 20px; 
  text-align: center; /* Center text */
`;

const Description = styled.p`
  font-size: 1.2rem; 
  margin: 10px 0; 
  text-align: center; /* Center text */
`;

const Price = styled.p`
  font-size: 1.5rem; 
  font-weight: bold; 
  text-align: center; /* Center text */
`;

const Image = styled.img`
  width: 30%; /* Adjust as needed */
  margin-right: 30vh; /* Increased space between image and text */
  border-radius: 10px; 
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack text elements vertically */
  align-items: center; /* Center text within the container */
`;

const AddToCartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #4CAF50; /* Green background */
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
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
