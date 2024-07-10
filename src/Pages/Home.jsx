/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Component/Navbar'
import HomeFirst from '../Component/HomeFirst'
import ProgressChart from '../Component/ProgressChart'
import Notification from '../Component/Notification'
import Properties from '../Component/Properties'
import Community from '../Component/Community'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div className='flex flex-col font-yekan box-content'>
        <Navbar/>
        <HomeFirst/>
        <ProgressChart/>
        <Notification/>
        <Properties/>
        <Community/>
        <Footer/>
    </div>
  )
}

export default Home
