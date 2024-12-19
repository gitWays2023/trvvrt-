import React from 'react'
import WaterImg from './landingimg/bg.jpeg'

import LandingPageSection from './LandingPageSection'

function LandingPContainer() {
  return (
    <main className='w-full mt-[5rem] relative  h-[455px] xs:h-[532.4px]'>
    

      <img id='landingImg' src={WaterImg} alt="" className='w-full h-full ' />

     <LandingPageSection />



    </main>
  )
}

export default LandingPContainer