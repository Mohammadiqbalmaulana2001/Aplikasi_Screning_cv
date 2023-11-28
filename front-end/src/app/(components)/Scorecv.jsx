import React from 'react'
import Image from 'next/image'
import cv from '@/app/assets/images/cv1.png'
import Link from 'next/link'

export const Scorecv = () => {
  return (
        <div id="scorecv" className="flex box-shadow h-screen shadow-2xl w-full items-center mx-auto">
            <Image className="flex basis-1/2 "src={cv} alt="cv" width={500} height={500} />
            <div className='basis-1/2 mx-auto me-7'>
                    <h1 className='text-3xl font-bold mb-5'>Dapatkan skor CV yang dipersonalisasi, dalam hitungan detik</h1>
                    <h1 className='mb-8 indent-8 text-lg'>Skore CV adalah AI yang membantu pengguna membuat curriculum vitae yang menonjol. Dengan menggunakan teknologi pemrosesan bahasa alami, aplikasi ini memberikan rekomendasi untuk meningkatkan kualitas CV. Score CV memungkinkan pengguna untuk dengan mudah menyesuaikan dan memperbarui CV mereka, membantu mereka bersaing di pasar kerja yang kompetitif. </h1>
                    <Link href="/score" className='text-base text-white py-3 px-16 bg-cyan-500 font-semibold rounded-full shadow-cyan-400/50 shadow-lg hover:bg-cyan-400'>Ayo Mulai</Link>
            </div>
        </div>
  )
}
