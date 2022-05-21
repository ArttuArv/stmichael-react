import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/St michael logo.png'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink, 
  NavLogoImg,
} from './NavbarElements'

const Navbar  = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
          <MobileIcon >
            <FaBars onClick = {toggle}/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to = 'news' >Ajankohtaista</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'products' >Tuotteita</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to = 'story' >Tarina</NavLinks>
            </NavItem>    
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;