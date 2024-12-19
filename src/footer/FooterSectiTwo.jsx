import React from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";

function FooterSectiTwo() {
  return (
    <section className='flex flex-col md:flex-row md:justify-between md:items-center mt-[-5rem] 2sm:mt-0'>
                <form className='w-full sm:w-[350px] relative '>
                    <input type="text" placeholder='youremail@gmail.com' className='outline-none w-full py-3 pl-[2rem] pr-[3rem] rounded-full bg-[#F0F0F0] text-black font-bold' />
                    <button className='absolute bg-black text-white rounded-full text-[1.3rem] top-[50%] translate-y-[-50%] bottom-0 w-[40px] h-[40px] flex justify-center items-center right-0 '><PiPaperPlaneRightFill /></button>
                </form>

                <div className='flex items-end h-[80px]  sm:h-[150px] xl:h-[280px] overflow-hidden w-[13rem] sm:w-[30rem] xl:w-[40rem] relative'>
                    <p className='text-[5rem] sm:text-[10rem] xl:text-[17rem] bottom-[-2rem] sm:bottom-[-4rem]  absolute xl:bottom-[-5rem] left-0'>trvvrt</p>
                </div>
            </section>
  )
}

export default FooterSectiTwo