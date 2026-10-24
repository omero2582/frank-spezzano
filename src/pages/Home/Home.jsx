import React from 'react'
// import heroImg from './assets/hero.png'
import heroImg from '/images/Frank-Spezzano-600x600.jpg'
import { Link } from 'react-router'
import Hero from './Hero'

export default function Home() {
  return (
    <div className='text-stone-300'>
      <Hero />
    </div>
  )
}
