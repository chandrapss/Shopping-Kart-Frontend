import '../style/MerchantLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Merchantlogin = () => {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  
  let navigate = useNavigate()
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/merchant/verify-login?email=${email}&password=${password}`)
    .then((response)=>{
      // console.log(response);
      // console.log(response.data.data);
      //    let vemail=response.data.data.email
      // let vpassword=response.data.data.password
      // if(vemail===email && vpassword===password)
      localStorage.setItem("merchant",JSON.stringify(response.data.data))
   
        navigate("/merchanthome")
           })
           
    .catch(()=>{
      navigate("/merchantlogin")
    })
       
  }
  return (
    <div className="container">

      <h1>Merchant Sign In</h1>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"
         placeholder="name@example.com" value={email} 
         onChange={(f) => { setEmail(f.target.value) }} required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" 
        placeholder="Password" value={password} 
        onChange={(d) => { setPassword(d.target.value) }} required />

        <button onClick={handleSubmit} type="submit">Sign In</button>
      </form>
      <br/>
      <Link to="/setpassword">Forgot password</Link><br />
      <p class="center-text">Don't have an account? <Link to="/merchantsignup"> Sign Up</Link></p>

    </div>
  )
}

export default Merchantlogin;