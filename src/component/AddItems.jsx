import axios from 'axios'
import React, { useState } from 'react'
import '../style/AddItems.css'
// import { useParams } from 'react-router-dom'


const AddItems = () => {
 
  let [name, setName]=useState("")
  let [brand, setBrand]=useState("")
  let [category, setCategory]=useState("")
  let [description, setDescription]=useState("")
  let [cost, setCost]=useState("")
  let [image, setImage]=useState("")

  
  
  let handleClick = (e)=>{
    e.preventDefault();
    let merchant=JSON.parse(localStorage.getItem("merchant"))
    let show={name, brand, category,description, cost, image}

    axios.post(`http://localhost:8080/products/${merchant.id}`,show)
    .then((response)=>{
        alert("Added Items successfully")
        console.log(response)
    })
    .catch(()=>{
        alert("Invalid Format")
    })
}
  return (
    <div className="additems" >
       <form className='form'> 
            <label className='labelm'>Product Name:</label>
            <input type="text" id="name" name="name" 
            value={name} onChange={(e) =>{setName(e.target.value)}} 
            placeholder="Enter Product Name" required />

            <label className='labelm'>Brand:</label>
            <input type="text" id="brand" name="brand" 
            value={brand} onChange={(e)=>{setBrand(e.target.value)}}
            placeholder="Brand Name"required />

            <label className='labelm'>Category:</label>
            <input type="text" id="category" 
            name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} 
            placeholder="" required />

            <label className='labelm'>Description:</label>
            <input type="text" id="description" 
            name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} 
            placeholder=""required />

            <label className='labelm'>Cost:</label>
            <input type="number" id="cost" 
            name="cost" value={cost} onChange={(e)=>{setCost(e.target.value)}} 
            placeholder="Enter Price" required />

            <label className='labelm'>Image:</label>
            <input type="text" id="image" 
            name="image" value={image} onChange={(e)=>{setImage(e.target.value)}} 
            placeholder="" required />

            <button className='btn' onClick={handleClick} type="submit">SUBMIT</button>
        </form>

    </div>
  )
}

export default AddItems
