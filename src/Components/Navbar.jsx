import React , {useState} from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [navbar,setNavbar] = useState(false);

    return (
        <div className='relative w-100 bg-stone-50'>
            <div className='max-w-[1100px] mx-auto flex justify-between items-center px-10 py-4'>
                <h1 className='font-bold text-2xl'>Fiber</h1>

                {navbar && <div onClick={()=> setNavbar(!navbar)} className='fixed top-0 left-0 w-full h-full bg-black opacity-20'/>}

                <ul className='hidden md:flex items-center gap-6'>
                    <li>Community</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>

                <ul className='hidden md:flex items-center gap-10 font-semibold'>
                    <li className='cursor-pointer'>Sign In</li>
                    <li className='px-6 py-3 rounded-md bg-violet-700 text-white cursor-pointer hover:bg-violet-950 duration-500'>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                </ul>

                <div className='block md:hidden cursor-pointer'>
                    <HiOutlineMenuAlt3 size={27} onClick={()=>setNavbar(!navbar)}/>
                </div>

                {
                        <ul className={navbar ? 'z-10 fixed flex flex-col gap-8 pt-16 pl-8 top-0 right-0 h-screen bg-white w-[300px] duration-500' : 
                                    'z-10 fixed flex flex-col gap-8 pt-16 pl-8 top-0 right-[-100%] h-screen bg-white w-[300px] duration-500'}>
                            <div className='absolute top-5 right-10 cursor-pointer'>
                                <AiOutlineClose onClick={()=>setNavbar(!navbar)} size={27}/>
                            </div>
                            <li className='text-lg'>Community</li>
                            <li className='text-lg'>Pricing</li>
                            <li className='text-lg'>Features</li>
                            <li className='text-lg'>Sign In</li>
                            <li className='text-lg'>Sign Up</li>
                        </ul>
                }

            </div>
        </div>
  )
}

export default Navbar