
import { FaLongArrowAltRight } from 'react-icons/fa'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <main className='hero-section main'>
    <div className='container grid grid-two-cols '>
       <div className='hero-content'>
        <h1 className='heading-xl'>
          Explore the world, One Country at a time.
        </h1>
        <p className='paragraph'>
         Discover the history, culture and beauty of every nation . Sort,
         search and filter through countries to find the details you need .
        </p>
        <NavLink to="/country">
          
        <button className='btn btn-darken btn-inline bg-white-box'>Start Exploring
           <FaLongArrowAltRight /></button>
        </NavLink>
       </div>
       <div className='hero-image'>
        <img src="images/World1.png"alt="World is beauty" className='banner-image' />
       </div>
    </div>
  </main>
  )
}

export default HeroSection