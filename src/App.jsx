
import './App.css'

import React from "react";

export default function App() {
  return (
    <div className='flex flex-col px-30 gap-y-12'>
      <header className='py-8 flex text-black items-center justify-between'>
        <p className='flex-1 text-2xl'>Oscar Zhang</p>
        <a href='#about' className='px-10'>About</a>
        <a href='#projects' className='px-10'>Experience</a>
        <a href='#contact' className='pl-10'>Contact</a>
      </header>
      <hero id='about' className='flex items-center justify-between'>
        <div className='flex flex-col justify-start gap-y-3 w-150 mt-5'>
          <p className='text-6xl font-bold'><span className='text-red-500'>Hi, </span>I'm Oscar</p>
          {/*<p className='text-xl'>I am a Computer Science student at UC Berkeley who enjoys building practical, full-stack applications. I have experience developing web apps using Python, Flask, and SQL, implementing everything from the database design to the user interface. Beyond web development, I have also constructed high-performance deep learning models and have a strong foundation in data structures and algorithms.</p>*/}
          <p className='text-xl'>I am a Computer Science student at UC Berkeley who enjoys building practical, full-stack applications.</p>
          <p className='text-xl'>My experiences include:</p>
          <ul className='flex flex-col list-disc list-inside text-xl gap-y-2'>
            <li><span className='font-semibold'>Full-Stack Development: </span>I built a web-based habit tracker using Python, Flask, and SQL.</li>
            <li><span className='font-semibold'>Machine Learning: </span>I developed a multimodal model to diagnose lung cancer with 99.19% validation accuracy.</li>
            <li><span className='font-semibold'>Data Engineering: </span>I engineered a data processing pipeline in Python to integrate and analyze a large-scale dataset.</li>
          </ul>
          <div className='flex gap-x-5 mt-3'>
            <a href='https://github.com/oscarzzq' target='_blank'><img src='public/github-mark.svg' alt='Github logo' class='w-15' ></img></a>
            <a href='https://www.linkedin.com/in/oscar-ziqian-zhang-91599324a/' target='_blank'><img src='public/InBug-Black.png' alt='Linkedin logo' className='h-15'></img></a>
          </div>
        </div>
        <div className='w-80 h-80 rounded-full overflow-hidden'>
          <img src='public/myphoto.jpg' alt='Photo of Oscar Zhang' class='w-full h-full object-cover object-left'></img>
        </div>
      </hero>
      <div className='flex flex-col gap-y-8'>
        <h2 id='projects' className='text-5xl font-bold mt-15'>Projects</h2>
        <div className='flex flex-col gap-y-10'>
          <div className='flex items-center justify-center gap-x-8'>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <a href='https://yuanpeiyoungscholars.com/pdf/web/viewer.html?file=//files.yuanpeiyoungscholars.com/cloud-uploads%2Fuser-4%2FPDF%2F4th-YSA.pdf#page=6' target='_blank' className='font-bold text-lg'>Multimodal Lung Cancer Diagnosis</a>
              <p className='flex-1'>A deep learning model integrating images and patient data to diagnose lung cancer with 99% accuracy.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>Python</p>
                <p className='bg-orange-200 p-1.5 rounded-md text-gray-500 font-semibold'>Tensorflow</p>
                <p className='bg-sky-300 p-1.5 rounded-md text-gray-500 font-semibold'>NumPy</p>
                <p className='bg-[#1f0a8b] p-1.5 rounded-md text-gray-500 font-semibold'>Pandas</p>
              </div>
            </div>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <a href='https://habit-tracker-j0es.onrender.com/' target='_blank' className='font-bold text-lg'>Web-Based Habit Tracker</a>
              <p className='flex-1'>A full-stack web application for users to create, track, and manage personal habits.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>Python</p>
                <p className='bg-[#2D2D2D] p-1.5 rounded-md text-gray-500 font-semibold'>Flask</p>
                <p className='bg-[#004b5c] p-1.5 rounded-md text-gray-500 font-semibold'>SQL</p>
                <p className='bg-[#beadd7] p-1.5 rounded-md text-gray-500 font-semibold'>Bootstrap</p>
              </div>
            </div>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <p className='font-bold text-lg'>NHANES Data Pipeline</p>
              <p className='flex-1'>Engineered a data pipeline to process and clean the large-scale NHANES public health dataset.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>Python</p>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>R</p>
                <p className='bg-[#2D2D2D] p-1.5 rounded-md text-gray-500 font-semibold'>Pandas</p>
                <p className='bg-[#004b5c] p-1.5 rounded-md text-gray-500 font-semibold'>Numpy</p>
                <p className='bg-[#beadd7] p-1.5 rounded-md text-gray-500 font-semibold'>bs4</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center gap-x-8'>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <a href='' target='_blank' className='font-bold text-lg'>Personal Website</a>
              <p className='flex-1'>My personal portfolio site (the one you're currently on), built from scratch with React, Vite, and Tailwind CSS.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>React</p>
                <p className='bg-orange-200 p-1.5 rounded-md text-gray-500 font-semibold'>Vite</p>
                <p className='bg-sky-300 p-1.5 rounded-md text-gray-500 font-semibold'>Tailwind CSS</p>
                <p className='bg-[#1f0a8b] p-1.5 rounded-md text-gray-500 font-semibold'>Javascript</p>
              </div>
            </div>
            <div className='flex flex-col bg-gray-200 p-3 w-85 h-45'>
              <a href='https://oscarzzq.github.io/landing-page-demo/' target='_blank' className='font-bold text-lg'>Static Landing Page</a>
              <p className='flex-1'>A responsive landing page built to demonstrate foundational web development and modern CSS skills.</p>
              <div className='flex gap-x-3 text-sm'>
                <p className='bg-blue-300 p-1.5 rounded-md text-gray-500 font-semibold'>HTML</p>
                <p className='bg-[#2D2D2D] p-1.5 rounded-md text-gray-500 font-semibold'>CSS</p>
                <p className='bg-[#004b5c] p-1.5 rounded-md text-gray-500 font-semibold'>Javascript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-5 pl-1'>
        <p id='contact' className='text-5xl font-bold'>Contact me</p>
        <div className='flex gap-x-3 justify-content items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <p className='text-lg'>oscarzhangdev AT gmail DOT com</p>
        </div>
        <a href='/Oscar-Zhang-Resume.pdf' className='flex gap-x-3 justify-content items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-user-icon lucide-file-user size-10"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
          <p className='text-lg'>Download resume</p>
        </a>
        <div className='flex gap-x-5 mt-3'>
          <a href='https://github.com/oscarzzq' target='_blank'><img src='public/github-mark.svg' alt='Github logo' class='w-15' ></img></a>
          <a href='https://www.linkedin.com/in/oscar-ziqian-zhang/' target='_blank'><img src='public/InBug-Black.png' alt='Linkedin logo' className='h-15'></img></a>
        </div>
      </div>
      <footer className='flex justify-center items-center'>
        <p className='my-10'>Copyright © Oscar Zhang 2025</p>
      </footer>
    </div>
  );
}