import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 876px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.2) 0%, 
      rgba(0, 0, 0, 0.6) 100%),
      linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.2) 0%, 
        transparent 100%);
    z-index: 2;
  }

  @media screen and (max-height: 667px) {
    height: 630px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroLogo = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 48px; 

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    height: 150px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 24px;
    height: 100px;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 24px;
    height: 80px;
  }
`;

export const HeroH1 = styled.h1`
  color: #D4A24E;
  font-size: 68px;
  text-align: center;
  text-shadow: 3px 5px 3px #000;
  margin-bottom: 8px;

  @media screen and (max-width: 873px) {
    font-size: 68px;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 375px) {
    font-size: 38px;
  }
`;

export const HeroH3 = styled.h3`
  color: #D4A24E;
  font-size: 42px;
  text-align: center;
  text-shadow: 3px 5px 3px #000;
  margin-bottom: 8px;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroP = styled.p`
  color: #D4A24E;
  font-size: 42px;
  text-align: center;
  max-width: 600px;
  text-shadow: 3px 5px 3px #000;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }  
`;

export const HeroTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;  
  text-shadow: 3px 5px 3px #000;
`;

export const HeroTableBody = styled.tbody`
`;

export const HeroTableRow = styled.tr`
  // border-bottom: 3px solid #D4A24E;
  // box-shadow: 3px 5px 3px #000;
`;

export const HeroTableHead = styled.th`
  padding: 4px;
  color: #D4A24E;
  font-size: 30px;
  text-align: left;
  text-shadow: 3px 5px 3px #000;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.5);
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

