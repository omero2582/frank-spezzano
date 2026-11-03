import React from 'react'
// import heroImg from './assets/hero.png'
import heroImg from '/images/Frank-Spezzano-600x600.jpg'
import { Link } from 'react-router'
import Hero from './Hero'
import books from '../../db/books.json'

const group1 = books.filter(b => b?.group?.includes("Promoting the Faith"));
const group2 = books.filter(b => !b?.group?.includes("Promoting the Faith"));

export default function Home() {
  return (
    <div className='text-stone-300'>
      <Hero />
      <div className='py-10'>

        <div>
          <h2 className='text-center text-[2.6rem] font-[600]'>
            Promoting the Faith
          </h2>
          <div className='py-5 gap-2 justify-center flex flex-wrap'>
            {group1.map(b => (
              <Link to={`/books/${b.slug}`} className='rounded-md hover:bg-neutral-800 cursor-pointer py-4 px-2 w-[300px] grid justify-items-center'>
                <img className='h-[300px]' src={b.covers[0]}/>
                <h2 className='text-center text-[1.15rem] pt-3 font-[500]'>
                  {b.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        
        <div className='py-6'>

        </div>

        <div>
          <h2 className='text-center text-[2.6rem] font-[600]'>
            More Books
          </h2>
          <div className='py-5 gap-2 justify-center flex flex-wrap'>
            {group2.map(b => (
              <Link to={`/books/${b.slug}`} className='rounded-md hover:bg-neutral-800 cursor-pointer py-4 px-2 w-[300px] grid justify-items-center'>
                <img className='h-[300px]' src={b.covers[0]}/>
                <h2 className='text-center text-[1.15rem] pt-3 font-[500]'>
                  {b.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}
