import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MerchantDashboard from './MerchantDashboard'
import MerchantNavbar from './MerchantNavbar'
import AddItems from './AddItems'
import ViewProduct from './ViewProduct'

const MerchantHome = () => {
  
  return (
    <div className="merchanthome">
      <MerchantNavbar/>
      <Routes>
        <Route path='/' element={<MerchantDashboard/>}/>
        <Route path='/additems' element={<AddItems/>}/>
        <Route path='/viewproduct' element={<ViewProduct/>}/>
      </Routes>

      
    </div>
  )
}

export default MerchantHome
