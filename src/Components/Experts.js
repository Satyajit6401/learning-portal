import React from 'react'
import img from "../assets/img.png";

function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2 h-5/6'>
        <div className='col-span-1 md:w-[80%] text-center'>
            <img src={img} className='inline' />

        </div>
        <div className='col-span-1 flex flex-col mt-5'>
            <h4 className='font-bold text-2xl pt-4 md:pt-3'>LEARN FROM EXPERTS</h4>
            <p className='font-mono my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='w-[30%] md:text-xl text-md bg-black text-white p-2 mt-4 rounded-lg'>Get Started</button>
        </div>

    </div>
  )
}

export default Experts