import React, { useState } from 'react'
import Hero from '../../Home/Hero'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import ReactMarkdown from 'react-markdown';
import markdownContent from '../../../db/descriptions/paulus.md?raw'

export default function Paulus() {

  return (

      <div className='text-neutral-300 mb-20'>
        <Hero />
        <div className='grid max-w-[1200px] mx-auto px-8'>
          <h1 className='text-[3.2rem] text-stone-200 font-[700] mx-auto mt-30 mb-12'>
            Paulus
          </h1>


          <div className='grid grid-flow-col space-x-6'>
            <div className=''>
              <img 
                src="/books/Paulus/paulus-cover.jpg" 
                className='max-w-[400px]'
              />
            </div>
            {/* <div className='space-y-5 text-[1.15rem]'> */}
            <div className='text-[1.15rem] tracking-[0.01rem] leading-[1.50]'>
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-5">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                  li: ({ children }) => <li className="ml-4">{children}</li>,
                  br: () => <br className="block my-2" />, // Add spacing for line breaks
                }}
              >
                {markdownContent}
              </ReactMarkdown>
              <button className='font-[500] bg-rose-700 hover:bg-rose-600 px-6 py-2 rounded-2xl'>
                Buy Now
              </button>
            </div>
          </div>


        </div>
      </div>
    )
}
