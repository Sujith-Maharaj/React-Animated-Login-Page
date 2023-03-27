import React from 'react'
import TextField from '@mui/material/TextField';

export default function Form() {
  return (
    <div className='sm:w-10/12 md:w-1/2 lg:w-7/12 bg-white px-10 py-10 rounded-3xl border-4 border-violet-500 border-t-pink-500  border-r-pink-500 hover:border-t-violet-500 hover:border-r-violet-500 hover:border-pink-500 hover:bg-gray-50'>
      <h1 className='text-3xl font-semibold flex justify-center'>Welcome Back</h1>
      <p className='font-medium text-sm text-gray-600 mt-4 flex justify-center'>...Please enter your details...</p>
        <div>
        <div className='mt-3'>
        <TextField className='w-full' id="standard-basic" label="Email" type={'email'} variant="standard" />
        </div>
        <br/>
        <TextField className='w-full' id="standard-basic" label="Password" type={'password'} variant="standard" />
        </div>
        <div className='mt-4 flex justify-between text-sm text-gray-500'>
        <div>
        <input type={'Checkbox'} id="remember"/>
        <label for="remember"> Remember Me..</label>
        </div>
        <button className='active:scale-[.98] transition-all'>❌Forgot Password</button>
        </div>

      <div className='flex justify-center px-4'><button className='active:scale-[.99] active:duration-50 transition-all border-2 w-full  py-1 font-semibold bg-gradient-to-tr from-violet-400 to-pink-400 rounded-md mt-6'>Login</button></div>

    </div>
  )
}