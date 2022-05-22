import React from 'react'
import { 
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialMediaLogo,
  SocialMediaIcons,
  SocialMediaIconLink,
} from './FooterElements'
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLogo to = '/signin'>
        Logo
      </SocialMediaLogo>
      <FooterWrapper>
        <FooterLinksContainer>          
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Tekstiä</FooterLinkTitle>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Tekstiä</FooterLinkTitle>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
                <FooterLink to = '/signin'>Tekstiä</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>           
            <SocialMediaIcons>
              <SocialMediaIconLink href = '//www.facebook.com/irishpubstmichael' target = '_blank' aria-label = 'Facebook'>
                <FaFacebook />
              </SocialMediaIconLink>
              <SocialMediaIconLink href = '//www.instagram.com/st.michael_oulu' target = '_blank' aria-label = 'Facebook'>
                <FaInstagram />
              </SocialMediaIconLink>
              <SocialMediaIconLink href = 'mailto:stmichael@stmichael.fi' target = '_blank' aria-label = 'Mail'>
                <FaEnvelope />
              </SocialMediaIconLink>
            </SocialMediaIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer