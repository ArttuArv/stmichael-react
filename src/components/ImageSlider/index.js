import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ImageSliderWrapper, ImageSliderImage, ImageSliderLeftArrow, ImageSliderRightArrow, ImageSliderImageWrapper } from './ImageSliderElements';
import { Link } from 'react-router-dom';
import '../../App.css'
import SimpleImageSlider from "react-simple-image-slider";


const ImageSlider = ( { images } ) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div style = {{  }}>
      <SimpleImageSlider
        width={'100%'}
        height={'74vw'}
        images = {images.map(image => ({
          url: image.background
        }))}
        showBullets={true}
        showNavs={true}
        navSize={70}
        navStyle={2}
        autoPlay={true}
      />
    </div>
  )



  // return (
  //   <ImageSliderWrapper>
  //     <ImageSliderLeftArrow onClick = {prevSlide} />
  //     <ImageSliderRightArrow onClick = {nextSlide} />
  //     {images.map((image, index) => {
  //       return (
  //         <ImageSliderImageWrapper className = {index === current ? 'slide active' : 'slide' } key = {index}>
  //           {index === current && ( 
  //           <>           
  //             <ImageSliderImage src = {image.background} />  
  //             <div className = 'content'>
  //               <Link to = {image.to} style = {{ textDecoration: 'none', }}>{image.header}</Link>
  //             </div>
  //           </>
  //           )}
  //         </ImageSliderImageWrapper>
  //       )
  //     })}
  //   </ImageSliderWrapper>
  // )
}

export default ImageSlider