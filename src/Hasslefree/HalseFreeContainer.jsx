import React, { useState } from 'react'
import { BsArrowRight, BsThreeDots } from 'react-icons/bs'

import HassleRightCont from './HassleRightCont';
import HassleLeftCont from './HassleLeftCont';
function HalseFreeContainer() {
    const [value,setValue] = useState(false)

    return (
        <main className='flex mt-[2rem] relative 2sm:mt-[7rem]'>
           
<HassleLeftCont />

            <section className='absolute block 2sm:hidden'>
                <div>
                    <BsThreeDots onClick={()=> setValue(!value)} className='cursor-pointer'/>
                    <div className={`bg-[white] w-[150px] transition-transform duration-75 2sm:hidden origin-top ${value ? "scale-y-1"  :"scale-y-0"}`}>
                        <p className='p-2 hover:bg-[#e2e2e2] cursor-pointer'>Sport</p>
                        <p className='p-2 hover:bg-[#e2e2e2] cursor-pointer'>Music</p>
                        <p className='p-2 hover:bg-[#e2e2e2] cursor-pointer'>Cinema</p>
                    </div>
                </div>
            </section>

            <HassleRightCont />
        </main>
    )
}

export default HalseFreeContainer