import React from 'react'

export default function DestructObject() {
    const vehi={
        brand:"Ford",
        type:"car",
        year:2024,
        color:"black",
        regi:{
            city:"Manglore",
            state:"abc",
            country:"India"
        }
    }
    Destruct(vehi)
    var msg
    function Destruct({brand,regi:{city}}){
        msg = "My car is "+brand+" registered in "+city;
    }
  return (
    <div>
     DestructObject
     <h1>{msg}</h1>
    </div>
  )
}
