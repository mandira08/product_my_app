// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Style.css'
// import {useState} from 'react'
// export default function ExUseState() {
//     const [state,setState]= useState("red")
//     const changecolor=()=>{
//         setState("black")
//     }
//     //step 1
//     // let color="blue"
//     // const changecolor=()=>{
//     //     color="red"
//     //     console.log(color)
//     // }
//   return (
//     <div>ExUseState
//         {/* <h1>My favorite color is black</h1>
//         <button onClick={changecolor}>change color</button> */}
//         <h1>My favorite color is {state}</h1>
//         <button onClick={changecolor}>changecolor</button>
//         <button className='custom-button'><Link to='/' className='custom-link'>Back</Link></button>
//     </div>
//   )
// }


//step 2 - multiple state
import React from 'react'
import { useState } from 'react'
export default function ExUseState() {
    // const [company,setCompany]= useState("Codelab Systems")
    // const [type,setType]=useState("Software Company")
    // const [year,setYear]=useState("2013")

    const[company,setCompany]=useState({
        name:"Codelab systems",
        type:"software company",
        year:"2013"
    })
     
    
    const yoo=()=>{
        setCompany({name:"Pehlwanpur",type:"Pottu company",year:"2024"})


    }
  return (
    <div>
      <h1>Welcome to {company.name}</h1>
      <h2> {company.type} Since {company.year}</h2>
      <button onClick={yoo}>HII</button>
    </div>
  )
}

