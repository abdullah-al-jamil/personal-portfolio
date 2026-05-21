"use client";
import React, { useEffect } from 'react'
import Logo from '../../Helper/Logo'
import { navLinks } from '@/Constant/Constant'
import Link from 'next/link'
import { Download, MenuIcon } from 'lucide-react'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { scroller } from 'react-scroll';

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {      
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionName: string) => {
    
    scroller.scrollTo(sectionName, {
      duration: 800,        // Animation speed in milliseconds
      delay: 0,
      smooth: 'easeInOutQuart', // Smooth scrolling effect
      offset: -70,          // Adjust for your fixed navbar's height
    });
  };

  return (
    <div className={`transition-all duration-200 h-[12vh] z-100 fixed w-full ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"}`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        <Logo />
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link, index) => (
            <div key={index} onClick={() => scrollToSection(link.href)}
            className='dark:text-white text-black hover:cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200'> <p>{link.name}</p></div>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          <a href="#_" className='box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300
          bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300
          ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none'>
            <span className='relative z-20 flex items-center space-x-2 text-sm'>
              <Download className='w-4 h-4' />
              <span >Resume</span>
            </span>
          </a>
          <ThemeToggler />
          <MenuIcon 
            onClick={openNav}
          className='w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Nav