import React from 'react'
import { BsArrowUp } from 'react-icons/bs'

function FooterSectionone() {
  return (
    <section className='flex flex-col gap-[2rem] 2sm:gap-0 2sm:flex-row justify-between'>
    <p className='hidden 2sm:flex'>We offer adult clics that <br />focus on skill improvement</p>
    <p className='flex 2sm:hidden'>We offer adult clics that focus on skill improvement</p>


    <div className='flex gap-[6rem]'>
        <section>
            <p>Home</p>
            <p>Service</p>
            <p>About</p>
            <p>Product</p>
        </section>

        <section>
            <p>Home</p>
            <p>Service</p>
            <p>About</p>
        </section>
    </div>



    <div className='border border-gray-400 w-[70px] h-[70px] hidden 2sm:flex justify-center items-center rounded-full'>

        <BsArrowUp />
    </div>
</section>
  )
}

export default FooterSectionone