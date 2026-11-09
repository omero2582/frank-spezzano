import React, { useState } from 'react'
import Hero from '../../Home/Hero'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'


const sections = [
  {
    label: 'Symbols of Faith',
    images: [
      {src: '/books/Bressani/symbol-of-faith1.jpg'},
      {src: '/books/Bressani/symbol-of-faith2.jpg'},
      {src: '/books/Bressani/symbol-of-faith3.jpg'},
      {src: '/books/Bressani/symbol-of-faith4.jpg'},
      {src: '/books/Bressani/symbol-of-faith5.jpg'},
      {src: '/books/Bressani/symbol-of-faith6-hands.jpg'},
      {src: '/books/Bressani/symbol-of-faith7-pope.jpg'},
      {src: '/books/Bressani/symbol-of-faith8-kateri.jpg'},
    ]
  },
  {
    label: 'Historical Documents',
    images: [
      {src: '/books/Bressani/historical-docs-early-map.jpg'},
      {src: '/books/Bressani/historical-docs-letter.jpg'},
    ]
  },
  {
    label: '2008 Production',
    images: [
      {src: '/books/Bressani/bressani-2008-166-production.jpg'},
      {src: '/books/Bressani/new-bressani-poster-production-scaled.jpg'},
      {src: '/books/Bressani/bressani-2008-048-production.jpg'},
    ]
  }
]

