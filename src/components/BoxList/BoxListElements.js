import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  minHeight: 600px;
  width: 100%;
  padding-top: 80px;
  background: #06260F;

  @media screen and (max-width: 960px) {
    padding-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  width: 100%;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));


  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Image = styled.img`
  width: 100%;
  border-bottom: 3px solid #D4A24E;
  border-top: 3px solid #D4A24E;
  border-collapse: collapse;
`;

export const BoxListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #06260F;
`;

export const BoxListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 5px;
  padding: 5px 5px;
  width: 100%;
  max-width: 1200px;
  background-color: #06260F;

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
`;

export const BoxListBox = styled.div`
  min-width: 100px;
  min-height: 50px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  background-color: #FBE5AC;
  border: 2px solid #F5BD30;
  padding: 10px;
  border-radius: 10px;

  @media (max-width: 280px) {
    width: 270px;
    height: 270px;
`;

export const BoxListH1 = styled.h1`
  color: #F5BD30;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  padding: 10px;
`;

export const BoxListH2 = styled.h1`
  color: #F5BD30;
  font-weight: 400;
  font-size: 26px;
  text-align: center;
  margin-bottom: 40px;
`;

export const BoxListH3 = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 700;
  width: 100%;
  color: #000;
  text-align: left;
`;

export const BoxListP = styled.p`
  font-size: 11px;
  font-weight: 400;
  width: 100%;
  color: #000;
  text-align: left;
`;