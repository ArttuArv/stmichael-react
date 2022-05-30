import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/michael-logo-nelio.png'
import { 
  Nav, 
  NavbarContainer, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
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

  const onTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth',
      duration: 500,
      spy: true,
      exact: true,
    } );
  }

  return (
    <>
      <Nav scrollNav = {scrollNav}>        
        <NavbarContainer>
        <NavLogoImg scrollNav = {scrollNav} onClick = {onTop} src = {Logo} alt = {''}  />
          <MobileIcon >
            <FaBars onClick = {toggle}/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to = '/' 
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Etusivu
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = 'whisky'
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Hanasta
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to = 'whisky'  
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Viskit
              </NavLinks>
            </NavItem> 
            <NavItem>
              <NavLinks 
                to = 'whisky'  
                smooth = {true} 
                duration = {500} 
                spy = {true}
                exact = 'true' 
                offset = {-80}>
                Urheilu
              </NavLinks>
            </NavItem>       
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;