import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './styles.css'
import Cart from '../Context';

faker.seed(100); //so that evrytime refreshes it has same data 

const Home = ({cart,setCart}) => {
    // const {cart,setCart} = useContext(Cart);

    const productsArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        namee:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.cats(),
    }))
    console.log(productsArray);
    // const [cart,setCart] = useState([]);
   const  [products] =useState(productsArray);
//    console.log(cart);
  return (
    <div className='productContainer'>
      {
        products.map((prod)=>(
           <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
        ))
      }
    </div>
  )
}

export default Home