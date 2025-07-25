import React from 'react'
 
export default function ArrayMethod() {
    const Array=["a","b","c"]
    const ArrayObject=[
        {name:'Mandira',age:20,Dept:'IT',skill:['html','css','pyton']},
        {name:'Kruthi',age:20,Dept:'IT',skill:['html','css','pyton']},
        {name:'Tannu',age:20,Dept:'IT',skill:['html','css','pyton']},
    ]
 
  return (
    <div>
      {Array.map((array=>
      <h1>{array}</h1>
      ))}
 
 
      <h1>{Array[0]}</h1>
      <table  border={5} cellPadding={20} cellSpacing={20}>
        <thead>
            <tr>
                <th>SL.NO</th>
                <th>Name</th>
                <th>Age</th>
                <th>Dept</th>
                <th>Skill</th>
 
            </tr>
        </thead>
        <tbody>
            {ArrayObject.map((arraydata,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{arraydata.name}</td>
                    <td>{arraydata.age}</td>
                    <td>{arraydata.Dept}</td>
                    <td>{arraydata.skill.map((data=><ul><li>{data}</li></ul>))}</td>
                </tr>
 
 
            ))}
 
        </tbody>
      </table>
    </div>
  )
}