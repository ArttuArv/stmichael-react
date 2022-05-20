import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { HomeObjOne, HomeObjTwo, HomeObjThree } from '../components/InfoSection/Data'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {   
    setIsOpen( open => !open );
    console.log("State changed", isOpen);
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle} />
      <NavBar toggle = {toggle} />
      <HeroSection />
      <InfoSection {...HomeObjOne}/>
      <Services />
      <InfoSection {...HomeObjTwo}/>
      <InfoSection {...HomeObjThree}/>
      <Footer />
    </>
  )
}

export default Home