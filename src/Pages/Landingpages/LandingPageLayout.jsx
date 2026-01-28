import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const LandingPageLayout = () => {
  return (
    <div className='text-white'>
      <nav>
        <Navbar/>
      </nav>

      <Outlet/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LandingPageLayout
