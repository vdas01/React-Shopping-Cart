import React from 'react'
import {Link} from 'react-router-dom';


const header = ({cart,setCart}) => {
  return (
    <>
       <span className='header'>React Shopping Cart</span>
       <ul className="nav">
        <li >
            <Link to="/">Home</Link>
        </li>
        <li >
            <Link to="/cart">Cart({cart.length})</Link>
        </li>
       </ul>
    </>
  )
}

export default header
