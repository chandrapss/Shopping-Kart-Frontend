import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDashBoard from './UserDashBoard'
import Navbar from './Navbar'
import '../style/Navbar.css'
// import Footer from './Footer'

const UserHome = () => {
  return (
   <div className="userhome">
    <Navbar/>
      <Routes>
        <Route path='/' element={<UserDashBoard/>}/>
      
      </Routes>
      {/* <Footer/> */}
   </div>
  )
}

export default UserHome
