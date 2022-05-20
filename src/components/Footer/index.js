import React from 'react'
import { 
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to = '/signin'>How it works</FooterLink>
                <FooterLink to = '/signin'>Testimonials</FooterLink>
                <FooterLink to = '/signin'>Careers</FooterLink>
                <FooterLink to = '/signin'>Investors</FooterLink>
                <FooterLink to = '/signin'>Terms of Service</FooterLink>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to = '/signin'>How it works</FooterLink>
                <FooterLink to = '/signin'>Testimonials</FooterLink>
                <FooterLink to = '/signin'>Careers</FooterLink>
                <FooterLink to = '/signin'>Investors</FooterLink>
                <FooterLink to = '/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to = '/signin'>How it works</FooterLink>
                <FooterLink to = '/signin'>Testimonials</FooterLink>
                <FooterLink to = '/signin'>Careers</FooterLink>
                <FooterLink to = '/signin'>Investors</FooterLink>
                <FooterLink to = '/signin'>Terms of Service</FooterLink>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to = '/signin'>How it works</FooterLink>
                <FooterLink to = '/signin'>Testimonials</FooterLink>
                <FooterLink to = '/signin'>Careers</FooterLink>
                <FooterLink to = '/signin'>Investors</FooterLink>
                <FooterLink to = '/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer