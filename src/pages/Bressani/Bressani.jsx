import React from 'react'
import Hero from '../Home/Hero'

const symbolsOfFaith = [
  {src: '/books/Bressani/symbol-of-faith1.jpg'},
  {src: '/books/Bressani/symbol-of-faith2.jpg'},
  {src: '/books/Bressani/symbol-of-faith3.jpg'},
  {src: '/books/Bressani/symbol-of-faith4.jpg'},
  {src: '/books/Bressani/symbol-of-faith5.jpg'},
  {src: '/books/Bressani/symbol-of-faith6-hands.jpg'},
  {src: '/books/Bressani/symbol-of-faith7-pope.jpg'},
  {src: '/books/Bressani/symbol-of-faith8-kateri.jpg'},
]

const historicalDocuments = [
  {src: '/books/Bressani/historical-docs-early-map.jpg'},
  {src: '/books/Bressani/historical-docs-letter.jpg'},
]

const production2008 = [
  {src: '/books/Bressani/bressani-2008-166-production.jpg'},
  {src: '/books/Bressani/new-bressani-poster-production-scaled.jpg'},
  {src: '/books/Bressani/bressani-2008-048-production.jpg'},
]

const sections = [
  {label: 'Symbols of Faith', images: symbolsOfFaith},
  {label: 'Historical Documents', images: historicalDocuments},
  {label: '2008 Production', images: production2008}
]

export default function Bressani() {



  return (
      <div className='text-neutral-300 mb-20'>
        <Hero />
        <div className='grid max-w-[1200px] mx-auto px-8'>
          <h1 className='text-[3.2rem] text-stone-100 font-[700] mx-auto mt-30 mb-12'>
            About Bressani
          </h1>


          <div className='grid grid-flow-col space-x-6'>
            <div className=''>
              <img 
                src="/books/Bressani/bressani-cover.jpg" 
                className='max-w-[400px]'
              />
            </div>
            <div className='space-y-6 text-[1.15rem]'>
              <div>
                <p><strong className='font-[800]'>Born:</strong> 6 May 1612 in Rome, Italy</p>
                <p><strong className='font-[800]'>Died:</strong> 9 September 1672 in Florence</p>
                <p><strong className='font-[800]'>Mission:</strong> Jesuit priest to convert the natives of New France to the Christian faith</p>
              </div>
            
              <p>
                Accomplishments: Fr. Bressani is the author of an important map entitled Novae Franciae Accurata Delineatio which is the earliest representation of the native life in New France in existence.
              </p>

              <p>
                Bressani was an astonishing man, even for a missionary. He sailed for the new world in 1642. Though only twenty-nine, he had already attained distinction as a professor of literature, philosophy and mathematics. His scientific interests were continually evident.
              </p>

              <p>
                He made astronomical observations at Ste. Marie among the Hurons with a telescope. When he reached the Huron country in the fall of 1645, he was able to put his astronomical training to excellent use. On a cold winter night Bressani held a telescope in his mutilated hands and observed a lunar eclipse with an accuracy unmatched in North America for the rest of the century and equaled at the time only by European astronomers.
              </p>
            </div>
          </div>

          {/* <div>
            <h1 className='text-[3rem] text-stone-100 font-[700] text-center mt-30 mb-8'>
            Symbols of Faith
            </h1>
            <div className='flex flex-wrap gap-2 justify-center'>
              {
              symbolsOfFaith.map(b =>
                <img
                  src={b.src}
                  className="rounded-sm h-[260px] w-auto object-cover"
                  loading='lazy'
                />
              )
              }
            </div>
          </div> */}

          <div className='mt-30 space-y-25'>

            {sections.map(section=>
              <section>
                <h1 className='text-[3rem] text-stone-100 font-[700] text-center mb-8'>
                  {section.label}
                </h1>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {
                  section.images.map(b =>
                    <img
                      src={b.src}
                      className="rounded-sm h-[300px] w-auto object-cover"
                      loading='lazy'
                    />
                  )
                  }
                </div>
              </section>
            )}
            
          </div>
        </div>
      </div>
    )
}
