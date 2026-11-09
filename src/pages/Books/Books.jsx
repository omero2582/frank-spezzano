import React from 'react'
import Bressani from './Bressani/Bressani'
import books from '../../db/books.json'
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router'

export default function Books() {
  
  // 1. Tell Vite to load all .md files in the descriptions folder as raw text strings
  const summaryFiles = import.meta.glob('../../db/summaries/*.md', { 
    query: '?raw', 
    import: 'default',
    eager: true // Loads them synchronously so they are ready immediately
  });

  //bg-stone-50
  // console.log('keys', Object.keys(summaryFiles))
  return (
    <div className='text-stone-300 bg-neutral-950 '>
      <h1 className='text-stone-200 mt-8 mb-1 text-[3.2rem] text-center font-[700] tracking-[0.025rem]'>
        Books
      </h1>
      
      <div className='grid space-y-2 px-2 py-2 cursor-pointer'>
        {books.map(book => {
          // 2. Construct the matching key for the file
          const filePath = `../../db/summaries/${book.summaryFile}`;
          //console.log('FilePATH = ', filePath);
          const markdownContent = summaryFiles[filePath] || "Description not found.";

          return (
            <Link 
              to={`/books/${book.slug}`} 
              className='bg-neutral-900 px-4 py-5 hover:bg-neutral-800 grid grid-flow-col grid-cols-[auto_1fr] rounded-md'
            >
              <div className='w-[200px]'>
                <img className='h-auto' src={`${book.covers[0]}`}/>
              </div>
              <div className='px-5 space-y-4'>
                <h2 className='text-stone-200 text-[1.40rem] font-[700]'>
                  {book.title}
                </h2>
                {/* <p className='text-[1.05rem] tracking-[0.01rem] leading-[1.55]'>
                  {book.descripion}
                </p> */}
                <div className='text-[1.05rem] tracking-[0.01rem] leading-[1.55]'>
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-3">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                      li: ({ children }) => <li className="ml-4">{children}</li>,
                      br: () => <br className="block my-2" />, // Add spacing for line breaks
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                </div>
                <button className='font-[500] bg-rose-700 hover:bg-rose-600 px-4 py-1.5 rounded-2xl'>
                  Buy Now
                </button>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
