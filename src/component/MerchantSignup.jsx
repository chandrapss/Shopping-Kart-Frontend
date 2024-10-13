import { useState } from 'react';
import '../style/MerchantSignup.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const MerchantSignup = () => {
    let [name,setname] = useState("")
    let [phone,setphone] = useState("")
    let [email,setemail] = useState("")
    let [gst,setgst] = useState("")
    let [password,setpassword] = useState("")

    let data = {name,phone,email,password,gst}


    let handleClick = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/merchant',data)
        .then(()=>{
            alert("Merchant Data added successfully")
            console.log("Merchant Data added Successfully")
        })
        .catch(()=>{
            alert("Invalid Format")
        })
    }


    return (
        <div className="container">
        <h1>Merchant Signup</h1>
        <form>
            <label for="name">Full_Name:</label>
            <input type="text" id="name" name="name" 
            value={name} onChange={(e) =>{setname(e.target.value)}} 
            placeholder="Enter Name" required />

            <label for="phone">Phone_Number:</label>
            <input type="number" id="phone" name="phone" pattern='[6789][0-9][10]' value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="phone number"required />

            <label for="email">Email_Address:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter email" required />

            <label for="gst">Gst_Number:</label>
            <input type="text" id="gst" name="gst" value={gst} onChange={(e)=>{setgst(e.target.value)}} placeholder="Enter Gst"required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password"value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" required />

            <button onClick={handleClick} type="submit">Sign Up</button>
        </form>
        <p className="center-text">Already have an account? <Link to="/merchantlogin">Log In</Link></p>
    </div>
    );
}

export default MerchantSignup;