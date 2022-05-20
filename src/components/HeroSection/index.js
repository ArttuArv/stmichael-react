import React, { useState } from 'react'
import Video from '../../video/guinness.mp4'
import Logo from '../../images/St michael logo.png'
import { Button } from '../ButtonElement'
import { 
  HeroContainer,
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroLogo,
  HeroH1,
  HeroP, 
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => setHover(hovering => !hovering);

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
        <HeroP>
          Avoinna:
        </HeroP>
        <HeroP>
          Ma-To 12-02
        </HeroP>
        <HeroP>
          Pe-Lo 12-03
        </HeroP>
        <HeroP>
          Su 12-02
        </HeroP>
        <HeroBtnWrapper>
          <Button to = 'signup' 
          onMouseEnter = {onHover} onMouseLeave = {onHover} 
          primary = 'true' dark = 'true' >
            Get Started! {hover ? <ArrowForward /> : <ArrowRight />} 
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection