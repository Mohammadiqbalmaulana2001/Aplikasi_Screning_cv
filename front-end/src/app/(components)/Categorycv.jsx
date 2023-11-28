import React from 'react'
import Image from 'next/image'
import cv from '@/app/assets/images/cv2.png'
import Link from 'next/link'

export default function Categorycv() {
  return (
    <div id="categorycv" className="flex h-screen w-full shadow-2xl items-center mx-auto">
      <div className='basis-1/2 mx-auto ms-7'>
            <h1 className='text-3xl font-bold mb-5'> Membantu Menciptakan CV Terfokus dan Terstruktur Secara Otomatis</h1>
            <h1 className='mb-8 indent-8 text-lg'>Category CV adalah AI yang menggunakan teknologi NLP untuk membantu pengguna membuat CV yang terstruktur dan terfokus. Dengan kemampuan otomatisasi kategorisasi informasi, template yang dapat disesuaikan, dan analisis AI untuk mengoptimalkan konten, AI ini memungkinkan pengguna membuat CV yang menonjol dengan mudah. Integrasi yang lancar dengan platform pencarian kerja juga menjadi salah satu keunggulan Category CV dalam membantu pengguna memasuki pasar kerja dengan daya saing yang tinggi.</h1>
            <Link href="/category" className='text-base text-white py-3 px-16 bg-cyan-500 font-semibold rounded-full shadow-cyan-400/50 shadow-lg hover:bg-cyan-400'>Ayo Mulai</Link>
      </div>
      <Image className="flex basis-1/2 ms-24"src={cv} alt="cv" width={500} height={500} />
    </div>
  )
}
