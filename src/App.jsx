import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Accessinbility from './components/accessibilty/Accessibility'
import Contact from './components/contact/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessinbility />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
