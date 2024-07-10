/* eslint-disable no-unused-vars */
import React from 'react'
import AboutFirst from '../Component/AboutFirst'
import Navbar from '../Component/Navbar'
import AboutSecond from "../Component/AboutSecond"
import AboutThird from '../Component/AboutThird'
import AboutFourth from '../Component/AboutFourth'
import AboutFifth from '../Component/AboutFifth'
import Footer from "../Component/Footer"

const AboutUs = () => {
  return (
    <div className=' font-yekan box-content'>
      <Navbar/>
      <AboutFirst/>
      <AboutSecond/>
      <AboutThird/>
      <AboutFourth/>
      <AboutFifth/>
      <Footer/>
    </div>
  )
}

export default AboutUs
