
import React, { useState } from 'react'

import NavbarRightHeader from './NavbarRightHeader';
import NavbarLeftHeader from './NavbarLeftHeader';


function NavbarContainer() {
   

  
    return (
        
        <main className='py-3 z-[9999999999999] fixed top-0 bg-[#faf7f7] left-0 right-0 '>


            <main className='w-[95%] mx-auto bg-white flex gap-[8rem] justify-center items-center px-[0.9rem] py-[0.5rem] rounded-[30px]'>
               <NavbarLeftHeader  />
                <section className='hidden md:flex'>
                    <p className='font-medium'>06:04:02 London</p>
                </section>
               <NavbarRightHeader />
            </main>
        </main>
    )
}

export default NavbarContainer