import React ,{useRef,useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import avatar1 from '../Assets/User Avatar.svg'
import avatar2 from '../Assets/User Avatar 2.svg'
import avatar3 from '../Assets/User Avatar 32.svg'

const Slider = () => {

    const data= [
        {
            id:1,
            img : avatar1,
            name : "Sarah Andrews",
            revenue : "$100k in revenue",
        },
        {
            id:2,
            img : avatar2,
            name : "Mathew Higgins",
            revenue : "$20k in revenue",
        },
        {
            id:3,
            img : avatar3,
            name : "Janice Dave",
            revenue : "$30k in revenue",
        }
    ]

    const carouselRef = useRef();
    const [width,setWidth] = useState(0);

    useEffect(()=>{
        setWidth(carouselRef.current.scrollWidth-carouselRef.current.offsetWidth+150);
    },[])

    return (
        <div className='w-full bg-white overflow-hidden'>
            <motion.div ref={carouselRef} className='max-w-[1100px] mx-auto px-10 py-14'>
                <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='flex flex-col md:flex-row gap-8 cursor-grab'>

                {data.map(({id,img,name,revenue})=>
                    (
                        <motion.div key={id} className='flex flex-col items-start p-8 gap-6 min-w-[400px] border-gray-300 border-[1.5px] rounded-md'>
                            <div className='flex items-center gap-4'>
                                <img src={img} alt="avtar1" />
                                <span>
                                    <h3 className='text-violet-700 font-bold text-sm'>{name}</h3>
                                    <p className='text-md'>{revenue}</p>
                                </span>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Aspernatur nisi ab vitae minus libero enim fuga commodi,
                                molestias voluptatum.
                            </p>
                            <a href="/" className='font-bold text-violet-700 hover:bg-violet-700 hover:text-white duration-500 w-[100%] text-center border-gray-300 hover:border-violet-700 border-[1.5px] rounded-md py-3'>
                                View sarah's Portfolio
                            </a>
                        </motion.div>
                    )
                
                )

                }

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider