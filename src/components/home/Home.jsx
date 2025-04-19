import React from 'react'
import Navbar from '../Navbar'
import Homebanner from '../Homebanner'
import Homemain from '../Homemain'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className='bg-[#D6F5F2]  overflow-hidden'>
        <Navbar/>
        <Homebanner/>
        <Homemain/>
        <Footer/>
    </div>
  )
}

export default Home
