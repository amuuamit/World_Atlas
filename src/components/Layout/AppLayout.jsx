import React from 'react'
import Header from './UI/Header'
import Footer from './UI/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <div className='haeader-position'>

      <Header/>
    </div>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout