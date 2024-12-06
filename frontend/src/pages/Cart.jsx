import React, { useContext, useEffect } from 'react';
import {ShopContext} from '../context/ShopContext'
import { useState } from 'react';
import Title from '../components/Title'
import { assets } from '../assets/assets';
import Carttotal from '../components/Carttotal';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {products,currency,cartItems,updateQunatity,navigate}=useContext(ShopContext);
  const [cartData, setcartData] = useState([]);
  console.log(cartItems)
  useEffect(()=>{
    const temp=[]
    for(const items in cartItems)
    {
      for(const item in cartItems[items])
      {
        if(cartItems[items] [item]>0)
        {
          temp.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setcartData(temp)

  },[cartItems])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"Your"} text2={"Cart"}/>

      </div>
      <div>
        {cartData.map((item,index)=>{
          const productData=products.find((product)=>product._id ===item._id)
          return (
            <div key={index} className='py-4 border-t border-b text-gray-600 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr]' >
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div>
                  <p className='text-gray-700 sm:text-xl text-sm font-extrabold'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency} {productData.price}</p>
                    <p className='bg-gray-200 px-4 py-1'>{item.size}</p>
                  </div>
                </div>
              </div>

              <input onChange={(e)=>e.target.value === '' || e.target.value==='0' ? null :updateQunatity(item._id,item.size,Number(e.target.value))} className='border max-w-12 sm:max-w-18 px-2 sm:px-2 sm:h-7 h-5 sm:mr-1 mr-3 py-2' type="number" min={1} defaultValue={item.quantity}/>
              <img onClick={()=>updateQunatity(item._id,item.size,0)} src={assets.deleter} alt="" className='h-5 mr-4 cursor-pointer ' />
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div>
         <div className='w-full sm:w-[450px]'>
          <Carttotal/> 
          <div className='w-full text-end'>
            <Link to={'/place-orders '}>
            <button onClick={()=>{navigate('/place-orders')}}  className='bg-black text-white my-8 py-2 px-2'>PROCEED TO CHECKOUT</button>
            </Link>

          </div>
          </div> 
        </div>

      </div>

    </div>
  )
}

export default Cart