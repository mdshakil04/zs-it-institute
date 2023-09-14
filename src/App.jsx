import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = course =>{
      const newCart = [...cart, course];
      setCart(newCart);
    }

  return (
    <>
      <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
      <div className='md:flex md:justify-between gap-6'>
        <div className='w-3/4'>
           <Courses handleAddToCart={handleAddToCart}></Courses>
        </div>
        <div className='w-1/4'>
           <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
