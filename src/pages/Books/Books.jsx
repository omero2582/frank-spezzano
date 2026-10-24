import React from 'react'
import Bressani from '../Bressani/Bressani'

const books = [
  {
    title: "Bressani: The First Italian Jesuit in North America",
    author: "Frank Spezzano",
    summary: "",
    descripion: `"When I returned to France and Italy, I realized that I could not leave my work..."
    Father Bressani was a remarkable man from any viewpoint. A man of intellect and scientific curiosity, he was also a unwavering missionary, deeply connected to his faith and dedicated to his evangelical work in New France. He survived torture and mutilation only to insist upon returning to the mission in Canada to continue his work. His admiration and affection for the indigenous people had never diminished: his devotion to God had not dimmed.
    Father Bressani's courage and faith shine like beacons accross the centuries.
    This play drew inspiration from Father Bressani's own words.`,
    price: 2000,
    covers: ['/Bressani/bressani-cover-front.jpg'],
  },
  {
    title: "Paulus: A Historical Drama in Three Acts",
    author: "Frank Spezzano",
    summary: "",
    descripion: `“Do not be conformed to this world, but be transformed by the renewing of your minds.” Saint Paul

As if holding a candle up to an ancient canvas, playwright Frank Spezzano shines a light on a relatively obscure event in early Christian history, illuminating the story of the runaway slave Onesimus and his encounter with Paul the Apostle in a Roman prison. With a panoply of characters, as real and as flawed as you could ever hope to meet, this lively dramatization has a message of compassion at its core. St. Paul’s letter to his friend, Philemon, the runaway’s master, is a tender and personal expression of the saint’s famous doctrine on forgiveness. Here, we see Paul not as distant or lofty figure but as a gracious, humble man who acted on his beliefs, while Onesimus, a young man yearning for a better life, finds the greatest freedom of all in faith. This is a story of kindness and mercy, a tale for our turbulent times.`,
    price: 2000,
    covers: [`/Paulus/paulus-cover-front.jpg`] ,
  },
  {
    title: "Caught Between Swastika, Hammer & Sickle",
    author: "Frank Spezzano",
    summary: "",
    descripion: `"Tell me some more about your nice friends in the army. You always seem to have adventures". Graphic artist by profession and avid motorcycle enthusiast, young Hans Schaefer is conscripted into Hitler's war as a soldier in the Signal Corps. Thus the reluctant yet courageous soldier bears witness to the horrors of war on the infamous Eastern Front. An articulate opponent of Hitler and his Nazi regime, Hans is relentlessly torn between loyalty to his fellow soldiers as they fight for the Führer's megalomaniac ideas and his own conscience. As a soldier he suffers extreme hardships under the German command and later, as a prisoner of war, he is both victim of and eyewitness to the Red Army's particular brand of cruelty and punishment. Yet Hans is a survivor, living by his wits and by his art. Wily and talented, he draws portraits for both the Nazis and the Russians, gaining admiration and respect from high-ranking German officers and from his Russian "enemies" alike. Throughout, this tenacious man never loses his moral compass. He survives the Soviet labour camps to return safely home to his family in Kiel when war finally ends in 1945. Moving to Canada to make a fresh start in a new world, Hans lives to chronicle his harrowing "adventures" during some of the darkest and bloodiest years in Europe's history. "The collaboration of Mr. Spezzano's writing and Hans Schaefer's war experiences has produced an epic account of a German soldier's flight from the pathological Nazi regime. This novel echoes the reservations of the many Germans who harboured conflicting loyalties during the ascendancy of the Third Reich. It's also a very human story about love and loss. A courageous masterpiece and a testament to one man's struggle to retain his dignity and individuality in a world torn apart by tyrants". Jack Baret Screenwriter`,
    price: 2000,
    covers: [`/Caught-Between/caught-between-cover-front.jpg`],
  },
  {
    title: "Desires....of Love: A Historical Drama of a Nazi Dissident",
    author: "Frank Spezzano",
    summary: "",
    descripion: `The story of a Nazi dissident who prefairs love instead of war.`,
    price: 2000,
    covers: [`/Desires-Of-Love/desires-of-love-cover-front.jpg`],
  },
]

export default function Books() {
  return (
    <div className='text-stone-900 bg-stone-50'>
      <h1 className='mt-8 mb-1 text-[3.2rem] text-center font-[700] tracking-[0.025rem]'>
        Books
      </h1>
      
      <div className='bg-red-700 grid space-y-2 px-2 py-2'>
        {books.map(book => (
          <div className='bg-stone-50 grid grid-flow-col grid-cols-[auto_1fr] px-4 py-3 rounded-md'>
            <div>
              <img className='h-[300px]' src={`/books/${book.covers[0]}`}/>
            </div>
            <div className='px-5 space-y-4'>
              <h2 className='text-[1.40rem] font-[700]'>
                {book.title}
              </h2>
              <p className='text-[1.05rem] tracking-[0.01rem] leading-[1.55]'>
                {book.descripion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
