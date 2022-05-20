import React from 'react'
import Video from '../../video/guinness.mp4'
import Logo from '../../images/St michael logo.png'
import { 
  HeroContainer,
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroLogo,
  HeroH1,
  HeroH3,
  HeroP, 
} from './HeroElements'

const rowStyles = {
  alignItems: 'center',
  color: 'gold',
  fontSize: '20px',
  textAlign: 'left',
  width: 'auto',
}

const tableHeaderStyles = {
  width: '20%',
}

const HeroSection = () => {
  
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroLogo src = {Logo} alt = 'Logo' />
        <HeroH1>The only piece of Ireland in Oulu</HeroH1>
        <HeroP>
          Hallituskatu 13-17 90100 Oulu
        </HeroP>
        <HeroH3>Avoinna:</HeroH3>
        <>
          <table style = {tableHeaderStyles}>
            <tr style={rowStyles}>
              <th>Ma-To</th>
              <th>12 - 02</th>
            </tr>
            <tr style={rowStyles}>
              <th>Pe-La</th>
              <th>12 - 03</th>
            </tr>
            <tr style={rowStyles}>
              <th>Su</th>
              <th>12 - 02</th>
            </tr>
          </table>
        </>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection