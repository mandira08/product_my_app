import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function Quoteapi() {
    const[data,setData]=useState([]);

    useEffect(()=>{
axios.get('https://dummyjson.com/quotes')
.then((res)=>{
    // console.log(res.data.quotes)
    setData(res.data.quotes)
})
.catch((err)=>{
  console.log(err)
})
    },[])
  return (
    <div>Quoteapi

      {data.map((item)=>(
        <>
        <h3>{item.id}</h3>
        <h3>{item.quote}</h3>
        <h3>{item.author}</h3>
        </>
      )
      )}
      
    </div>
  )
}
