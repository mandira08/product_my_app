import React from 'react'
import { useState } from 'react'
import './Style.css'
export default function Counter() {

  let [state,setState] = useState(0)
  let increament = () =>{
    setState(state+1)
  }
  let decrement = () =>{
    setState(state-1)
  }
  return (
    
    <div>
      <center>
        <h1>count:{state}</h1>
      <button onClick={increament} className='custom-button'>increment</button>
      <button onClick={decrement} className='custom-button' >decrement</button>
      </center>
    </div>
  )
}
