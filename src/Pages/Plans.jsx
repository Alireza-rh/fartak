/* eslint-disable no-unused-vars */
import React from 'react'
import PlansFirst from '../Component/PlansFirst'
import Navbar from "../Component/Navbar"
import PlanSecond from '../Component/PlanSecond'
import Community from "../Component/Community"
import Footer from "../Component/Footer"

const Plans = () => {
  return (
    <div className='font-yekan box-content'>
      <Navbar/>
      <PlansFirst/>
      <PlanSecond/>
      <Community/>
      <Footer/>
    </div>
  )
}

export default Plans
