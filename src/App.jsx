import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
// import TitleToast from './Components/Toasts/TitleToast';

function App() {
    const [cart, setCart] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0);

    const handleAddToCart = course =>{
      const isExist = cart.find(item => item.id == course.id);
      let count = course.credit;
      if(isExist){
          return alert('oh noooooooooo')
      }
      else{
        cart.forEach((item) =>{
          count = count + item.credit;
        });
        const creditRemaining = 20 - count
        setTotalCredit(count);
        setRemainingCredit(creditRemaining);
        const newCart = [...cart, course];
        setCart(newCart);
      }

    }

  return (
    <>
      
      <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
      <div className='md:flex md:justify-between gap-6'>
        <div className='w-3/4'>
           <Courses handleAddToCart={handleAddToCart}></Courses>
        </div>
        <div className='w-1/4'>
           <Cart 
           totalCredit={totalCredit}
           remainingCredit={remainingCredit}
           cart={cart}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
