import React from 'react';
import { useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { SPCard, SPContainer, SPCardWrapper, SPCardH1, } from './SlidingPicturesElements';

const images = [
  {
    background: require('../../assets/images/kuva1.jpg'),
    header: 'Otsikko1',
    to: '/whisky'
  },
  {
    background: require('../../assets/images/kuva2.jpg'),
    header: 'Otsikko2',
    to: '/whisky'
  },
  {
    background: require('../../assets/images/kuva3.jpg'),
    header: 'Otsikko3',
    to: '/whisky'
  },
  {
    background: require('../../assets/images/kuva4.jpg'),
    header: 'Otsikko4',
    to: '/whisky' 
  },
  {
    background: require('../../assets/images/beer.png'),
    header: 'Otsikko5',
    to: '/whisky'
  },
]
 

const SlidingPictures = () => {
  const [style, setStyle] = useSpring(() => ({
      transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    setStyle.start({transform: `perspective(500px) rotateY(${event.scrolling 
      ? clamp( event.delta[0] ) 
      : 0 }deg)`
    });
  });

  const clamp = (value, clampAt = 15) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  return (
    <>
      <SPContainer { ...bind() }>
        {images.map(src => (          
          <SPCard key={src.header} style = {{ ...style, backgroundImage: `url(${src.background})` }}>
            <a href={src.to} style = {{textDecoration: 'none'}}>
              <SPCardWrapper>
                <SPCardH1>{src.header}</SPCardH1>
              </SPCardWrapper>
            </a>
          </SPCard>         
        ))}
      </SPContainer>
    </>
  );
}

export default SlidingPictures