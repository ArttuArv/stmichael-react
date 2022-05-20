import React from 'react'
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/St michael logo.png'
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
  return (
    <>
      <Nav>
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