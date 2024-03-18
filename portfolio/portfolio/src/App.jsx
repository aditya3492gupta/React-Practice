import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Cp from './components/Cp';
function App() {


  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <SocialLinks />
        <Portfolio />
        <Cp />
        <TechStack />
        <Contact />
      </div >
    </>
  )
}

export default App
