import React from 'react'
import { Link } from 'react-router'
import heroImg from '/images/Frank-Spezzano-600x600.jpg'

export default function Hero() {
  return (
      <div className='min-h-[400px] bg-[#050212] px-5 space-x-10 flex items-center justify-center'> 
        {/* Left Text Section */}
        <div className='grid space-y-5'>        
          <h1 className='text-[3.3rem] text-neutral-100 font-bold text-center'>
            Works of Frank Spezzano
          </h1>
          <div className='text-[1.2rem] text-stone-400 grid justify-items-center'>
            <p className=''>
              “WE WRITE TO TASTE LIFE TWICE, IN THE MOMENT AND IN RETROSPECT.”
            </p>
            <p className='mt-2'>-ANAÏS NIN</p>
          </div>
          <Link
            to={'/books'}
            className='px-4 py-4 text-[1.1rem] font-[700] rounded-md bg-rose-700 hover:bg-rose-800 justify-self-center'
          >
            View all Works
          </Link>
        </div>
        <div>
          <img src={heroImg} alt="" className='max-w-[400px] w-full' />
        </div>
      </div>
  )
}
