import React from 'react'
import { CiStar } from "react-icons/ci";
import Profile from './img/pro2.jpeg'
import { IoSearch, IoStarSharp } from 'react-icons/io5';


function EveryJourneyLeftSec() {
  return (
    <section className='flex flex-col justify-between'>
    <p className='flex justify-center items-center gap-2 w-max text-[1.3rem]'><IoStarSharp className='text-yellow-500 ' />4.9</p>
    <div className='w-[120px] flex flex-col gap-[1rem] rounded-md px-3 py-2 bg-white shadow-md'>
        <div className='w-full flex  justify-between '>
            <div className='w-[40px] h-[40px] '>
                <img src={Profile} alt="" className='w-full h-full rounded-full object-cover' />
            </div>
            <p className='border border-gray-400 w-[25px] h-[25px] flex justify-center items-center rounded-full'><IoSearch className='' /></p>
        </div>
        <p className='text-[0.9rem]'>Your partner in design</p>
    </div>
</section>
  )
}

export default EveryJourneyLeftSec