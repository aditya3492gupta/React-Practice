import { useState } from 'react'
import './App.css'
import Classcomponent from "./Components/Classcomponent"
import Functionalcomponents from "./Components/FunctionalComponents"
import Managestate from "./Components/Managestate"
import Hooks from './Components/Hooks'
import Arrays from './Components/Arrays'
function App() {
  const name = 'react';
  const ele = <h1>hello,{name}</h1>;
  return (
    <>
      <h1>Helloworld</h1>
      <Classcomponent name="Aditya" />
      <Functionalcomponents name="Gupta" />
      {ele}
      <Managestate />
      {/*local state not working in app.jsx */}
      <Hooks />
      <Arrays />
    </>
  )
}

export default App
