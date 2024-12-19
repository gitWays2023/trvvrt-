import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarContainer from './navbarComponets/NavbarContainer'
import Renderer from './Renderer'
import LandingPContainer from './landingpage/LandingPContainer'

function App() {

  return (
    <main className='bg-[#faf7f7]'>
<Renderer />
    </main>
  )
}

export default App
