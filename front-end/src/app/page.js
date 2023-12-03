"use client"
import React from 'react'
import Home from '@/app/(components)/Home'
import { Scorecv } from '@/app/(components)/Scorecv'
import Categorycv from '@/app/(components)/Categorycv'
import Kelompok from '@/app/(components)/Kelompok'

export default function page() {
  return (
    <div>
        <div className='max-w-[1200px] mx-auto bg-white'>
          <Home />
          <Scorecv />
          <Categorycv />
          <Kelompok />
        </div>
    </div>
  )
}
