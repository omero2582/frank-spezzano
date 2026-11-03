import React from 'react'
import Bressani from '../Bressani/Bressani'
import books from '../../db/books.json'
import { Link } from 'react-router'

export default function Books() {
  return (
    <div className='text-stone-900 bg-stone-50'>
      <h1 className='mt-8 mb-1 text-[3.2rem] text-center font-[700] tracking-[0.025rem]'>
        Books
      </h1>
      
      <div className='bg-red-700 grid space-y-2 px-2 py-2 cursor-pointer'>
        {books.map(book => (
          <Link to={`/books/${book.slug}`} className='bg-stone-50 grid grid-flow-col grid-cols-[auto_1fr] px-4 py-3 rounded-md'>
            <div>
              <img className='h-[300px]' src={`${book.covers[0]}`}/>
            </div>
            <div className='px-5 space-y-4'>
              <h2 className='text-[1.40rem] font-[700]'>
                {book.title}
              </h2>
              <p className='text-[1.05rem] tracking-[0.01rem] leading-[1.55]'>
                {book.descripion}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
