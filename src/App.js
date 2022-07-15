
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Header from './components/header';
import { useState } from 'react';
import Cartbox from './components/Cart';

function App() {
  const[cart,setCart]=useState([]);
  return (
    <BrowserRouter>
         <Header cart={cart} setCart={setCart}/>
         <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart}/>} exact/> 
        {/* <Route path="/"  exact>
          <Home cart={cart} setCart= {setCart}/>
        </Route> */}
        {/* exact keyword so that it doesn't show all components at a time */}
        <Route path="/cart" element={<Cartbox cart={cart} setCart={setCart}/>}/>
        {/* <Route path="/cart" >
          <Cart cart={cart} setCart={setCart}/>
        </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
