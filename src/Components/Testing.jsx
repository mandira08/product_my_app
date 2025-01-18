import React from 'react'
import './Style.css'
export default function Testing() {
    const mystyle = {
        color:"blue"
    }
  return (
    <div>
      <p style={{color:"red",fontFamily:"monoscope",fontSize:"100px"}}>
        helloooo
      </p>
      <p style={mystyle}>heloo</p>
      <h1 className='name'>Henry</h1>
    </div>
  )
}
