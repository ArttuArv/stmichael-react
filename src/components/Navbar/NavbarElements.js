import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  // background: linear-gradient(
  //   to bottom, 
  //   rgba(18, 93, 13, 1) 0%, 
  //   rgba(18, 93, 13, 0.01) 100%);
  //background: #123d0d;
  background: ${({ scrollNav }) => ( scrollNav 
    ? '#13371d' 
    : 'transparent' )}; 
  border-bottom: ${({ scrollNav }) => ( scrollNav 
    ? '3px solid #D4A24E' 
    : 'none' )}; 
  height: 60px;
  margin-top: -60px; 
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.4s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.4s all ease;
  }

  @media screen and (max-width: 768px) {
    background: transparent;
    border-bottom: none;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  widht: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`    // Navbar Logo
  color: #D4A24E;
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
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: gold;
  }

  @media screen and (max-width: 390px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: gold;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: gold;
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
  font-size: 2rem;
  height: 80px;
  margin-top: 20px;
`;

export const NavLinks = styled(LinkScroll)`
  // display: flex;
  color: #D4A24E;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;

  // height: 100%;
  cursor: pointer;  

  &:hover {
    color: #CDC262;
    font-size: 2.1rem;
    border-bottom: 3px solid #D4A24E;
    transition: 0.6 ease-in-out;    
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