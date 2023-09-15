import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
// import { toast } from 'react-hot-toast';
// import TitleToast from './Components/Toasts/TitleToast';

function App() {
    const [cart, setCart] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)
 
    const handleAddToCart = course =>{
      const isExist = cart.find(item => item.id == course.id);
      let count = course.credit;
      let sum = course.price;
      if(isExist){
          return alert('This Course already added!!!!')
      }
      else{
        cart.forEach((item) =>{
          count = count + item.credit;
          sum = sum + item.price;
        });
        const creditRemaining = 20 - count
        if(count > 20){
          return alert('Credit limit exceeded!!!')
        }else{
          setTotalCredit(count);
          setTotalPrice(sum);
          setRemainingCredit(creditRemaining);
          const newCart = [...cart, course];
          setCart(newCart);
        }
      }

    }

  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center text-sky-800'>Course Registration</h1>
        <div className='md:flex md:justify-between gap-6'>
          <div className='w-3/4'>
            <Courses handleAddToCart={handleAddToCart}></Courses>
          </div>
          <div className='w-1/4'>
            <Cart 
            totalCredit={totalCredit}
            totalPrice={totalPrice}
            remainingCredit={remainingCredit}
            cart={cart}></Cart>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
