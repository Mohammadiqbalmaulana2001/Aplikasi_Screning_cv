"use client"
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Home from '@/app/(components)/Home'
import { Scorecv } from '@/app/(components)/Scorecv'
import Categorycv from '@/app/(components)/Categorycv'
import Kelompok from '@/app/(components)/Kelompok'
import Footer from '@/app/(components)/Footer'
export default function page() {
  return (
    <div>
        <Navbar />
        <div className='max-w-[1200px] mx-auto '>
          <Home />
          <Scorecv />
          <Categorycv />
          <Kelompok />
        </div>
        <Footer />
    </div>
  )
}
