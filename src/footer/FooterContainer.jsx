import React from 'react'

import FooterSectionone from './FooterSectionone';
import FooterSectiTwo from './FooterSectiTwo';

function FooterContainer() {
    return (
        <footer className='mt-[5rem] flex flex-col gap-[6rem] xl:gap-[0] '>

          <FooterSectionone />
           <FooterSectiTwo />
        </footer>
    )
}

export default FooterContainer