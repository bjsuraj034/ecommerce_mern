import React, { useState } from 'react'

const Login = () => {
  const [currentState, setcurrentState] = useState('Login')
  const formHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={formHandler} className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex  items-center gap-1 mb-2 mt-10 '>
        <p className='font-serif text-3xl '>{currentState}</p>
        <hr className='w-8 h-[2px] border-none bg-gray-500' />
      </div>
  
      {currentState ==='Login' ? '' :<input className='px-2 py-2 outline-none border border-gray-600' type="text"placeholder='Name' required />}     
 <input className='px-2 py-2 outline-none border border-gray-600' type="email"placeholder='Email' required />
      <input className='px-2 py-2 outline-none border border-gray-600' type="password"placeholder='Password' required />
      <div className='flex items-center justify-between'>
        <p>Forget password?</p>
        { currentState === 'Login' ? <p onClick={()=>{setcurrentState('Signup')}} className='cursor-pointer'>Create new account?</p> : <p onClick={()=>{setcurrentState('Login')}} className='cursor-pointer'>Login here</p> }
      </div>
      <button type='submit' className='bg-black px-5 py-2 text-white m-auto rounded-xl'>{currentState === 'Login' ?'Login':'Signup'}</button>
    </form> 
  )
}

export default Login