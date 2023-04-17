import React from 'react'
import signup from '../Assets/Sign Up Image.png'

const SignUp = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>

      <div className='lg:px-24 md:px-40 px-12 py-10'>
        <h3 className='font-bold text-lg mb-12'>Fiber</h3>
        <h1 className='font-bold text-3xl mb-10'>Create your Fiber account</h1>

          <form action="GET" className='flex flex-col gap-6'>
            <div>
              <h3 className='font-bold text-md mb-2'>Your Name</h3>
              <input type="text" placeholder='John Doe' 
              className='outline-0 border-[1px] border-gray-400 w-full rounded-md px-4 py-2' />
            </div>
            <div>
              <h3 className='font-bold text-md mb-2'>Email</h3>
              <input type="email" placeholder='John@example.com' 
              className='outline-0 border-[1px] border-gray-400 w-full rounded-md px-4 py-2' />
            </div>
            <div>
              <h3 className='font-bold text-md mb-2'>Password</h3>
              <input type="password" placeholder='At least 8 characters' 
              className='outline-0 border-[1px] border-gray-400 w-full rounded-md px-4 py-2' />
            </div>
            <div className='flex items-start gap-2'>
              <input className='mt-1' type="checkbox" />
              <p>By creating an account on Fiber, you agree to the <a href="/" className='font-bold border-b-2 border-violet-700 text-violet-700'>Terms & Conditions</a>
              </p>
            </div>
            <div className='flex flex-col gap-3'>
            <button className='bg-violet-700 text-white py-4 rounded-md font-semibold'>Create Fiber Account</button>
            <p className='text-center'>Already have an account? <a href="/" className='text-violet-700 font-semibold'>Sign in</a>
            </p>
            </div>
          </form>


      </div>

      <div className='bg-violet-700 pt-28 px-20 hidden lg:block'>
        <img src={signup} alt="" />
        <div className='text-white text-center mt-6'>
          <h1 className='font-bold text-3xl mb-4'>Uparelleled Templates</h1>
          <p>Crafted by a team of professional designers, our templates are eunparalleled in the market.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp