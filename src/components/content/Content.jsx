import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import ImageSkelet from '../headerLeft/ImageSkelet'

export default function Content() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <div className=' w-full pl-6 pt-10 flex justify-center overflow-hidden'>
      <div className='p-5'>
        <div className='hidden justify-between mx-1 sm:flex '>
          <div>
            {profileOpen ? (
              <IoMdClose onClick={() => setProfileOpen(false)} />
            ) : <GiHamburgerMenu onClick={() => setProfileOpen(true)} />}
          </div>
        </div>

        {profileOpen && (
          <header className=' h-screen w-full hidden flex-col items-center border-l-8 border-orange-600 sm:flex fixed bg-zinc-800 animate-slide-Y'>
            <div className='pt-10'>
              <ImageSkelet hash={'LqONB[%Mof%M~qIUofRjof-;t7IU'} src={'https://i.ibb.co/ZgRp7Vy/4ae07d6ffec77bcfba4badb12d3ee5da.jpg'} />
              <div className='flex justify-center pt-4'>
                <span className='text-xl animate-slide-Y '>AJK</span>
              </div>

              <nav className='pt-10 flex flex-col justify-between p-4'>
                <ul className='flex flex-col gap-4 text-2xl animate-slide-X text-center'>
                  <li className='cursor-pointer'>sobre</li>
                  <li className='cursor-pointer'>projetos</li>
                  <li className='cursor-pointer'>site</li>
                </ul>
              </nav>
            </div>
          </header>
        )}

        <h1 className='text-4xl text-center animate-slide-Y'>ajk portfolio</h1>

        <div className='max-w-[700px] pt-20 w-full'>
          <h2 className='text-2xl mb-6 animate-slide-Y'>sobre</h2>
          <p className='animate-slide-Y'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quaerat dicta veniam ipsam repudiandae deserunt accusantium quibusdam, sunt repellendus quasi vero molestiae, enim eum amet blanditiis quia eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus commodi aperiam amet nostrum voluptatum optio natus sunt rem nisi ab perferendis alias illo quos, laborum harum corrupti consequatur aspernatur?</p>
        </div>

        <div className='max-w-[700px] pt-20 w-full'>
          <h2 className='text-2xl mb-6 animate-slide-Y'>experiencia</h2>
          <p className='animate-slide-Y'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quaerat dicta veniam ipsam repudiandae deserunt accusantium quibusdam, sunt repellendus quasi vero molestiae, enim eum amet blanditiis quia eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus commodi aperiam amet nostrum voluptatum optio natus sunt rem nisi ab perferendis alias illo quos, laborum harum corrupti consequatur aspernatur?</p>
        </div>

        <div className='max-w-[700px] py-20 w-full'>
          <h2 className='text-2xl mb-6 animate-slide-Y'>conhecimento</h2>
          <p className='animate-slide-Y'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam quaerat dicta veniam ipsam repudiandae deserunt accusantium quibusdam, sunt repellendus quasi vero molestiae, enim eum amet blanditiis quia eaque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus commodi aperiam amet nostrum voluptatum optio natus sunt rem nisi ab perferendis alias illo quos, laborum harum corrupti consequatur aspernatur?</p>
        </div>
      </div>
    </div>
  )
}
