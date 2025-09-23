
import './App.css'

import React from "react";

export default function App() {
  return (
    <div className='flex flex-col'>
      <header className='py-8 px-15 flex text-black items-center justify-between'>
        <p className='flex-1'>Oscar Zhang</p>
        <a href='' className='px-10'>About</a>
        <a href='#projects' className='px-10'>Experience</a>
        <a className='pl-10'>Contact</a>
      </header>
      <hero className='flex items-center justify-center'>
        <div className='flex flex-col'>
          <p>Hi, I'm Oscar</p>
          <p>I am .....</p>
        </div>

      </hero>
      <div>
        <p id='projects'>Projects</p>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center gap-x-8'>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <p className='font-bold text-lg'>Multimodal Lung Cancer Diagnosis</p>
              <p className='flex-1'>A deep learning model integrating images and patient data to diagnose lung cancer with 99% accuracy.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>Python</p>
                <p className='bg-orange-200 p-1.5 rounded-md text-gray-500 font-semibold'>Tensorflow</p>
                <p className='bg-sky-300 p-1.5 rounded-md text-gray-500 font-semibold'>NumPy</p>
                <p className='bg-[#1f0a8b] p-1.5 rounded-md text-gray-500 font-semibold'>Pandas</p>
              </div>
            </div>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <p className='font-bold text-lg'>Web-Based Habit Tracker</p>
              <p className='flex-1'>A full-stack web application for users to create, track, and manage personal habits.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>Python</p>
                <p className='bg-[#2D2D2D] p-1.5 rounded-md text-gray-500 font-semibold'>Flask</p>
                <p className='bg-[#004b5c] p-1.5 rounded-md text-gray-500 font-semibold'>SQL</p>
                <p className='bg-[#beadd7] p-1.5 rounded-md text-gray-500 font-semibold'>Bootstrap</p>
              </div>
            </div>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <p className='font-bold text-lg'>Web-Based Habit Tracker</p>
              <p className='flex-1'>A full-stack web application for users to create, track, and manage personal habits.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>Python</p>
                <p className='bg-[#2D2D2D] p-1.5 rounded-md text-gray-500 font-semibold'>Flask</p>
                <p className='bg-[#004b5c] p-1.5 rounded-md text-gray-500 font-semibold'>SQL</p>
                <p className='bg-[#beadd7] p-1.5 rounded-md text-gray-500 font-semibold'>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}