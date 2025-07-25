import React, { useEffect, useState } from 'react'

export default function ExUseEffect() {
    // useEffect(cb,[])      //cb->call back ...[]->dependency
    
    //1.Without using dependency
    const [count, setCount]=useState(0)
    // useEffect(() =>{
    //     setTimeout(() =>{
    //     setCount(()=> count+1)
    //     },2000)
    // })

    //2. With dependency -> to avoid multiple render 
    // useEffect(() =>{
    //     setTimeout(() =>{
    //     setCount(()=> count+1)
    //     },2000)
    // },[])

    //3. With dependency using array with variables
    useEffect(() =>{
        setTimeout(() =>{
        setCount(()=> count+1)
        },2000)
    },[count])
    
  return (
    <div>
      <h1>I have rendered {count} times</h1>
    </div>
  )
}
