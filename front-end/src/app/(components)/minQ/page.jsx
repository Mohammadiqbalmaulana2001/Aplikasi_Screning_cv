'use client'
import React, { useEffect, useState } from 'react'
import { predictMinQ } from '../api/api'
const MinQ = () => {
    const [userInput, setUserInput] = useState('');
    const [userWords, setUserWords] = useState([]);
    const [minQ, setMinQ] = useState('');
  
    const handleUserInputChange = (event) => {
      setUserInput(event.target.value);
      const words = event.target.value.split(' ');
      setUserWords(words);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await predictMinQ(userInput);
        setMinQ(response);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        setMinQ('Maaf, terjadi kesalahan dalam mengirim permintaan.');
      }
    };
  
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleUserInputChange}
            placeholder="Masukkan input Anda"
          />
          <button type="submit">Kirim</button>
        </form>
  
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <div style={{ flex: 1 }}>
            <p>🧔user:</p>
            <ul>
              {userWords.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <p className='font-bold text-2xl'>🤖minQ:</p>
            <p>{minQ}</p>
          </div>
        </div>
      </div>
    );
  };

export default MinQ