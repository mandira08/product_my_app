import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import { useNavigate } from 'react-router-dom'
export default function Home() {

  const navigate = useNavigate();
   const handleNavigate =()=>{
    navigate('/Form_c')
   }
  return (
    <div>
      <button className='custom-button' onClick={handleNavigate}>Form</button>
        <Link to="/ArrayMethod"><button className='custom-button'>Array Methods</button></Link>
        <Link to="/DestructObject"><button className='custom-button'>Destructuring Object</button></Link>
        <Link to="/Destructuring"><button className='custom-button'>Destructuring</button></Link>
        <Link to="/ImportModules"><button className='custom-button'>Import</button></Link>
        <Link to="/SpreadOperator"><button className='custom-button'>ISpreadOperator</button></Link>
        <Link to="/Count"><button className='custom-button'>Count</button></Link>
        <Link to="/ExUseEffect"><button className='custom-button'>ExUseEffect</button></Link>
        <Link to="/ExUseState"><button className='custom-button'>ExUseState</button></Link>
        <Link to="/Ternary"><button className='custom-button'>Ternary</button></Link>
        <Link to="/BasicTable"><button className='custom-button'>BasicTable</button></Link>
        {/* <Link to="/Form_c"><button className='custom-button'>Form</button></Link> */}
        <Link to="/Insert"><button className='custom-button'>Form 2</button></Link>
        <Link to="/View"><button className='custom-button'>View</button></Link>
        <Link to="/Quoteapi"><button className='custom-button'>Quote</button></Link>
       
    </div>
  )
}
