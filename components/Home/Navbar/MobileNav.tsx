import React from 'react'
import Nav from './Nav'
import Link from 'next/link'
import { navLinks } from '@/app/Constant/Constant'
import { X } from 'lucide-react'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const sidebarClass = showNav ? 'translate-x-0' : '-translate-x-full';
  return (
    <div>
      <div className={`fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen ${sidebarClass}`}>
      </div>
      <div className={`text-white fixed justify-center flex flex-col h-full transform transition-all
      duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-1050 ${sidebarClass}`}>
          {navLinks.map((link, index) => {
            return ( 
            <Link key={index} href={link.href}> 
              <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.name}
              </p>
            </Link>
          )
          })}
          <X onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>
    </div>
  )
}

export default MobileNav