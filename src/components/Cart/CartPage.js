import React from 'react';
import styled from 'styled-components';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';  

// Styled components
const CartContainer = styled.div`
  font-family: 'quicksand', sans-serif;
  background-color: #2E323B;
  color: #C2C2C2;
  border: solid;
  border-radius: 1%;
  border-color: #e8e0d3;
  padding: 2rem;
  margin: 10rem auto;
  max-width: 1000px;
  width: 90%;
  @media (max-width: 768px) {
    margin: 5rem auto;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;


const Container = styled.div`
  padding: 20px;
  font-family: 'quicksand', sans-serif;
  background-color: #2E323B;
  color: #C2C2C2;
  min-height: 100vh;
    display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 7rem;
  }
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  align-items: center;
  margin: 10px 0;
  border-bottom: 1px solid #C2C2C2;
  padding: 10px 0;
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr auto;
    grid-template-rows: auto auto;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    text-align: center;
  }
`;


const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;


const ItemName = styled.span`
  font-size: 2.5vh;

  @media (max-width: 480px) {
    font-size: 2vh;
  }
`;

const ItemPrice = styled.span`
  font-size: 2.5vh;
  text-align: right;

  @media (max-width: 480px) {
    text-align: center;
    font-size: 2vh;
  }
`;


const CheckoutButton = styled.button`
  padding: 10px 20px;
  font-size: 2vh;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1.8vh;
  }
`;


const DeleteButton = styled.button`
  padding: 5px 10px;
  font-size: 1.5vh;
  color: white;
  background-color: #d9534f; /* Red background */
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c; /* Darker red on hover */
  }
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  font-size: 1.5vh;
  color: white;
  background-color: #007bff; /* Blue background */
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const TotalPrice = styled.h2`
  margin-top: 20px;
  text-align: right;
  font-size: 3vh;

  @media (max-width: 480px) {
    text-align: center;
    font-size: 2.5vh;
  }
`;


const CartPage = () => {
  const { cart, totalPrice, removeFromCart, updateCartQuantity } = useCart();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      removeFromCart(id); // Call the function to remove item from cart
    }
  };

  const handleIncrease = (id) => {
    updateCartQuantity(id, 1); // Increase quantity by 1
  };

  const handleDecrease = (id) => {
    updateCartQuantity(id, -1); // Decrease quantity by 1
  };

  return (
    <Container>
      <CartContainer>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <CartItem key={index}>
              <ItemImage src={item.image} alt={item.name} /> {/* Item Image */}
              <ItemName>
                {item.name} {item.quantity > 1 && ` ( x${item.quantity} )`}
              </ItemName>
              <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
              <div>
              <span> &nbsp;&nbsp; </span>
              <QuantityButton onClick={() => handleDecrease(item.id)}>-</QuantityButton>
                <span> {item.quantity} </span>
                <QuantityButton onClick={() => handleIncrease(item.id)}>+</QuantityButton>
              </div>
              <ItemPrice>{`$${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}`}</ItemPrice>
            </CartItem>
          ))
        )}
        <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
        <Link to="/SignIn" >
        <CheckoutButton>Checkout</CheckoutButton>
        </Link>
      </CartContainer>
    </Container>
  );
};

export default CartPage;
