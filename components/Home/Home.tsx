"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async ()=> {
      await import("aos");
      AOS.init({
        duration:1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      })
    }
  }, []);

  return (
    <div className='overflow-hidden'>
        <Hero id="home"/>
        <About id="about"/>
        <Skills id="skills" />
        <Project id="projects" />
        <Experience id="experience" />
        <Contact id="contact" />
    </div>
  )
}

export default Home