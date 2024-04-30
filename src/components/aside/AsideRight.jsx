import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";

export default function AsideRight() {
    return (
        <aside className='bg-orange-600 h-screen w-[60px] text-white flex overflow-hidden sm:hidden'>
            <ul className='flex flex-col gap-4 font-sans text-xl w-full mt-10'>
                <a href="https://github.com/osvaldocordeiroandre" target='_blank'>
                    <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4 '><FaGithub size={30} /></li>
                </a>
                <a href="https://www.linkedin.com/in/osvaldo-cordeiro-andr%C3%A9-009760231/" target='_blank'>
                    <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4'><FaLinkedin size={30} /></li>
                </a>
                <a href="mailto:ajknew2022@gmail.com">
                    <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4'><MdOutlineEmail size={30} /></li>
                </a>
                <a href="https://itadoriamvs.vercel.app/" target='_blank'>
                    <li className='hover:bg-orange-400 w-full text-center cursor-pointer p-4'><TbWorldShare size={30} /></li>
                </a>
            </ul>
        </aside>
    )
}
