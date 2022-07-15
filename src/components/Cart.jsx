import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
 var x;
const Cartbox = ({cart,setCart}) => {
    const[total,setTotal] = useState(0);
    useEffect(()=>{
         setTotal(cart.reduce((acc,current)=>{
            return acc+Number(current.price)
        },0))
        console.log(x);
    },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>
        My Cart
      </span>
      <br />
      <span style={{fontSize:30}}>Total: ₹{total}</span>
      <div className="productContainer">
          {
            cart.map((prod)=>(
               
                  <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
            ))
          }
      </div>
    </div>
  )
}

export default Cartbox
