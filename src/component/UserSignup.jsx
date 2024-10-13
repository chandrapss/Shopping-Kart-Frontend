import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {

    let [name,setuname] = useState("")
    let [phone,setphone] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")

    let data = {name,phone,email,password}


    let handleClick = ()=>{
        axios.post('http://localhost:8080/user',data)
        .then(()=>{
            alert("User Data added successfully")
            console.log("User Data added Successfully")
        })
        .catch(()=>{
            alert("User Invalid Format")
        })
    }

    return (
        <div>
            <div className="container">
                <h1>User Signup</h1>
                <form>
                    <label for="name">Full_Name:</label>
                    <input type="text" id="name" name="name" 
                    value={name} onChange={(e) => { setuname(e.target.value) }} 
                    placeholder="Enter Name" required />

                    <label for="phone">Phone_Number:</label>
                    <input type="number" id="phone" 
                    name="phone" pattern='[6789][0-9][10]' 
                    value={phone} onChange={(e) => { setphone(e.target.value) }} 
                    placeholder="phone number" required />

                    <label for="email">Email_Address:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter email" required />

                    {/* <label for="gender">Gender:</label>
                    <input type="text" id="" name="gender" value={gender} onChange={(e) => { setgender(e.target.value) }} placeholder="Enter Gender" required /> */}

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Password" required />

                    <button onClick={handleClick} type="submit">Sign Up</button>
                </form>
                <p className="center-text">Already have an account? <Link to="/userlogin">Log In</Link></p>
            </div>
        </div>
    );
}

export default UserSignup;