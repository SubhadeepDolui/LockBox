import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-blue-500'></span>
                <span>Lock</span><span className='text-blue-500'>Box</span>
            </div>
            <div className='flex justify-center items-center'> Created by Subhadeep Dolui <img className=' invert w-7 mx-2' src="icons/heart.png" alt="" /> </div>
        </div>
    )
}

export default Footer
