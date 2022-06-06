import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle} >
      <Icon onClick = {toggle} >
        <CloseIcon onClick = {toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = "/beer" onClick = {() => toggle} >
            Hanatuotteet
          </SidebarLink>
          <SidebarLink to = "/whisky" onClick = {() => toggle} >
            Viskit
          </SidebarLink>
          <SidebarLink to = "/sports" onClick = {() => toggle} >
            Urheilu
          </SidebarLink>
          <SidebarLink to = "/story" onClick = {() => toggle} >
            Tarina
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>  
    </SidebarContainer>
  )
}

export default Sidebar