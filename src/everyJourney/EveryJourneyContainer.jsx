import React from 'react'
import { MdArrowRightAlt } from 'react-icons/md'
import { CiStar } from "react-icons/ci";
import Profile from './img/pro2.jpeg'
import { IoSearch, IoStarSharp } from 'react-icons/io5';

import EveryJourneyRight from './EveryJourneyRight';
import EveryJourneyLeftSec from './EveryJourneyLeftSec';
function EveryJourneyContainer() {
    return (
        <main className=' w-full flex flex-col mt-[5rem] '>

            <section className='w-full 2sm:w-[25.5rem] flex justify-between mb-[4rem] sm:mb-[6rem] items-end'>
                <h1 className='text-[2rem] 2sm:text-[2.5rem] leading-[2.5rem]'>Every Journey <br /> is Uniqure</h1>
                <div className='border rounded-full w-[40px] 2sm:w-[60px] h-[40px] 2sm:h-[60px] flex justify-center items-center cursor-pointer'>   <MdArrowRightAlt className='text-[1.5rem]' /></div>
            </section>

            <section className='flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between'>
              <EveryJourneyLeftSec />

               <EveryJourneyRight />

            </section>





        </main>
    )
}

export default EveryJourneyContainer