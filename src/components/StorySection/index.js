import React, { useState } from 'react'
import storyText from '../../assets/text/story.js';
import textFile from '../../assets/text/story.txt';

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
    <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center' ,maxWidth: '1200px', padding: '0 24px'}}>
      <h1>Otsikko</h1>
      <p>{storyText}</p>
      <h1>Toinen Otsikko</h1>
      <p>HALLOOTA</p>
      <p>{getText()}</p>
    </div>
  )
}

export default Story;