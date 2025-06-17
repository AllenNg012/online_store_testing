import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';  
import logo from '../Pic/logo3.png'; 
import 'typeface-quicksand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 160px;
  background-color: transparent;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  font-family: 'quicksand', sans-serif;

  @media (max-width: 1024px) {
    padding: 10px 100px;
  }

  @media (max-width: 768px) {
    padding: 10px 40px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  text-align: left;
`;

const ShopText = styled.span`
  font-size: 14px;
  color: white;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
  transition: opacity 1s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const Logo = styled.img`
  max-height: 120px;
  margin-top: 60px;

  @media (max-width: 768px) {
    max-height: 90px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    max-height: 70px;
    margin-top: 30px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.span`
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
  color: white;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fade duration={3000} triggerOnce>
      <GlobalStyle />
      <Navbar>
        <Left>
          <Link to="/WhoAreWe">
            <ShopText>Us</ShopText>
          </Link>
        </Left>
        <Center isVisible={isVisible}>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
        </Center>
        <Right>
          <Link to="/SignIn"><Icon><FontAwesomeIcon icon={faUser} /></Icon></Link>
          <Link to="/Products"><Icon><FontAwesomeIcon icon={faBagShopping} /></Icon></Link>
          <Link to="/Cart"><Icon><FontAwesomeIcon icon={faCartShopping} /></Icon></Link>
        </Right>
      </Navbar>
    </Fade>
  );
};

export default NavigationBar;
