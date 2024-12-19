import React from 'react'
import LearMore from './landingimg/learnmore.png'
import { IoArrowDown } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'

function LandingPageSection() {
  return (
    <section className='absolute top-0 left-0 right-0 flex gap-0 flex-col  w-full h-full p-8'>
    <p className='border border-[white] border-solid w-[max-content] text-[white] font-medium px-[0.8rem] rounded-full'>
      Lorem Ipsum
    </p>

    <section className=' w-max 2sm:w-[30rem] 2xl:ml-auto 2xl:mr-[28rem] flex flex-col gap-8 mt-[1.8rem] 2xl:mt-[-1.8rem]'>
      <h1 className=' text-[2rem] 2md:text-[3.3rem] text-white font-medium hidden xs:flex   '>Explore the <br /> World With Us</h1>

      <div>
        <img src={LearMore} alt="" className='object-contain cursor-pointer' />

      </div>
    </section>


    <section className='flex justify-between '>

      <div className='w-[4rem]  2sm:w-[6rem] h-[4rem] 2sm:h-[6rem] mt-12 2sm:mt-0 bg-[#ffffff]  rounded-full border-2 border-solid border-[white] flex justify-center items-center'>
        <p className='text-black relative text-[0.8rem]'>
          Contact
          <div className='absolute z-[2] top-[155%] left-[50%] translate-x-[-50%] text-white text-[3rem] w-[4rem] 2sm:w-[6rem] h-[4rem] 2sm:h-[6rem] rounded-full border-4 border-solid border-white flex justify-center items-center'>
            <IoArrowDown className='' /> 
          </div>
        </p>

      </div>


      <div id='clippath' className='bg-white mt-[1rem] 2xl:mt-[3.5rem] mr-[2rem] rounded-xl  w-[18rem] p-[1rem] hidden 2sm:flex flex-col gap-[3rem] justify-between'>
          <div className='self-end flex justify-center items-center border border-solid border-black rounded-full w-[50px] h-[50px]'>
            <BsArrowRight className='' />
          </div>
          <p className='text-[1.3rem] pt-3'>Explore our curated list of must-visit destination around the globe</p>
          <div>
            <hr />
            <div className='flex justify-between'>
              <p>(First)</p>
              <p>(Present)</p>
              <p className='text-[#cac9c9]'>01</p>

            </div>
          </div>

        </div>
    </section>
  </section>
  )
}

export default LandingPageSection