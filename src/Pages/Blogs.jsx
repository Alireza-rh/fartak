/* eslint-disable no-unused-vars */
import React from 'react'
import BlogFirst from '../Component/BlogFirst'
import Navbar from '../Component/Navbar'
import Footer from "../Component/Footer"

const Blogs = () => {
  return (
    <div className='font-yekan box-content'>
      <Navbar prop={true} />
      <BlogFirst/>
      <Footer/>
    </div>
  )
}

export default Blogs
