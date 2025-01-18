import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
    const ArrayObject=[
        {name:'Mandira',age:20,Dept:'IT',skill:['html','css','pyton']},
        {name:'Kanti',age:20,Dept:'IT',skill:['html','css','pyton']},
        {name:'Tanmay',age:20,Dept:'IT',skill:['html','css','pyton']},
    ]
 
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SI</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Dept</TableCell>
            <TableCell align="right">Skill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ArrayObject.map((arraydata,index)=> (
            <TableRow>
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{arraydata.name}</TableCell>
              <TableCell align="right">{arraydata.age}</TableCell>
              <TableCell align="right">{arraydata.Dept}</TableCell>
              <TableCell align="right">{arraydata.skill.map((data=><ul><li>{data}</li></ul>))}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
