import React from 'react'

function Skills() {
  return (
    <div className='bg-green-100 py-10'>
        <div className='max-w-[1240px] md:flex mx-auto justify-around py-20'>
        <div className='m-2'>
            <h1 className='text-[20px] font-bold md:text-[40px]'>Want To Learn I.T Skills ?</h1>
            <span className='font-bold text-xl'>Signup our newsletter and stay up to date...</span>
        </div>
        <div className='m-2'>
            <input type='text' className='p-3 mr-2 text-center rounded-md ' placeholder='Enetr Ur Mail'/>

            <button className='text-sm bg-black text-white p-4 mt-4 rounded-lg'>Click Here</button>
            <br />

            <h3>We care about your Details. Read our<br />
            <a href='#' className='underline'>Privacy and Policy</a></h3>
        </div>
        </div>

    </div>
  )
}

export default Skills