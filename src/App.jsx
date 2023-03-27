import React from 'react'
import Form from './components/Form'

export default function App() {
  return (
    <div className='flex w-full h-screen'>
      <div className=' w-full flex items-center justify-center lg:w-1/2 '>
        <Form />
      </div>
      <div className='hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200'>
        <div className='w-80 h-80 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full motion-safe:animate-spin' />
        <div className='w-full h-1/2 absolute bottom-0 bg-white/5 backdrop-blur-lg  animate-pulse' />
      </div>
    </div>
  );
}
