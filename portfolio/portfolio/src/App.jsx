import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
function App() {


  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <SocialLinks />
      </div >
    </>
  )
}

export default App
