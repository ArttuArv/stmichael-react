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
          <SidebarLink to = "news" onClick = {toggle} >
            Ajankohtaista
          </SidebarLink>
          <SidebarLink to = "products" onClick = {toggle} >
            Tuotteita
          </SidebarLink>
          <SidebarLink to = "story" onClick = {toggle} >
            Tarina
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>  
    </SidebarContainer>
  )
}

export default Sidebar