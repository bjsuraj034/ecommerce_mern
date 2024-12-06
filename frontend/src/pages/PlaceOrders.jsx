import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'


const PlaceOrders = () => {
  const {navigate}=useContext(ShopContext)
  const [method, setmethod] = useState('cod')
  return (
    <div className='flex flex-col  sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>

        </div>
        <div className='flex gap-3'>
          <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='FirstName' />
          <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='LastName' />
          
        </div>
          <input className='py-2 px-5 border-2 border-gray-400 w-full' type="email" placeholder='Email' />
          <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='Street' />
          <div className='flex gap-5'>
            <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='City' />
            <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='State' />
          </div>
          <div className='flex gap-5'>
            <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='Zipcode' />
            <input className='py-2 px-5 border-2 border-gray-400 w-full' type="text" placeholder='Country' />
          </div>
          <input className='py-2 px-5 border-2 border-gray-400 w-full' type="number" placeholder='Phone' />

      </div>
      {/* {right side} */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Carttotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          {/* {payment method selection} */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div  onClick={()=>{setmethod('cod')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}>
              </p>
              <p className='text-gray-500  text-sm font-medium mx-4'>Cash on delivery </p>
            </div>
            <div onClick={()=>{setmethod('razor')}} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'razor' ? 'bg-green-400' : ''}`}>
              </p >
              <img src={assets.razorpay} alt="" />
            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>{navigate('/orders')}} className='px-2 py-2 text-white bg-black'> PLACE-ORDERS</button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrders
