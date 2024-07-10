/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Features from './Pages/Features'
import Blogs from './Pages/Blogs'
import Plans from './Pages/Plans'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
    </div>
  )
}

export default App
