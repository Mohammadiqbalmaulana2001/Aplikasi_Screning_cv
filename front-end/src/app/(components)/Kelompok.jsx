import React from 'react'
import Person from '@/app/assets/images/person.svg'
import Image from 'next/image'
import Rizal from '@/app/assets/images/Foto Pribadi/rizal.png'
import Sahrul from '@/app/assets/images/Foto Pribadi/syahrul-faturochman.png'
import Risma from '@/app/assets/images/Foto Pribadi/Risma Amaliya.png'
import Prima from '@/app/assets/images/Foto Pribadi/Primanda_Yuvicka.png'
import Dina from '@/app/assets/images/Foto Pribadi/Dina Febriani_.png'
import Iqbal from '@/app/assets/images/Foto Pribadi/Iqbal.png'

export default function Kelompok() {
  return (
    <div id='team' className='my-10 bg-white shadow-2xl'>
      <h1 className='text-3xl font-bold mx-auto text-center py-7 bg-slate-300 underline underline-offset-[12px] '>Angota Kelompok</h1>
      <div className='flex  flex-wrap h-[75vh]  justify-evenly '>
        <div className='basis-1/3 bg-slate-300 flex items-center border '>
          <Image className=' ms-5 ' src={Iqbal} alt="person" width={75} height={50} />
          <p className='text-xl font-bold mx-auto '>Mohammad Iqbal Maulana</p>
        </div>
        
        <div className='basis-1/3 bg-slate-300 flex items-center border '>
          <Image className='' src={Rizal} alt="person" width={130} height={100} />
          <p className='text-xl font-bold mx-auto me-6'>Rizal Muhammad Affandi</p> 
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border '>
          <Image className=' ms-5 ' src={Sahrul} alt="person" width={100} height={50} />
          <p className='text-xl  font-bold mx-auto '>Syahrul Faturochman</p>
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border'>
          <Image className=' ms-5' src={Risma} alt="person" width={100} height={50} />
          <p className='text-xl  font-bold mx-auto text-center'>Risma Amaliya</p>
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border'>
          <Image className=' ms-5' src={Prima} alt="person" width={100} height={50} />
          <p className='text-xl  font-bold mx-auto text-center'>Primanda Yuvicka Chaerunnisa</p>
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border'>
          <Image className=' ms-5' src={Dina} alt="person" width={110} height={50} />
          <p className='text-xl  font-bold mx-auto text-center'>Dina Febriani</p>
        </div>
      </div>
    </div>
  )
}
