/* eslint-disable no-unused-vars */
import React from 'react'
import FeatureFirst from '../Component/FeatureFirst'
import Navbar from '../Component/Navbar'
import FeatureSocond from '../Component/FeatureSocond'
import Properties from '../Component/Properties'
import ProgressChart from '../Component/ProgressChart'
import Notification from '../Component/Notification'
import FeatureThird from '../Component/FeatureThird'
import Footer from "../Component/Footer"

const Features = () => {
  return (
    <div className='font-yekan box-content'>
      <Navbar/>
      <FeatureFirst/>
      <FeatureSocond/>
      <Properties/>
      <ProgressChart/>
      <Notification/>
      <FeatureThird/>
      <Footer/>
    </div>
  )
}

export default Features
