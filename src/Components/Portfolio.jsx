import React from 'react'
import page from '../Assets/Page Image.png'


const Portfolio = () => {
    return (
        <div className='w-full bg-white'>
            <dir className='max-w-[1100px] mx-auto px-10 py-14'>

                <div className='bg-violet-700 relative p-10 text-white rounded-xl grid md:grid-cols-2 grid-cols-1 items-center gap-6'>

                    <div className='flex flex-col gap-4 items-start'>
                        <h1 className='font-bold text-4xl'>Diversify your portfolio.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, 
                        voluptatum perferendis sequi fugiat alias distinctio dicta dolor modi.</p>
                        <a href="/" className='bg-white text-center text-violet-700 font-bold px-6 py-4 rounded-md text-lg'>Start Free Trial</a>
                    </div>

                    <div className='h-full'>
                        <img src={page} alt="" />
                    </div>
                    

                </div>
            </dir>
        </div>
    )
}

export default Portfolio