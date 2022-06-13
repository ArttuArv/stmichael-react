import React from 'react'
import {text1} from '../../assets/text/story.js';
import data from '../../assets/data/products';
import { SportGridWrapper, SportsGridContainer, SportsTextWrapper, SportsTextWrapper2col } from './SportsSectionElements.js';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
      id: 1,
      background: require('../../assets/images/kuva4.png'),
      header: 'Hanatuotteet',
      to: '/beer'
    },
    {
      id: 2,
      background: require('../../assets/images/kuva2.png'),
      header: 'Viskit',
      to: '/whisky'
    },
    {
      id: 3,
      background: require('../../assets/images/kuva3.png'),
      header: 'Urheilu',
      to: '/sports'
    },
    {
      id: 4,
      background: require('../../assets/images/st-michael-tunnelmakuva.jpg'),
      header: 'Tarina',
      to: '/story' 
    },
  ] 

const SportsSection = () => {

    return (
    <>
      <div style = {{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%',}}>
        <SimpleImageSlider
            width={'100vw'}
            height={'300px'}
            images = {images.map(image => ({
                url: image.background
            }))}
            slideDuration={4}
            autoPlay={true}
            autoPlaySpeed={7000}
        />
      </div>   
      <SportsGridContainer>
          <SportGridWrapper>
              <SportsTextWrapper>
                  <div style = {{ padding: '0 10px'}}>
                      <h1 style = {{ fontSize: 'clamp(2rem, 10vw, 3rem)', lineHeight: '1.1', fontWeight: '400' }}>Urheilu</h1>
                      <h3 style = {{ fontWeight: '400' }}><li>Viasattia</li></h3>
                      <h3 style = {{ fontWeight: '400' }}><li>CMorea</li></h3>  
                      <h3 style = {{ fontWeight: '400' }}><li>Valioliigat</li></h3>
                      <h3 style = {{ fontWeight: '400' }}><li>Valioliigat</li></h3>
                      <div style = {{marginTop: '30px', width: '100%'}}>
                          <h3>Tähän kaiken maailman urheiluun liittyvä ilmoitusluontoinen asia.</h3>
                      </div>
                  </div>   
              </SportsTextWrapper>
              <SportsTextWrapper2col>
                  <div style = {{ border: '5px solid gold', borderRadius: '20px', backgroundColor: '#010606', padding: '1rem', color: 'white', width: '100%', fontSize: 'clamp(0.8rem, 4vw, 1rem)' }}>
                      <h1 style = {{ fontSize: 'clamp(2rem, 7vw, 3rem)', lineHeight: '1.1', fontWeight: '400' }}>Kärppäpelit</h1>
                      <h3 style = {{ fontWeight: '400' }}>Bussikuljetukset jäähallille Kärppien kotiotteluihin.</h3>
                      <h3 style = {{ fontWeight: '400' }}>Kyyti lähtee baarin edestä 20min ennen pelin alkua, liput ilmaiseen bussikyytiin saat tiskiltä.</h3>
                      <h3 style = {{ fontWeight: '700' }}>Näytämme kaikki Kärppien pelit myös TV:sta.</h3>
                  </div>
              </SportsTextWrapper2col>                            
          </SportGridWrapper>
      </SportsGridContainer>
    </>
  )
}

export default SportsSection