import React from 'react'
import { 
  ImageContainer, 
  ImageWrapper, 
  Image, 
  BoxListContainer, 
  BoxListWrapper, 
  BoxListBox,
  BoxListH1,
  BoxListH2, 
  BoxListH3, 
  BoxListP } from './BoxListElements';

const images = [
  require('../../assets/images/kuva1.jpg'),
  require('../../assets/images/kuva2.jpg'),
  require('../../assets/images/kuva3.jpg'),
  require('../../assets/images/kuva4.jpg'),
]

const BoxList = ({ whisky }) => {
  return (
    <>
      <ImageContainer>
        <ImageWrapper>
          {images.map(src => (
            <Image key={src} src={src} />
          ))}
        </ImageWrapper>
      </ImageContainer>
      <BoxListContainer>
        <BoxListH1>Viskiotsikko</BoxListH1>
        <BoxListH2>Lista elää viikottain. Kysy lisää henkilökunnalta.</BoxListH2>
        <BoxListWrapper>
          {whisky.map(whisky => (
            <BoxListBox key={whisky.id}>
              <BoxListH3>
                {whisky.name}
              </BoxListH3>
              <BoxListP>
                {whisky.about}
              </BoxListP>
              <BoxListP>
                {whisky.country}
              </BoxListP>
              <BoxListP>
                {Math.floor(whisky.price)} €
              </BoxListP>
              <BoxListP>
                {Math.floor(whisky.price) * 2} €
              </BoxListP>
            </BoxListBox>
          ))}
        </BoxListWrapper>
      </BoxListContainer>
    </>
  )
}

export default BoxList