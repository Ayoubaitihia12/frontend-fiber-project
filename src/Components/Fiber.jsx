import React from 'react'
import time from '../Assets/time.svg'
import code from '../Assets/code.svg'
import resp from '../Assets/allSizes.svg'

const Fiber = () => {

    const data =[
        {
            id:1,
            img: time,
            title : 'Build in minutes',
            desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam laboriosam laudantium.'
        },
        {
            id:2,
            img: code,
            title : 'Add custom CSS',
            desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam laboriosam laudantium.'
        },
        {
            id:3,
            img: resp,
            title : 'Responsive',
            desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam laboriosam laudantium.'
        }
    ]

    return (
        <div className='w-full bg-white'>
            <dir className='max-w-[1100px] mx-auto px-10 py-14'>
                
                <div className='mb-12'>
                    <h3 className='font-bold text-violet-700 mb-3 text-lg'>Why Fiber?</h3>
                    <h1 className='font-bold text-4xl'>A good portfolio means good <br />employability.</h1>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-8'>
                    {
                        data.map(({id,img,title,desc})=>(
                            <div key={id} className='flex flex-col gap-3 items-start'>
                                <img src={img} alt="" />
                                <h3 className='font-bold '>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </dir>
        </div>
    )
}

export default Fiber