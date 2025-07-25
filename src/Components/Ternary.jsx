import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
export default function TernaryFunc() {
    const score=30;
    // //const backroundColor=
    // score>80?'green':
    // score>=60? 'lightgreen':
    // score >= 50?'lightyellow':
    // 'lightgrey'
  return (
    <div >
        {/*  <div style={{backroundColor}}*/}
        <div style={score >=80 ? {backgroundColor:'green',fontSize:50}:score>=60? {backgroundColor:'red', fontSize:50}:{backgroundColor:'yellow',fontSize:50} }>
       <center>{score>=80 ? 'Grade: A':
        score >= 60 ? 'Grade:B':
        score >= 50 ? 'Grade:C':'Grade: F'
        
        }</center> 
     
      </div>
      <button className='custom-button'><Link to='/' className='custom-link'>Back</Link></button>
    </div>
  )
}
