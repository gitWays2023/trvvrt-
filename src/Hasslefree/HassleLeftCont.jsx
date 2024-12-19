import React from 'react'
import Ship from "./img/waterfish.jpeg"
import { BsArrowRight, BsThreeDots } from 'react-icons/bs'

function HassleLeftCont() {
  return (
    <section className='bg-[#C1E2E5] hidden  2sm:flex flex-col gap-[3rem] rounded-3xl w-[35%] 3sm:w-[45%] lg:w-[50%] p-[2rem] '>
    <div className='flex justify-between relative mt-[1.5rem] lg:mt-0'>
        <div className='flex gap-[0.8rem] flex-wrap md:flex-nowrap'>
            <button className='border border-[grey] rounded-full w-[90px] h-[30px]'>Sport</button>
            <button className='border border-[grey] rounded-full w-[90px] h-[30px]'>Music</button>
            <button className='border border-[grey] rounded-full w-[90px] h-[30px]'>Cinema</button>

        </div>
        <p className='w-[40px] lg:w-[60px] absolute top-[-3rem] right-0 lg:static h-[40px] lg:h-[60px] self-end lg:self-start rounded-full flex items-center justify-center border border-solid border-[grey]'><BsArrowRight /></p>
    </div>

    <div className='w-[120px] 3sm:w-[200px] 3sm:md:w-[300px] h-[130px] 3sm:h-[250px] md:h-[440px] mx-auto'>
        <img src={Ship} alt="" className='w-full h-full rounded-[20rem]' />
    </div>

    <div className='flex flex-wrap md:flex-nowrap gap-[1.5rem] md:gap-[5rem]'>
        <p>(First)</p>
        <p>(Present)</p>
        <p className='3sm:ml-auto'>01</p>
    </div>
</section>
  )
}

export default HassleLeftCont