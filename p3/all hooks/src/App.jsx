import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Use from './components/Use'
import Reducer from './components/Reducer'
import Effect from './components/Effect'
import Ref from './components/Ref'
import LayoutEffect from './components/LayoutEffect'
import ImperativeHandle from './components/ImperativeHandle'
import Context from './components/Context'
import Memo from './components/Memo'
import Callback from './components/Callback'
function App() {
  return (
    <>
      <div>
        <h1>Hooks</h1>
        <div>
          <h2>Using use state</h2>
          <Use />
        </div>
        <div>
          <h2>Using use reducer</h2>
          <Reducer />
        </div>
        <div>
          <h2>Using use effect</h2>
          <Effect />
        </div>
        <div>
          <h2>using use ref</h2>
          <Ref />
        </div>
        <div>
          <h2>Using use layout effect</h2>
          <LayoutEffect />
        </div>
        <div>
          <h2>Using use ImperativeHandle</h2>
          <ImperativeHandle />
        </div>
        <div>
          <h2>Using use context</h2>
          <Context />
        </div>
        <div>
          <h2>Using use call back</h2>
          <Callback />
        </div>
        <div>
          <h2>Using use memo</h2>
          <Memo />
        </div>
        {/* axios api not working in system  */}
      </div>
    </>
  )
}

export default App
