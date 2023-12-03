import React from 'react'
import cv from '@/app/assets/images/cv3.png'
import Image from 'next/image'
import Link from 'next/link'
import Hi from '@/app/assets/images/Hi.gif'

export default function Home() {
  return (
    <div className="relative sm:max-h-full ">
      <div className="flex h-screen w-full md:h-screen shadow-2xl items-center mx-auto flex-col md:flex-row">
        <div className='w-full md:w-1/2 mx-auto md:mx-7 text-center md:text-left order-2 md:order-1'> 
          <h1 className='flex text-4xl font-bold '>Hai<Image src={Hi} className='rotate-[60deg] flex space-x-4' alt="Hi" width={40} height={30} style={{ margin: '0 10px' }} /> </h1>
          <h1 className='text-3xl font-bold mb-3'>Selamat datang di<span className='text-sky-300 font-bold indent-1'> SkillQ</span></h1>
          <h2 className='text-lg md:text-xl mb-10 indent-5 text-justify'>revolusi baru dalam dunia rekrutmen yang menghadirkan pengalaman tanpa kesulitan baik bagi HR maupun para pencari kerja.<span className='font-semibold'>SkillQ adalah aplikasi kecerdasan buatan (AI) </span> yang dirancang khusus untuk menyederhanakan dan mempercepat proses penyeleksian CV.</h2>
          <Link href="/" className='text-base text-white py-3 px-6 md:px-16 bg-cyan-500 font-semibold rounded-full shadow-cyan-400/50 shadow-lg hover:bg-cyan-400'>Ayo Mulai</Link>
        </div>
        <div className='w-full md:top-0 md:left-0 md:w-1/2 flex justify-center order-1 md:order-2 '>
          <Image className="h-[40rem]  md:h-[30rem] object-contain" src={cv} alt="cv" width={500} height={500} />
        </div>
      </div>
    </div>
  )
}
