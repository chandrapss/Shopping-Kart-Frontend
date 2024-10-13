import React from 'react'
import '../style/UserDashBoard.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import FavoriteIcon from '@mui/icons-material/Favorite';

const UserDashBoard = () => {

  let [products, setProducts]=useState([])
  useEffect(()=>{
    let fetchData=()=>{
      axios.get(`http://localhost:8080/products`)
      .then((res)=>{
        console.log(res.data.data);
        setProducts(res.data.data);

      })
      .catch(()=>{
        alert("Not Found")
      })
    }
    fetchData()
  },[])

  return (
    <div className='userDashBoard'>
      {products.map((x)=>{
        return(
          <div className='display'>
            <div className="page">
              <div className="image">
                <img src="{x.image}" alt="" />
              </div>
              <div className="details">
                <h1>{x.brand}</h1>
                <span>Flat INR 2000 off on ICICI Credit card</span>
                <h2>{x.name}</h2>
                <p>MRP Price: <strike>{x.cost}</strike></p>
                <button className='btn btn-danger py-0 px-5'>Deal Of The Day</button>
                <p>Discount Price:<h3>{x.cost-(x.cost*12/100)}</h3></p>
                <p>{x.description}</p>
              </div>
              </div> 
           
           
           <FavoriteIcon/>
          </div>
        )
      })}
    </div>
  )
}

export default UserDashBoard
