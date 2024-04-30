import React from 'react'

import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import AsideRight from '../src/components/aside/AsideRight'
import HeaderLeft from '../src/components/headerLeft/HeaderLeft'
import Content from '../src/components/content/Content'

export default function App() {
  return (
    <div className='bg-zinc-800 w-full h-screen flex flex-col justify-center items-center'>
      <div className='bg-zinc-900 max-w-[1300px] w-full h-full max-h-[600px] rounded-lg overflow-hidden overflow-y-scroll shadow-2xl'>
        <div className='fixed w-[1300px] bg-zinc-900'>
          <div className='flex justify-between'>
            <div className='flex gap-1'>
              <a href="https://www.linkedin.com/in/osvaldo-cordeiro-andr%C3%A9-009760231/" target='_blank'>
                <div className='bg-zinc-800 max-w-[150px] max-h-[40px] w-full h-full rounded-lg p-2 text-white flex items-center hover:bg-zinc-600 transition-all'>
                  <FaLinkedin />
                  <span className='text-xs ml-2'>Linkedin</span>
                </div>
              </a>
              <a href="mailto:ajknew2022@gmail.com">
                <div className='bg-zinc-800 max-w-[150px] max-h-[40px] w-full h-full rounded-lg p-2 text-white flex items-center hover:bg-zinc-600 transition-all'>
                  <MdOutlineMailOutline />
                  <span className='text-xs ml-2'> Contact</span>
                </div>
              </a>
              <a href="https://itadoriamvs.vercel.app/" target='_blank'>
                <div className='bg-zinc-800 max-w-[150px] max-h-[40px] w-full h-full rounded-lg p-2 text-white flex items-center hover:bg-zinc-600 transition-all'>
                  <TbWorldShare />
                  <span className='text-xs ml-2'> Website Channel</span>
                </div>
              </a>
              <a href="https://github.com/osvaldocordeiroandre" target='_blank'>
                <div className='bg-zinc-800 max-w-[150px] max-h-[40px] w-full h-full rounded-lg p-2 text-white flex items-center hover:bg-zinc-600 transition-all'>
                  <FaGithub />
                  <span className='text-xs ml-2'> Github</span>
                </div>
              </a>
            </div>
            <div className='flex gap-1 mt-2 mr-2 lg:hidden'>
              <a href="https://www.youtube.com/@AniPoison" target='_blank'>
                <div className='bg-yellow-300 w-4 h-4 rounded-full cursor-pointer'></div>
              </a>
              <a href="https://www.youtube.com/watch?v=33Z5HIAzOig" target='_blank'>
                <div className='bg-green-400 w-4 h-4 rounded-full cursor-pointer'></div>
              </a>
              <a href="https://www.youtube.com/@itadoriamvs/videos" target='_blank'>
                <div className='bg-red-600 w-4 h-4 rounded-full cursor-pointer'></div>
              </a>
            </div>
          </div>
          <div className='bg-zinc-700 w-full h-10 mt-2 rounded-lg flex items-center'>
            <div className='flex ml-4'>
              <div className='cursor-pointer'>
                <IoIosArrowBack color='orange' size={20}/>
              </div>
              <div className='ml-4 cursor-pointer'>
                <IoIosArrowForward color='orange' size={20}/>
              </div>
              <div className='ml-4 cursor-pointer'>
                <FaArrowRotateRight size={20} />
              </div>
            </div>
            <div className='bg-zinc-800 w-full h-8 rounded-full ml-4 flex items-center'>
              <span className='text-zinc-300 ml-6'>ajk.com</span>
            </div>
          </div>
        </div>

        <div className='bg-zinc-800 flex w-full h-screen mt-16'>
          <main className='w-full text-white flex'>
            <HeaderLeft />
            <Content />
          </main>
          <AsideRight/>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
