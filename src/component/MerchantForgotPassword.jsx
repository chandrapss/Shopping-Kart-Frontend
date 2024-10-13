import React from 'react'
import { Form } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { useState } from 'react';


const MerchantForgotPassword = () => {

    // let [email, setemail]=useState("")
    // console.log(email);

    // let sendMail=()=>{
    //     axios.post('http://localhost:8080/merchants/verify')
    //     .then(()=>{
    //         alert("OTP Will be Sent to Your Mail ID")
    //     })
    //     .catch(()=>{
    //         alert("Invalid Mail ID")
    //     })
    // }

  return (
    <div className='MerchantForgotPassword'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </Form>
    </div>
  )
}

export default MerchantForgotPassword
