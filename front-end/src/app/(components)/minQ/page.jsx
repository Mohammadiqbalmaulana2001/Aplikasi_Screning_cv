'use client'
import React, { useEffect, useState } from 'react'
import { predictMinQ } from '../api/api'

const MinQ = () => {
    const [userInput, setUserInput] = useState('');
    const [userWords, setUserWords] = useState([]);
    const [minQ, setMinQ] = useState('');

    const handleUserInputChange = (event) => {
      setUserInput(event.target.value);
      const words = event.target.value.split('');
      setUserWords(words);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault(); 
  const input = userInput.trim(); 
  if (input !== '') {
    try {
      const response = await predictMinQ(input);
      setMinQ(response);
      setUserInput('');
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setMinQ('Maaf, terjadi kesalahan dalam mengirim permintaan.');
    }
  }
    };
  
    return (
      <div className='h-screen flex flex-col items-center justify-center '>
        <div className="flex flex-col h-screen max-w-sm px-8 bg-white">
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col mb-4 gap-4 py-8">
                
                <div className="flex justify-start">
                <span className='mr-1 text-2xl'>🧑</span>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                    {
                      userWords.map((word, index) => (
                        
                        <span key={index} className="text-gray-900 text-sm">
                          {word}
                        </span>
                        
                      ))
                    }
                  </div>
                </div>

                <div className="flex justify-end">
                <span className='mr-1 text-2xl'>🤖</span>
                  <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                    <p className="text-white text-sm text-justify">  {minQ}</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div iv className="flex justify-center items-center h-16">
              <form onSubmit={handleFormSubmit}>
              <input 
                type="text"
                value={userInput}
                onChange={handleUserInputChange}
                className="border border-gray-300 rounded-lg py-2  max-w-lg mr-4"
                placeholder="Type a message..." />
              <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
              </form>
            </div>
          </div>
      </div>
    );
};

export default MinQ