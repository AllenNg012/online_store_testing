import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';  
import logo from '../Pic/logo3.png'; 
import 'typeface-quicksand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping,faBagShopping  } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Use solid version


const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px;
  background-color: transparent; /* No background color */
  box-shadow: none; /* Remove shadow if desired */
  position: fixed; /* Fixes the navbar to the top */
  top: 0; /* Aligns to the top */
  left: 0; /* Aligns to the left */
  right: 0; /* Aligns to the right */
  z-index: 1000; /* Ensures the navbar is above other content */
  height: 60px; /* Set a fixed height for the navbar */
  font-family: 'quicksand', sans-serif;
`;

const Left = styled.div`
  flex: 1;
  text-align: left; /* Align text to the left */
`;

const ShopText = styled.span`
  font-size: 16px; /* Font size for "Shop" */
  color: white; /* Change color to ensure visibility */
`;

const Center = styled.div`
  flex: 2;
  text-align: center; /* Center alignment */
  transition: opacity 1s ease; /* Smooth transition for opacity */
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; /* Control opacity */
`;

const Logo = styled.img`
  max-height: 130px; /* Maximum height for the logo */
  height: auto; /* Maintain aspect ratio */
  width: auto; /* Maintain aspect ratio */
  margin-top: 70px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
`;
const Icon = styled.span`
  font-size: 15px; /* Size for the icons */
  margin-left: 15px; /* Space between icons */
  cursor: pointer; /* Pointer cursor for icons */
  color: white; /* Change color to ensure visibility */
`;

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false); // Hide logo when scrolling
      } else {
        setIsVisible(true); // Show logo when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fade duration={3000} triggerOnce>
      <Navbar>
        <Left>
        <Link to="/WhoAreWe">
          <ShopText>Us</ShopText>
          </Link>
        </Left>
        <Center isVisible={isVisible}>
          <Link to="/">
            <Logo src={logo} alt="Logo" /> {/* Logo image */}
          </Link>
        </Center>
        <Right>
        <Link to="/SignIn" >
        <Icon><FontAwesomeIcon icon={faUser} /></Icon>
          </Link>
          <Link to="/Products">
          <Icon><FontAwesomeIcon icon={faBagShopping} /></Icon>
          </Link>
          <Link to="/Cart">
            <Icon>
              <FontAwesomeIcon icon={faCartShopping} />
            </Icon>
          </Link>
         </Right>
      </Navbar>
    </Fade>
  );
};

export default NavigationBar;
