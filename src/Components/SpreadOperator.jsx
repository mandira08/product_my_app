import React from 'react'

export default function SpreadOperator() {
    const array1 = [1,2,3,4,5]
    const array2 = [7,8,9,10,11]
    const myarray =[...array1,...array2]

    const vehicle1={
        colo:"Black",
        year:2021
    }
    const vehicle2={
        color:"White",
        year2:2023
    }
    const vehicle={...vehicle1,...vehicle2}

  return (
    <div>SpraedOperator
      <h2>{myarray}</h2>
      <h2>{console.log(vehicle)}</h2>
    </div>
  )
}
