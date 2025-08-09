import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Screen/Home'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Home/>
      </div>
    </>
  )
}

export default App
