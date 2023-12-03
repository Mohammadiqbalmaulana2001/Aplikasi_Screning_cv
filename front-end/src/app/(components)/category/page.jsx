'use client'
import React, { useState } from 'react'
import { predictCategory } from '@/app/(components)/api/api'
import Image from 'next/image'
import file from '@/app/assets/images/file.png'

 const Category = () => {
    const [category, setCategory] = useState(null)

    const handleCategory = async(event) =>{
        const file = event.target.files[0]
        try {
            const category = await predictCategory(file)
            setCategory(category)
        } catch (error) {
            console.error('Terjadi kesalahan:', error)
            setCategory('Unknown')
        }
    }
  return (
    <div >
        <div className='h-screen flex items-center overflow-hidden'>
                <div className='m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12'>
                {category !== null && (
                        <p className='bg-white p-3 font-semibold rounded-xl m-5 shadow-xl opacity-80'>Prediksi CV anda dalam kategori: <span className='font-bold text-xl mx-auto mb-10'>{category}</span></p>
                )}
                    <div className='relative group w-full h-64 flex justify-center items-center'>
                        <div className='absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300'>
                            <input accept=".pdf" class="relative z-10 opacity-0 h-full w-full cursor-pointer" type="file" onChange={handleCategory}/>
                            <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center'>
                                <div className='space-y-6 text-center'>
                                    <Image src={file} alt='illustration' className="sm:w-40 w-32 m-auto"/>
                                    <p class="text-gray-700 text-lg">Seret dan lepas file atau <label for="dragOver" title="Upload a file" class="relative z-20 cursor-pointer text-blue-500 hover:text-blue-600 block">Unggah file</label> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Category