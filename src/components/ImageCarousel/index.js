import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

const ImageCarousel = () => {

  return (        
    <Carousel showArrows={true} onChange={{}} onClickItem={{}} onClickThumb={{}} infiniteLoop = {true}>
      {images.map(image => {
        return (
          <div key={image.id} style = {{ zIndex: '10' }}>
            <img src={image.background} alt='' />
            <p className = "legend">{image.header}</p>
          </div> )
      })}
    </Carousel>        
  )
}

export default ImageCarousel;