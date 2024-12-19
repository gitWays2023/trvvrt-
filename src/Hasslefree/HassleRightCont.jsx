import React from 'react'
import { TbMathGreater } from "react-icons/tb";
import { PiLessThan } from "react-icons/pi";

import BeaWater from './img/beawater.webp';
import WomanWater from './img/womancap.jpg'
import Boat from './img/boat.jpeg'

function HassleRightCont() {


    const imgArray = [
        {
            img: BeaWater,
            text1: "02",
            text2: "Mid-Air jump",
            id: crypto.randomUUID()
        },
        {
            img: WomanWater,
            text1: "03",
            text2: "Mid-Air jump",
            id: crypto.randomUUID()
        },
        {
            img: Boat,
            text1: "04",
            text2: "Mid-Air jump",
            style: "ml-auto",
            id: crypto.randomUUID()
        },
    ]

  return (
    <section className='flex flex-col justify-between items-center w-full 2sm:w-[50%] 2sm:px-[2rem] pt-[5rem]'>

    <div className='flex justify-self-end '>
                <PiLessThan />
                <TbMathGreater />
            </div>
        <div className='flex flex-col items-center justify-center w-full'>
          
            <div>
                <p className='text-[2.5rem] font-medium'>Hassle-Fee</p>
                <p className='text-[2.5rem] font-medium mt-[-1.2rem]'>Experience</p>

            </div>

            <p className='mt-[1.5rem] text-[gray]'>Cherish your special day with stunning</p>
        </div>


        <div className='flex gap-[1.5rem] mt-[1.5rem] 2sm:mt-0 w-full self-end'>
            {
                imgArray.map((item) => (
                    <div key={item.id} className={`${item?.style}`}>
                        <div className='w-[100px] md:w-[120px] h-[100px] md:h-[130px]'>
                            <img src={item.img} alt="" className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[gray] text-[0.8rem['>{item.text1}  </p>
                            <p className='text-black text-[0.8rem] font-medium'>{item.text2}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default HassleRightCont