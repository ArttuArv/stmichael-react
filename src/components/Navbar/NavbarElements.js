import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  background: linear-gradient(
    to bottom, 
    rgba(18, 93, 13, 1) 0%, 
    rgba(18, 93, 13, 0.01) 100%);
  forest green hex colour background: #014421;
  //background: #123d0d;
  height: 80px;
  margin-top: -80px; 
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    color: #fff;
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  widht: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`    // Navbar Logo
  color: #ffff00;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoImg = styled.img`       // Logo vasen yläkulma
  height: 70%;
  align-self: center;
  align: left
`;

export const MobileIcon = styled.div`       // Menu-ikoni oikea yläreuna
    display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #d4af37;
  }
`;

export const NavMenu = styled.ul` 
  display: flex;
  list-style: none;
  text-align: center; 

  @media screen and (max-width: 768px) {    
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 1.5rem;
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #d4af37;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #FFDB51;
    transform: scale(1.2);
    transition: 0.6 ease-in-out;
    border-bottom: 6px solid #01BF71;
  }

  &:active {
    border-bottom: 3px solid gold;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkScroll)`
  border-radius: 50px;
  background: #d4af37;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #01b0606;
`;