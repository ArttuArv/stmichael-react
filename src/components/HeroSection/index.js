import React from 'react'
import Video from '../../assets/video/guinness.mp4'
import Logo from '../../assets/images/St michael logo.png'
import OpeningHours from './OpeningHours'
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
  color: '#D4A24E',
  fontSize: '30px',
  textAlign: 'left',
  width: 'auto',
  text: { shadow: '3px 5px 3px #000' },
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
        <OpeningHours />
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection