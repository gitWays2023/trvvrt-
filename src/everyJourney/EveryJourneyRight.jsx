import React from 'react'
import SwimmingBird from './img/bird3.jpeg'
import HalfImg from './img/halfimg.png'

function EveryJourneyRight() {
  return (
    <section className=' gap-[2rem] flex 2sm:gap-[1rem] 2lg:gap-[2rem] mxl:gap-[4rem]'>
    <section className=' w-[10rem] mmd:w-[15rem] hidden 2sm:block 2lg:w-[20rem] h-[15rem] 2lg:h-[20rem] relative'>
        <img id='swimmingduck' src={SwimmingBird} alt="" className='w-full h-full rounded-xl' />
        <div className='absolute p-[0.3rem] rounded-xl flex flex-col gap-[1rem]  bg-white left-[-6rem] mmd:left-[-3rem] 2lg:left-[-1.5rem] top-[3rem] 2lg:top-[6rem]'>
            <div className='w-[10rem] 2lg:w-[10rem] h-[8rem] 2lg:h-[7.5rem]'>
                <img src={HalfImg} alt="" className='object-cover rounded-xl w-full h-full' />

            </div>
            <div>
                <h1 className='font-bold'>Garlic fest</h1>
                <p className='text-[0.9rem]'>October 14 Auora</p>

                <div className='bg-[#26283D] w-max absolute right-[-0.5rem] bottom-0 rounded-xl outline outline-white'>
                    <p className='text-[whitesmoke] py-2 px-5 font-extrabold '>i</p>
                </div>
            </div>
        </div>
    </section>

    <section className='flex flex-col justify-between'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[1.5rem] mmd:text-[3rem]'>81%</h1>
            <p>From concept to <br />Completion</p>
        </div>
        <div className='border rounded-xl px-5 text-[0.9rem] text-center'>
            Effective fitness guide
        </div>
    </section>

    <section className='flex 2sm:hidden mmd:flex flex-col justify-between self-end gap-[5rem]'>
        <div className='flex gap-[3rem]'>
            <p>(First)</p>
            <p>(Present)</p>
        </div>
        <div>
            <p className='text-center sm:text-right'>Adventure Trip</p>
        </div>
    </section>
</section>
  )
}

export default EveryJourneyRight