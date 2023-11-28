'use client'
import React, { useState } from 'react'
import { predictCategory } from '@/app/(components)/api/api'

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
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <input type="file" onChange={handleCategory} />
            {category !== null && (
                <p >Prediksi CV anda dalam kategori: <span className='font-bold text-xl text-blue-400'>{category}</span></p>
            )}
        </div>
    </div>
  )
}

export default Category