export default function Bressani() {

  const [selectedImage, setSelectedImage] = useState(null)

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
          <h1 className='text-[3.2rem] text-stone-200 font-[700] mx-auto mt-30 mb-12'>
            About Bressani
          </h1>


          <div className='grid grid-flow-col space-x-6'>
            <div className=''>
              <img 
                src="/books/Bressani/bressani-cover.jpg" 
                className='max-w-[400px]'
              />
            </div>
            <div className='space-y-5 text-[1.15rem]'>
              <div>
                <p><strong className='font-[750]'>Born:</strong> 6 May 1612 in Rome, Italy</p>
                <p><strong className='font-[750]'>Died:</strong> 9 September 1672 in Florence</p>
                <p><strong className='font-[750]'>Mission:</strong> Jesuit priest to convert the natives of New France to the Christian faith</p>
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

              <button className='font-[500] bg-rose-700 hover:bg-rose-600 px-6 py-2 rounded-2xl'>
                Buy Now
              </button>
            </div>
          </div>

          {/*Images Sections*/}
          
          <div className='mt-35 space-y-25'>
            {sections.map(section=>
              <section>
                <h2 className='text-[3rem] text-stone-200 font-[700] text-center mb-8'>
                  {section.label}
                </h2>
                
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {
                    section.images.map(b =>
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
            )}
          </div>
          <DialogContent 
            className="grid-rows-[minmax(0,1fr)] p-2 h-dvh max-w-[800px]! bg-neutral-900"
          >
            {selectedImage && (
              <img
                src={selectedImage}
                className="rounded-sm max-h-[100%]! place-self-center"
                alt=""
              />
            )}
          </DialogContent>
          



          <div className='mt-35'>
            <h2 className='text-[3rem] text-stone-200 font-[700] text-center mb-8'>
              Excerpts from “Brebeuf & His Brethren” By E. J. Pratt
            </h2>

            <div className='space-y-5 text-[1.15rem]'>
              <p className=''>
                The western missions waiting Jogues’s return were held together by a scarlet thread.
              </p>
              <p>
                The sparse reports had filtered to Quebec and the command was given to Bressani to lead the rescue band to Sainte Marie. Leaving Three Rivers in the spring when ice was on the current, he was caught like Jogues with his six Hurons and a French oblate.
              </p>
              <p>
                Bressani wrote one day when vigilance relaxed and his split hand was partly healed and only one finger of the hand is left unburned. The blood has stained the paper. My writing table is the earth; the ink gunpowder mixed with water. And again this time to his Superior – I could not have believed it to be possible that a man’s body was so hard to kill.
              </p>
              <p>
                Bressani ill-equipped to speak the Huron has speech more eloquent to capture souls; it is his scars; his mutilated hands “Only show us,” the neophytes exclaim, “The wounds, for they teach better than our tongues your faith, for you have come again to face the dangers. Only thus we know that you believe the truth and would have us believe it.”
              </p>
              <p>
                Infested by the Iroquois were traps of death. Three bands of Hurons had been caught that summer.
              </p>
              <p>
                Rumours of treaties between the French and Mohawks stirred belief that peace was in the air.
              </p>
              <p>
                This was the pipe-dream – was it credible?
              </p>
              <p>
                Where little proof was given of the root of faith, but now the Fathers told of deeds that flowered from the stems. Had not Eustache bequeathed his record like a Testament?
              </p>
              <p>
                here little proof was given of the root of faith, but now the Fathers told of deeds that flowered from the stems. Had not Eustache Bequeathed his record like a Testament?
              </p>
              <p>
                Not only was the faith sustained by hopes nourished within the bosom of their home and by the wish-engendered talk of peace, but there outside the fort was evidence of tenure for the future.
              </p>
              <p>
                Where even the sun and moon and stars revolved around a Life and a redemptive Death. They pushed their missions to the north and west further into Algonquin territories.
              </p>
              <p>
                As the months passed the pressure of attack moved grimly towards the west, making complete the isolation of Huronia.
              </p>
              <p>
                And the Huron curse inspired by sorcerers who saw black magic in the Jesuit robes and linked disaster with their ritual,
              </p>
              <p>
                Against arrows, muskets, spears and tomahawks. That momentary pause had saved the lives of hundreds as they fled into the forest, but not the life of Daniel. Though afraid at first to cross a charmed circumference to take a struggle hand-to-hand, they drove their arrows through him, then in frenzied rush mastering their awe, they hurled themselves upon. The body, stripped it of its clothes and flung it into the burning church. By noon nothing remained but ashes of the town, the fort, the cabins and their seven hundred dead.
              </p>
              <p>
                <em>The Collected Poems of E. J. Pratt.</em>
              </p>
            </div>
          </div>

          <div className='mt-30'>
            <h2 className='text-[3rem] text-stone-200 font-[700] text-center mb-8'>
              FR. Bressani’s Mission To New France
            </h2>

            <div className='space-y-5 text-[1.15rem]'>
              <p className=''>
                Francesco Giuseppe Bressani was born on May 6, 1612. Bressani entered the Society of Jesus on August 15, 1626 at the age of fourteen. In 1642, he left Rome and resided for a time among the French in Quebec. His voluntary mission included his aspirations of converting the natives to the Christian faith.
              </p>
              <p>
                On 24 April 1644, he departed by canoe from Trois Rivieres for the Huron mission on Georgian Bay accompanied by six Christian Hurons and a twelve year old French boy. On the third day of travel, Fr. Bressani and his companions were attacked by a band of approximately thirty Iroquois. At this point he was brutally tortured. The innocent missionary lost his left thumb and the small finger on his left hand was mutilated. He also lost the first joint of three fingers of his right hand (the index, middle finger and ring finger). He suffered innumerable blows and was frequently burned. It was a miracle that he escaped death. At one point the Indians even threatened to burn him alive but spared his life by selling him as a slave. This outcome gave him little respite and enabled him to write a long letter to the general of the Jesuits. The letter was divided into three parts – the first dealt with the discovery and location of New France as well as the missions along the St. Lawrence River and the northern shore of Lake Ontario. The second part covered the conversion of the natives to the Christian faith and in particular the difficulties encountered in converting the Hurons. The third part described the tortures inflicted by the Iroquois on some of the Jesuit fathers including himself.
              </p>
              <p>
                On November 15, 1644, Fr. Bressani was able to return to France. In the autumn of the next year, he started out again for the Huron missions. He remained there for almost four years, accepting abuse and discomfort. He attempted to understand the natives by learning their language and adapting himself to their ways until the constant attacks by the Iroquois forced the Jesuits to abandon the mission. In November of 1650, Fr. Bressani left New France for the final time and returned to Italy. There he devoted himself to preaching and to his apostolate. He gained widespread fame as a preacher, displaying his mutilated hands as a method of convincing the disbelievers. On September 9, 1672, Fr. Bressani’s life finally came to an end.
              </p>
              <p>
                During his eight years of evangelizing in Canada, Fr. Bressani had acquired valuable experience of the country and its inhabitants. He recorded his discoveries and observations in a work principally to the Huron country and its martyrs.
              </p>
              <p>
                Throughout the ordeal he showed a determination and control that only a man that had to come to grips with his God and himself could illustrate and have considered himself a humble and unworthy servant.
              </p>
            </div>
          </div>
        </div>
      </div>
        </Dialog>
    )
}
