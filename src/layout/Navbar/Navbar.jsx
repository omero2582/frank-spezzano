import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <div className='text-stone-300 bg-black'>
      <div className='grid grid-flow-col justify-center  bg-neutral-50 space-x-2'>
        {[
          {label: 'Home', url: '/'},
          {label: 'Books', url: '/books'},
          {label: 'Author', url: '/author'},
        ].map(l => (
          <Link 
            to={l.url}
            className='py-1 px-[8px] text-[1.26rem] text-neutral-950 hover:text-rose-700 font-medium'
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
