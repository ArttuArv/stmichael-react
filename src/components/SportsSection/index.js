import React from 'react'
import mockText from '../../assets/text/story.js';

const images = {    
    kuva1: require('../../assets/images/kuva1.png'),
    kuva2: require('../../assets/images/kuva2.png'),
    kuva3: require('../../assets/images/kuva3.png'),
    kuva4: require('../../assets/images/kuva4.png'),
    kuva5: require('../../assets/images/st-michael-tunnelmakuva.jpg'),
}

const SportsSection = () => {
    return (
        <div>
            <div style = {{ 
                backgroundColor: '#06260F', 
                paddingTop: '100px', 
                paddingBottom: '80px' }}>
                <div style = {{ 
                    display: 'grid', 
                    // flexDirection: 'column', 
                    // justifyContent: 'center', 
                    // alignItems: 'center', 
                    maxWidth: '1200px', 
                    padding: '0 24px' }}>
                    <div style = {{ clear: 'left' }}>
                        <h1>Urheilu</h1>
                        <p>{mockText}</p>
                        <img src = {images.kuva5} alt = "kuva" style = {{ width: '100%', }} />
                    </div>
                    <div style = {{ }}>
                        <h1>Otsikko2</h1>
                        <p>{mockText}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SportsSection