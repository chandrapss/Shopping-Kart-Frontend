import { useState } from 'react'
import '../style/UserLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogin = () => {

    
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/user/verify-login?email=${email}&password=${password}`)
    .then((response)=>{
        navigate("/userhome")
    console.log(response);
    })
  }
  
    return (
        <div className="container">
            <h1>User Sign In</h1>
            <form>
                <label for="email">UserEmail:</label>
                <input type="email" id="email" 
                name="email"placeholder="name@example.com" 
                value={email} onChange={(f) => { setEmail(f.target.value) }} required />

                <label for="password">Password:</label>
                <input type="password" id="password" 
                name="password" placeholder="password" 
                value={password} onChange={(f) => {setPassword(f.target.value)}}required />

                <button  onClick={handleSubmit} type="submit">Sign In</button>
            </form>
            <Link to="/setpassword">Forgot password</Link>
            <p class="center-text">Don't have an account? <Link to="/usersignup">Sign Up</Link></p>
        </div>
    )
    }

export default UserLogin;