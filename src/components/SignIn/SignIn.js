import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  background-color: #2E323B; /* Background color */
  color: white; /* Text color */
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 300px; /* Width of the input */
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #C2C2C2; 
  background-color: #007BFF; /* Button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle sign-in logic here
    console.log('Email submitted:', email);
    alert('Invalid email!'); 
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <Button onClick={handleSubmit}>Sign In</Button>
    </Container>
  );
};

export default LoginPage;
