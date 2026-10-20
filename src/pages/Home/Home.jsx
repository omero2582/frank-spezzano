import React from 'react'
// import heroImg from './assets/hero.png'
import heroImg from '../../../public/images/Frank-Spezzano-600x600.jpg'

export default function Home() {
  return (
    <div className='text-stone-300'>
      {/* Hero */}
      <div className='min-h-[400px] bg-[#050212] px-5 space-x-3 flex items-center'> 
        {/* Left Text Section */}
        <div className='grid space-y-5'>        
          <h1 className='text-[3.1rem] text-neutral-200 font-bold text-center'>
            Works of Frank Spezzano
          </h1>
          <div className='text-[1.18rem] text-neutral-400 grid justify-items-center'>
            <p className=''>
              “WE WRITE TO TASTE LIFE TWICE, IN THE MOMENT AND IN RETROSPECT.”
            </p>
            <p className='mt-2'>-ANAÏS NIN</p>
          </div>
          <button className='px-4 py-4 text-[1.1rem] font-medium rounded-md bg-rose-700 justify-self-center'>
            View all Works
          </button>
        </div>
        <div>
          <img src={heroImg} alt="" className='max-w-[400px] w-full' />
        </div>
      </div>
    </div>
  )
}
