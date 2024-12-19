import React from 'react'
import NavbarContainer from './navbarComponets/NavbarContainer'
import LandingPContainer from './landingpage/LandingPContainer'
import EveryJourneyContainer from './everyJourney/EveryJourneyContainer'
import FooterContainer from './footer/FooterContainer'
import HalseFreeContainer from './Hasslefree/HalseFreeContainer'
import WetakeCareCont from './wetakeCarCont/WetakeCareCont'
import AboutOurWorkCont from './aboutourwork/AboutOurWorkCont'

function Renderer() {
    return (
        <main className='w-[95%] mx-auto '>
            <NavbarContainer />
            <LandingPContainer />
            <EveryJourneyContainer />
            <HalseFreeContainer />
            <AboutOurWorkCont />
           <WetakeCareCont />
           <FooterContainer />
        </main>

    )
}

export default Renderer