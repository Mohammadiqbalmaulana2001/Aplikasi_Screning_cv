'use client'
import React, { useState } from 'react'
import { predictScore } from '../api/api'

export default function Score() {
    const [score,setScore]= useState(null)

    const handleScore = async (event) => {
        const file = event.target.files[0];

        try {
            const percentage = await predictScore(file);
            setScore(percentage);
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
            setScore(null);
        }
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen">
            <input type="file" onChange={handleScore} />
            {score !== null && (
                <p>Prediksi Score CV anda: <span className='font-bold text-xl text-blue-400'>{score}%</span></p>
            )}
        </div>
    </div>
  )
}
