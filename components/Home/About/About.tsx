import SectionHeading from '@/components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import React from 'react'

type Props = {
    id: string;
}

const About = ({ id }: Props) => {
  return (
    <div id={id} className='py-16 bg-gray-100 dark:bg-gray-900'>
        <SectionHeading title_1='About' title_2='Me' description='Get to know the developer behind the code' />
        <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'>
            <div className='relative'>
                <div className='aspect-square rounded-2xl overflow-hidden p-2'>
                    <img src="/images/user.jpg" 
                    alt="Profile" 
                    width={700}
                    height={700}
                    className='object-cover w-full h-full object-center rounded-xl' />
                </div>
            </div>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>
                    A passionate developer with a love for crafting elegant solutions and learning new technologies.
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                    I am a full-stack developer with expertise in php, laravel and vue.js. I have a strong background in building scalable web applications and a passion for creating seamless user experiences. I am always eager to learn new technologies and take on challenging projects that allow me to grow as a developer.
                </p>
                <p className='text-muted-foreground leading-relaxed'>
                    Beyond coding, I enjoy traveling, reading, and exploring new cuisines. I believe that a well-rounded life outside of work fuels creativity and innovation in my professional endeavors. I am excited to connect with like-minded individuals and contribute to impactful projects that make a difference.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
                    {highlights.map((item) => {
                        return (
                            <div key={item.text} className='flex items-center gap-3 text-sm'>
                                <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                                    <item.icon className='w-4 h-4 text-blue-500' />
                                </div>
                                <span className='text-muted-foreground'>
                                    {item.text}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        {/* <div className='mt-16 w-[80%] mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {stats.map((stat) => {
                    return (
                        <div key={stat.label} 
                        className='bg-white dark:bg-gray-800 rounded-xl p-6 text-center'>
                            <div className='text-3xl md:text-4xl font-bold text-purple-600 mb-2'>
                                {stat.value}
                            </div>
                            <div className='text-muted-foreground text-sm'>
                                {stat.label}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> */}
    </div>
  )
}

export default About