import React from 'react'

const SingleProduct = ({prod,cart,setCart}) => {
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name} />
        <div className="productDesc">
            <span style={{fontWeight: 700}}>{prod.name}</span>
            <span>₹ {prod.price}</span>
        </div>
        {
            cart.includes(prod)?(
                <button className="add" onClick={()=>{
                    setCart(cart.filter((pro)=>{
                       return pro.id !== prod.id
                     }))
                 }}>
               Remove from Cart</button>
            ):
            (
                <button className="add" onClick={()=>{
                     setCart([...cart,prod]);
                }}>Add to Cart</button>
            )
        }
       

        
    </div>
  )
}

export default SingleProduct
