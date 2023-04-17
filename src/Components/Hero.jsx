import React from 'react'
import star from '../Assets/star.svg'
import check from '../Assets/Checkmark.svg'
import hero from '../Assets/hero-Illustration.png'

const Hero = () => {
  return (
    <div className='w-full bg-stone-50 border-[0.5px] border-stone-50'>
        <dir className='max-w-[1100px] h-full mx-auto flex flex-col-reverse lg:gap-0 gap-4 lg:flex-row items-center px-10 py-4'>

            <div className='flex flex-col gap-5 lg:items-start md:items-center items-start'>
                <div className='items-center gap-4 lg:flex hidden'>
                    <div className='flex items-center gap-1'>
                        <span><img src={star} alt="star" /></span>
                        <span><img src={star} alt="star" /></span>
                        <span><img src={star} alt="star" /></span>
                        <span><img src={star} alt="star" /></span>
                        <span><img src={star} alt="star" /></span>
                    </div>
                    <p>Rated 4.8/5 (243 reviews)</p>
                </div>
                <h1 className='md:text-5xl text-4xl font-bold'>Create your portfolio in minutes.</h1>
                <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade,
                    beautiful templates.
                </p>
                <div className='flex items-center gap-8'>
                    <a href="/" 
                    className='bg-violet-700 text-white text-center font-bold px-6 py-4 rounded-md hover:bg-violet-950 duration-500'>
                        Start Free Trail
                    </a>
                    <a href="/"
                    className='text-violet-700 font-bold border-b-2 border-violet-700'>
                        View Examples
                    </a>
                </div>
                <div className='flex md:flex-row flex-col md:items-center items-start gap-4'>
                    <span className='flex items-center gap-2'>
                        <img src={check} alt="checkmark" />
                        <h3>No credit Card Required</h3>
                    </span>
                    <span className='flex items-center gap-2'>
                        <img src={check} alt="checkmark" />
                        <h3>10 Free Templates</h3>
                    </span>
                </div>
                
            </div>

            <div>
                <img src={hero} className='w-[800px]' alt="hero" />
            </div>

        </dir>
    </div>
  )
}

export default Hero