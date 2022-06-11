import React from 'react'
import mockText from '../../assets/text/story.js';
import data from '../../assets/data/products';

const images = {    
    kuva1: require('../../assets/images/kuva1.png'),
    kuva2: require('../../assets/images/kuva2.png'),
    kuva3: require('../../assets/images/kuva3.png'),
    kuva4: require('../../assets/images/kuva4.png'),
    kuva5: require('../../assets/images/st-michael-tunnelmakuva.jpg'),
}

const divStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#06260F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 'calc(2em / 2)',
    color: '#F5BD30',
    fontWeight: '400',
    padding: '100px',
    overflow: 'hidden',
    backgroundImage: `url(${images.kuva5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    animation: 'fadeIn 1s ease-in-out',
    animationFillMode: 'forwards',
    animationDelay: '0.5s',
    animationDirection: 'alternate',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationName: 'fadeIn',
    animationTimingFunction: 'ease-in-out',
    animationPlayState: 'running',
}

const sectionContainer = {
    // background: 'gold',
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    marginTop: '100px', 
}

const sectionWrapper = {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    padding: '10px',
    maxWidth: '1300px',
}

const textWrapper = {
    height: '100%',
    width: '100%',
    textAlign: 'left',
    fontSize: '16px',
    color: '#F5BD30',
    fontWeight: '400',
    padding: '10px',
}

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#353535',
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
    border: '1px solid gold',

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

const SportsSection = () => {

    return (
    <>
        <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', marginTop: '80px'}}>
            <div style = {{ maxWidth: '1300px'}}>
                <div style = {gridStyle}>
                    <div style = {cardStyle}>
                        <div style = {textWrapper}>
                            <h1>Urheilu</h1>
                            <li>Viasattia</li>
                            <li>CMorea</li>
                            <li>Yleä</li>
                            <li>x määrä telkkareita</li>
                        </div>
                    </div>
                    <div style = {{...cardStyle, gridColumn: 'span 2 / auto' }}>
                        <img src = {images.kuva5} alt = "kuva" style = {{ width: '100%', border: '1px solid gold', }} />
                    </div>
                    <div style = {{...cardStyle, gridColumn: 'span 2 / auto' }}>
                        <div style = {textWrapper}>
                            <h1>Kärppäpelit</h1>
                            <p>Bussikuljetukset jäähallille Kärppien kotiotteluihin.
                            Kyyti lähtee baarin edestä 20min ennen pelin alkua,
                            liput bussiin saat tiskiltä.
                            Näytämme kaikki Kärppien pelit myös TV:sta.
                            </p>
                        </div>
                    </div>
                    {/* <div style = {cardStyle}>
                        4
                    </div>
                    <div style = {cardStyle}>
                        5
                    </div>
                    <div style = {cardStyle}>
                        6
                    </div>
                    <div style = {cardStyle}>
                        7
                    </div>
                    <div style = {cardStyle}>
                        8
                    </div>
                    <div style = {cardStyle}>
                        9
                    </div>
                    <div style = {cardStyle}>
                        1
                    </div>
                    <div style = {cardStyle}>
                        11
                    </div>
                    <div style = {cardStyle}>
                        12
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default SportsSection