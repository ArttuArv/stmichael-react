import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  border-top: 6px solid gold;
  border-bottom: 6px solid gold;
  background-color: #003314;
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`    // LinkHeading
  display: flex;
  margin-left: 60px;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: gold;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transform: scale(1.1);        // Ei ehkä tätä
    transition: 0.3 ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  // max-width: auto;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialMediaLogo = styled(Link)`
  color: #fff;
  margin: 16px;
  display: flex;
  justify-content: center;
  // justify-self: center;
  // cursor: pointer;
  // text-decoration: none;
  // font-size: 1.5rem;
  // align-items: center;  
  // font-weight: bold;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialMediaIconLink = styled.a`
  color: gold;
  font-size: 24px;
`;