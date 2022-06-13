import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SlidingPictures from '../components/SlidingPictures'


const Home = () => {

  window.scrollTo(0, 0);

  return (
    <>
      <HeroSection />
      <SlidingPictures />
      <Footer />
    </>
  )
}

export default Home