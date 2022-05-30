import React from 'react';
import BoxList from '../components/BoxList';
import BeerList from '../components/BeerList';


const Whisky = ( {whisky} ) => {  

  window.scrollTo(0, 0);

  return (
    <>
      <BoxList whisky={whisky} />
      <BeerList whisky={whisky} />
    </>
  )
}

export default Whisky