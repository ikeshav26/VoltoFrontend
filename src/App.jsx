import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Accessinbility from './components/accessibilty/Accessibility'
import Contact from './components/contact/Contact'
import { Toaster } from 'react-hot-toast'
import Signin from './components/Signin'
import Login from './components/Login'
import Userhome from './components/User profile/Userhome'
import EditProfile from './components/EditProfile'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessinbility />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/UserHome' element={<Userhome/>}></Route>
        <Route path='/EditProfile' element={<EditProfile/>}></Route>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
