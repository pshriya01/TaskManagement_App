import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import MainRoutes from './Routes/MainRoutes'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
   <Navbar />
   <MainRoutes />
   </>
  )
}

export default App
