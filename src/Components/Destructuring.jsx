import React from 'react'

export default function Destructuring() {
    const Myarray=[1,2,3,4,5]
    const Vehicle =["car","bike","truck"]
     const [num1,,,,num5]=Myarray
     const a=Vehicle[2]
     const b=Vehicle[2]
     const sumo=[1+6,9+7]
     const [m,n]=sumo
  return (
    <div>
      {Myarray}
     <h1> {Vehicle}</h1>
      <h1>{num1}</h1>
      <h1>{num5}</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{sumo}</h1>
      <h1>{m}</h1>
      <h1>{n}</h1>
    </div>
  )
}
