import React, { useState } from 'react'
import Hero from '../Home/Hero'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import ReactMarkdown from 'react-markdown';
// import descriptionMd from '../../db/descriptions/bressani.md?raw'
import books from '../../db/books.json'
import { useParams } from 'react-router';


// 1. Tell Vite to load all .md files in the descriptions folder as raw text strings
const descriptionFiles = import.meta.glob('../../db/descriptions/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true // Loads them synchronously so they are ready immediately
});




// 1. Tell Vite to load all .md files in the descriptions folder as raw text strings
const contentFiles = import.meta.glob('../../db/content/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true // Loads them synchronously so they are ready immediately
});

export default function BookDetail() {

  // const id = validator.escape(useParams().id);
  const slug = useParams().slug;

  const book = books.find(b => b.slug === slug)
  
  const [selectedImage, setSelectedImage] = useState(null)

  if(!book) return(
    <>
      <Hero />
      <div className='grid max-w-[1200px] mx-auto px-8'>
        <h1 className='text-center text-[3.2rem] text-stone-200 font-[700] mx-auto mt-30 mb-12'>
          Book not found
        </h1>
      </div>
    </>
  )

  // 2. Construct the matching key for the file
  const filePath = `../../db/descriptions/${book.descriptionFile}`;
  //console.log('FilePATH = ', filePath);
  const descriptionMd = descriptionFiles[filePath] || "Description not found.";


  return (
    <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null)
        }}
      className=""
      >
      <div className='text-neutral-300 mb-20'>
        <Hero />
        <div className='grid max-w-[1200px] mx-auto px-8'>
          <h1 className='text-center text-[3.2rem] text-stone-200 font-[700] mx-auto mt-30 mb-12'>
            {book.title}
            {/* {book.pageTitle} */}
          </h1>


          <div className='grid grid-flow-col space-x-6'>
            <div className=''>
              <img 
                src={`${book.covers[0]}`} 
                className='max-w-[400px]'
              />
            </div>
            <div className='text-[1.15rem] tracking-[0.01rem] leading-[1.50]'>
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-5">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc  mb-4">{children}</ul>,
                  li: ({ children }) => <li className="ml-4">{children}</li>,
                  br: () => <br className="block my-2" />, // Add spacing for line breaks
                }}
              >
                {descriptionMd}
              </ReactMarkdown>
              <button className='font-[500] bg-rose-700 hover:bg-rose-600 px-6 py-2 rounded-2xl'>
                Buy Now
              </button>
            </div>
          </div>

          {/*Sections*/}
          
          <div className='mt-35 space-y-25'>
            {book.sections?.map(section => {
               // 2. Construct the matching key for the file
              const filePath = `../../db/content/${section.contentFile}`;
              //console.log('FilePATH = ', filePath);
              const markdownContent = contentFiles[filePath] || "Description not found.";
              
              return section?.type === 'images' ?
              <section>
                <h2 className='text-[3rem] text-stone-200 font-[700] text-center mb-8'>
                  {section.label}
                </h2>
                
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {
                    section.images?.map(b =>
                      <button
                        type="button"
                        key={b.src}
                        onClick={() => setSelectedImage(b.src)}
                        className="cursor-pointer"
                      >
                        <img
                          src={b.src}
                          className="rounded-sm h-[300px] w-auto object-cover"
                          loading='lazy'
                          
                        />
                      </button>
                    )
                    }
                  </div>
              </section>
              :
              <section>
                <h2 className='text-[3rem] text-stone-200 font-[700] text-center mb-8'>
                  {section.label}
                </h2>
                
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
                  </div>
              </section>}
            )}
          </div>
          <DialogContent 
            className="grid-rows-[minmax(0,1fr)] p-2 h-dvh max-w-[1100px]! bg-neutral-900"
          >
            {selectedImage && (
              <img
                src={selectedImage}
                className="rounded-sm max-h-[100%]! place-self-center"
                alt=""
              />
            )}
          </DialogContent>

        </div>
      </div>
        </Dialog>
    )
}
