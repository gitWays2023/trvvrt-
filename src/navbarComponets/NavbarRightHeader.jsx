import React, { useState } from 'react'
import { GrCart } from "react-icons/gr";
import { IoReorderThreeSharp } from "react-icons/io5";
import { CgPentagonUp } from "react-icons/cg";
import Profile from './navImg/profile.jpeg'
import { CiSettings } from "react-icons/ci";

function NavbarRightHeader() {

  const [value, setValue] = useState(false);
  const [change, setChange] = useState(false)

  function myFunction(event) {
    event.stopPropagation()
    setChange(!change)
    console.log(change)
    console.log(event.target)
  }
  return (
    <section className='ml-auto flex items-center gap-8'>
      <div onClick={() => setValue(!value)} className='border hidden sm:flex cursor-pointer border-grey p-3 border-solid  relative justify-end bg-[#F0F0F0] text-[0.9rem] font-bold w-[65px] h-[29px] gap-6 rounded-full py-[2px]'>
        <div className={`absolute top-[50%] translate-y-[-50%] ${value ? "left-[52%] " : "left-[1%]"} transition-all duration-[0.5s] flex justify-center items-center text-[0.9rem] font-bold bg-white rounded-full w-[30px] h-[30px]`}>
          EN
        </div>
        <span className='flex items-center '>IN</span>
      </div>

      <div className='relative hidden xs:flex'> <span className='absolute top-[-6px] right-[-6px] bg-[orange] text-[0.8rem] font-bold rounded-full w-[20px] h-[20px] flex justify-center items-center'>10</span> <CgPentagonUp className='text-[2rem]' /></div>

      <div className='relative'> <span className='absolute top-[-15px] right-[-15px] bg-[orange] text-[0.8rem] font-bold rounded-full w-[20px] h-[20px] flex justify-center items-center'>1</span> <GrCart /></div>
      <div onClick={(event) => myFunction(event)} className='relative flex justify-center items-center cursor-pointer border-2 border-gray-50 rounded-[30px] py-1 pl-3 pr-1'>
        <IoReorderThreeSharp />

        <div className='w-[25px] h-[25px] '>
          <img src={Profile} alt="" className='w-full h-full object-cover object-top-[20px] rounded-full  ' />
        </div>
        {/* Drop down area */}
        <section className={` ${change ? "scale-y-100" : "scale-y-0"} origin-top transition-all duration-[0.4s] absolute left-[-5rem] bg-white flex  flex-col min-w-[10rem] top-[100%]`}>
          <p className='flex justify-start gap-2 items-center p-3 transition-all duration-[0.4s] hover:bg-[orange] hover:text-[whitesmoke]'>Settings <CiSettings /></p>
          <p className='p-3  hover:bg-[orange]transition-all hover:bg-[orange] duration-[0.4s] hover:text-[whitesmoke]'>customer Service</p>
          <div className='borde p-3 relative flex xs:hidden'> <span className='absolute top-[5px] left-[1.8rem] bg-[orange] text-[0.8rem] font-bold rounded-full w-[20px] h-[20px] flex justify-center items-center'>10</span> <CgPentagonUp className='text-[2rem]' /></div>
          <div onClick={() => {
            setValue(!value)
            setChange(false)
          }} className='border flex ml-3 my-3 sm:hidden cursor-pointer border-grey p-3 border-solid  relative justify-end bg-[#F0F0F0] text-[0.9rem] font-bold w-[65px] h-[29px] gap-6 rounded-full py-[2px]'>
            <div className={`absolute top-[50%] translate-y-[-50%] ${value ? "left-[52%] " : "left-[1%]"} transition-all duration-[0.5s] flex  justify-center items-center text-[0.9rem] font-bold bg-white rounded-full w-[30px] h-[30px]`}>
              EN
            </div>
            <span className='flex items-center '>IN</span>
          </div>

        </section>

        {/* End of dropdown area */}
      </div>
    </section>
  )
}

export default NavbarRightHeader