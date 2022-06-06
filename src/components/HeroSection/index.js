import React from 'react'
import Video from '../../assets/video/guinness.mp4'
import Logo from  '../../assets/images/Michael-logorigin.png'  //'../../assets/images/St michael logo shadow.png'
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


const HeroSection = () => {
  
  return (
    <HeroContainer draggable = 'false'>
      <HeroBg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroLogo draggable = 'false' src = {Logo} alt = 'Logo' />
        <HeroH1>The only piece of Ireland in Oulu</HeroH1>
        <HeroP>
          Hallituskatu 13 - 17 90100 Oulu
        </HeroP>
        <HeroH3>Avoinna:</HeroH3>
        <OpeningHours />
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection