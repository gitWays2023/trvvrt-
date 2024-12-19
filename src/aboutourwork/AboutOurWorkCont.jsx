import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import GirlOnWhite from './img/girlOnwhite.jpeg'
import TennisPlayer from './img/tennisplayer.jpeg'
import Girlonyell from './img/girlyellow.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
function AboutOurWorkCont() {

    return (
        <main className=' mt-[7rem]'>

            <section className='flex justify-between items-center w-full xs:w-[80%] xl:w-[43%] mx-auto'>
                <h1 className='text-[1.4rem] 3sm:text-[2.4rem] leading-[2rem] 3sm:leading-[2.5rem]'>Client about <br /> our work</h1>
                <p> From concepts to <br /> Completion</p>
            </section>

            <section className='flex justify-center relative mt-[3rem]'>


                <button className='absolute right-[60%] xs:right-[70%] cursor-pointer 2lg:right-[10%] bottom-[100%] 3sm:bottom-[5%] rounded-full border-none 3sm:border 3sm:border-solid w-[50px] h-[50px] flex justify-center items-center'>
                    <FaArrowRightLong />
                </button>

                <button className='absolute left-[10%] top-[-3rem] cursor-pointer 3sm:top-[5%] rounded-full border-none 3sm:border 3sm:border-solid w-[50px] h-[50px] flex justify-center items-center'>
                    <FaArrowLeftLong />
                </button>

                <div className='bg-[#26283D]  self-center p-4 hidden 3sm:flex flex-col gap-[1.5rem] mxl:gap-[3rem] justify-between rounded-xl'>
                    <div className='flex gap-[4rem] mxl:gap-[9rem] justify-between'>
                        <div className='w-[80px] h-[80px] '>
                            <img src={GirlOnWhite} alt="" className='w-full h-full object-cover rounded-xl' />
                        </div>

                        <p className='text-[whitesmoke] text-[1.2rem]'>(First)</p>
                    </div>
                    <div>
                        <p className='text-[whitesmoke] mxl:text-[1.5rem] uppercase'>-Joseph Stalin</p>
                        <p className='text-[grey] uppercase'>Creative Director</p>
                    </div>
                </div>

                <div className='hidden xs:block w-[50%] 3sm:w-[15rem] mxl:w-[20rem] h-[25rem] relative'>
                    <img src={TennisPlayer} alt="" className='w-full h-full rounded-2xl object-cover mxl:object-fill' />

                    <div className='absolute top-[80%] left-[2rem]'>
                        <p className='text-[1rem]  mxl:text-[2rem] text-[whitesmoke]'>-Tallor Ballam</p>
                        <p className='text-[grey] uppercase'>Modo Studio</p>
                    </div>
                </div>

                <div className='w-full xs:w-[19rem] mxl:w-[24rem] p-7 gap-5 xs:gap-0 flex flex-col justify-between rounded-xl bg-[white]'>
                    <FaQuoteLeft className='text-[grey] text-[3rem]' />

                    <div className='text-[1rem] 3xl:text-[1.4rem] text-justify'>
                        "We explored the best of Tokyo, Kyoto, and Osaka, all without the
                        usual travel stress. Trul a trip of a lifetime!"
                    </div>

                    <div className='flex justify-between uppercase'>
                        <p>(First)</p>
                        <p>(Present)</p>
                        <p>01</p>
                    </div>
                </div>

                <div className='self-start hidden 2lg:block w-[20%] ml-[0.5rem] h-[12rem] relative '>
                    <img src={Girlonyell} alt="" className='img-cons w-full h-full object-cover rounded-xl' />

                    <div className='absolute   bottom-[1rem] left-[1rem] w-full  '>
                        <p className='uppercase  text-[#dbdbdb]'>-Esther Howard</p>
                        <p>Creative Director</p>
                    </div>
                </div>


            </section>



        </main>
    )
}

export default AboutOurWorkCont