import React, { useState } from 'react'
import {text1, text2, text3} from '../../assets/text/story.js';
import textFile from '../../assets/text/story.txt';
import { StoryPageColumn2spanColumn, StoryPageColumn2SpanRow, StoryPageContainer, StoryPageGridWrapper, StoryPageImage, StoryPageImageWrapper } from './StorySectionElements.js';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#353535',
  fontSize: '3rem',
  color: '#fff',
  boxShadow: 'rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem',
  height: '100%',
  width: '100%',
  borderRadius: '4px',
  transition: 'all 500ms',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  // backgroundImage: `url(${images.kuva5})`,
  // border: '1px solid gold',

  hover: [
      {
          boxShadow: 'rgba(2, 8, 20, 0.1) 0px 0.35rem 1.175rem, rgba(2, 8, 20, 0.08) 0px 0.175rem 0.5rem',
          transform: 'translateY(-3px) scale(1.1)',
      },
  ],
}

const gridStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
}

const textWrapper = {
  height: '100%',
  width: '100%',
  textAlign: 'justify',
  hyphens: 'auto',
  fontSize: '16px',
  color: '#F5BD30',
  fontWeight: '400',
  padding: '10px',
}

const images = [
  require('../../assets/images/kuva1.png'),
  require('../../assets/images/kuva2.png'),
  require('../../assets/images/kuva3.png'),
  require('../../assets/images/kuva4.png'),
]

const Story = () => {
  const [text, setText] = useState();

  const getText = () => {
    fetch(textFile)
      .then(response => response.text())
      .then((textContent) => {
        setText(textContent);
      });
    return text || 'Loading...';
  }

  return (
    <StoryPageContainer>
      <div style = {{ maxWidth: '100vh', margin: '0 20px' }}>
        <StoryPageGridWrapper>
          <div style={cardStyle}>
            <div style = {textWrapper}>
              <h1>Otsikko1</h1>
              <p>{text1}</p>
              <div>1</div>
            </div>
          </div>
          <StoryPageColumn2SpanRow>           
            {/* {images.map((image, index) => (<StoryPageImageWrapper key = {index} style = {{backgroundImage: `url(${image})`}}> */}
            <StoryPageImageWrapper>
              {images.map((image, index) => (              
                <StoryPageImage style = {{ width: '100%', borderRadius: '20px' }} key = {index} src = {image} />                 
              ))}
            </StoryPageImageWrapper> 
          </StoryPageColumn2SpanRow>
          <div style = {cardStyle}>
            <div style = {textWrapper}>
              <h1>Otsikko3</h1>
              <p>{text3}</p>
              <div>3</div>
            </div>
          </div>
          <StoryPageColumn2spanColumn>
            <div style = {textWrapper}>
              <h2>Otsikko4</h2>
              <p>{getText()}</p>
              <div>4</div>
            </div>
          </StoryPageColumn2spanColumn>
        </StoryPageGridWrapper>
      </div>
    </StoryPageContainer>
  )
}

export default Story;