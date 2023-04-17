import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-orange-50 border-[0.5px] border-stone-50'>
        <dir className='max-w-[1100px] mx-auto px-10 py-12 grid lg:grid-cols-6 gap-6 grid-cols-2'>

            <div className='lg:col-span-2 col-span-2'>
                <h3 className='font-bold text-lg mb-2'>Fiber</h3>
                <p className='mb-6'>With Fiber, you can setup your own personal portfolio in minutes with dozens
                    of premade, beautiful templates.
                </p>
                <p>Made with ❤ in the Netherlands</p>
            </div>

            <div>
                <h3 className='font-bold text-lg mb-3'>Sitemap</h3>
                <ul className='flex flex-col gap-2'>
                    <li>Homepage</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Features</li>
                </ul>
            </div>

            <div>
                <h3 className='font-bold text-lg mb-3'>Resources</h3>
                <ul className='flex flex-col gap-2'>
                    <li>Support</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div>
                <h3 className='font-bold text-lg mb-3'>Company</h3>
                <ul className='flex flex-col gap-2'>
                    <li>About</li>
                    <li>Customers</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div>
                <h3 className='font-bold text-lg mb-3'>Portfolio</h3>
                <ul className='flex flex-col gap-2'>
                    <li>Sarah Andrews</li>
                    <li>Mathew Higgins</li>
                    <li>Janice Dave</li>
                </ul>
            </div>
        </dir>
    </div>
  )
}

export default Footer