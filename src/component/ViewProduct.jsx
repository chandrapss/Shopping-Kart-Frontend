import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../style/ViewProducts.css'
const ViewProduct = () => {

let [product, setProducts]=useState([])
let merchant=JSON.parse(localStorage.getItem("merchant"))

useEffect(()=>{
    let fetchData=()=>{
        axios.get(`http://localhost:8080/products/a/${merchant.id}`)
        .then((res)=>{
            console.log(res.data.data);
        setProducts(res.data.data)
})
.catch(()=>{
    alert("INVALID")
})
    }

    fetchData()
},[])
    
  return (
    <div className='viewproduct'>
      <h1>hiiiii</h1>
    {product.map((x)=>{
           return(
            <div className='display'>
            <div className="page">
              <div className="image">
                <img src={x.image} alt="" />
              </div>
              <div className="details">
                <h1>{x.brand}</h1>
                <span>Flat INR 2000 off on ICICI Credit card</span>
                <h2>{x.name}</h2>
                <p>MRP Price: <strike>{x.cost}</strike></p>
                <button className='btn btn-danger py-0 px-5'>Deal Of The Day</button>
                <p>Discount Price:<h3>{x.cost-(x.cost*x.discount/100)}</h3></p>
                <p>{x.description}</p>
              </div>
              </div> 
        </div>
           )
    })}

    </div>
  )
}

export default ViewProduct

// react toastify

// ToastContainer
