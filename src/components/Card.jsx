import React from 'react'

export default function Card({ title, num, desc }) {
  return (
    <div className='p-1 sm:p-2 lg:p-3.5 rounded-md shadow-md bg-white'>
      <h3>{title}</h3>
      <span>{num}</span>
      <p>{desc}</p>
      <button className='text-center py-1 lg:px-10 rounded-md text-white bg-indigo-500'>
        CTA
      </button>
    </div>
  )
}
