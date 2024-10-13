import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import MerchantLogin from './component/MerchantLogin'
import UserLogin from './component/UserLogin'
import MerchantSignup from './component/MerchantSignup'
import UserSignup from './component/UserSignup'
import Error from './component/Error'
import MerchantForgotPassword from './component/MerchantForgotPassword'
import UserHome from './component/UserHome'
import MerchantHome from './component/MerchantHome'
import Protect from './component/Protect'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/merchantlogin' element={<MerchantLogin/>}/>
          <Route path='/userlogin' element={<UserLogin/>}/>
          <Route path='/merchantsignup' element={<MerchantSignup/>}/>
          <Route path='/usersignup' element={<UserSignup/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/merchantforgotpassword' element={<MerchantForgotPassword/>}/>
          <Route path='/userhome' element={<UserHome/>}/>
          <Route path='/merchanthome/*' element={<Protect Child={MerchantHome}/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
