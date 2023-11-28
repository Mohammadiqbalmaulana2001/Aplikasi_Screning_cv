import React from 'react'
import Person from '@/app/assets/images/person.svg'
import Image from 'next/image'

export default function Kelompok() {
  return (
    <div className='my-10 bg-white shadow-2xl'>
      <h1 className='text-3xl font-bold mx-auto text-center py-7 bg-slate-300 underline underline-offset-[12px] '>Angota Kelompok</h1>
      <div className='flex  flex-wrap h-[75vh]  justify-evenly '>
        <div className='basis-1/3 bg-slate-300 flex items-center border '>
          <Image className='bg-cyan-400 ms-5 ' src={Person} alt="person" width={50} height={50} />
          <p className='text-xl font-bold mx-auto '>Mohammad Iqbal Maulana</p>
        </div>
        
        <div className='basis-1/3 bg-slate-300 flex items-center border '>
          <Image className='bg-cyan-400 ms-5' src={Person} alt="person" width={50} height={50} />
          <p className='text-xl font-bold mx-auto '>Rizal Muhammad Affandi</p> 
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border '>
          <Image className='bg-cyan-400 ms-5 ' src={Person} alt="person" width={50} height={50} />
          <p className='text-xl  font-bold mx-auto '>Syahrul Faturochman</p>
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border'>
          <Image className='bg-cyan-400 ms-5' src={Person} alt="person" width={50} height={50} />
          <p className='text-xl  font-bold mx-auto text-center'>Risma Amalia</p>
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border'>
          <Image className='bg-cyan-400 ms-5' src={Person} alt="person" width={50} height={50} />
          <p className='text-xl  font-bold mx-auto text-center'>Primanda Yuvicka Chaerunnisa</p>
        </div>
        <div className='basis-1/3 bg-slate-300 flex items-center border'>
          <Image className='bg-cyan-400 ms-5' src={Person} alt="person" width={50} height={50} />
          <p className='text-xl  font-bold mx-auto text-center'>Dina Febriani</p>
        </div>
      </div>
    </div>
  )
}
