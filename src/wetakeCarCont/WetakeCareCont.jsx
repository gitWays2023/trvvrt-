import React, { useState } from 'react'

import Water from './img/water.jpeg'
import { BsArrowRight } from 'react-icons/bs'
function WetakeCareCont() {
    const [value, setValue] = useState(false)

    const content = [
        {
            textmain: "Explore our curated of must-visit destinations around the globe",
            subtext1: "(First)",
            subtext2: "(PRESENT)",
            id: crypto.randomUUID(),
            identifyer: "c"
        },
        {
            textmain: "Whether it's the pristine beaches of Bali, the historic street",
            subtext1: "(First)",
            subtext2: "(PRESENT)",
            id: crypto.randomUUID(),
            identifyer: "d"
        }
    ]
    return (
        <main className='container bg-[#F0F0F0] mt-[7rem] mx-auto  rounded-lg p-[1.5rem] w-full'>
            <section id='a' className='flex  relative justify-end'>
                <button className='absolute top-[-0.6rem] xl:top-0 left-0 bg-[black] text-[whitesmoke] text-[0.8rem] rounded-full px-[10px]'>Our benefit</button>
                <div className='w-full xl:w-[60%] mt-4 xl:mt-0  bg-white p-4 flex flex-col rounded-xl justify-between gap-[2rem]'>

                    <div className='flex justify-between' >
                        <h1 className=' text-[1.5rem] xl:text-[2.5rem] leading-[2rem] xl:leading-[2.9rem]'>We take care of  <br />all the details</h1>
                        <div onClick={() => setValue(!value)} className='border flex cursor-pointer border-grey p-3 border-solid  relative justify-end bg-[#F0F0F0] text-[0.9rem] font-bold w-[65px] h-[29px] gap-6 rounded-full py-[2px]'>
                            <div className={`absolute top-[50%] translate-y-[-50%] ${value ? "left-[52%] " : "left-[1%]"} transition-all duration-[0.5s] flex justify-center items-center text-[0.9rem] font-bold bg-white rounded-full w-[30px] h-[30px]`}>
                                EN
                            </div>
                            <span className='flex items-center '>IN</span>
                        </div>
                    </div>

                    <div className='flex justify-between items-end'>
                        <div className='flex gap-[2rem]'>
                            <p>(First)</p>
                            <p>Present</p>
                        </div>

                        <div className='w-[100px] md:w-[150px] h-[90px] md:h-[110px]'>
                            <img src={Water} alt="" className='w-full h-full object-cover rounded-lg' />
                        </div>
                    </div>
                </div>
              
            </section>

            <section id='b' className='flex justify-end  '>
            <div id='clippath' className='bg-white  w-[100%] xl:w-[initial]  h-full py-2 xl:py-5 px-[2rem] flex flex-col gap-[3rem] rounded-lg'>
                            <div className='w-[50px] h-[50px] border rounded-full flex justify-center items-center ml-auto cursor-pointer'>
                                <BsArrowRight />
                            </div>

                            <div>
                                Travel with peaco f mind knowing were always here
                            </div>

                            <div className='flex justify-between'>
                                <p className='text-[0.9rem] font-medium'>(FIRST)</p>
                                <p className='text-[0.9rem] font-medium'>(PRESENT)</p>

                            </div>
                        </div>
            </section>
            {
                content.map((item) => (
                    <section key={item.id} id={item.identifyer} className=' flex'>
                        <div className='bg-white  w-full 2sm:w-[100%] lg:w-[50%] py-5 px-[2rem] flex flex-col gap-[3rem] rounded-lg'>
                            <div className='w-[50px] h-[50px] border rounded-full flex justify-center items-center ml-auto cursor-pointer'>
                                <BsArrowRight />
                            </div>

                            <div>
                                {item.textmain}
                            </div>

                            <div className='flex justify-between'>
                                <p className='text-[0.9rem] font-medium'>{item.subtext1}</p>
                                <p className='text-[0.9rem] font-medium'>{item.subtext2}</p>

                            </div>
                        </div>

                    </section>
                ))
            }



        </main>
    )
}

export default WetakeCareCont