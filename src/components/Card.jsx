import React from 'react'
import Stylus from '../utils/Stylus'
export default function Card({ title, num, desc }) {
  return (
    <div className='p-1 sm:p-2 lg:p-3.5 rounded-md shadow-md bg-white'>
      <h3 className={Stylus.fontSize.hFS}>{title}</h3>
      <span className={Stylus.fontSize.labelFS}>{num}</span>
      <p className={Stylus.fontSize.pFS}>{desc}</p>
      <button
        className={`${Stylus.utility.button} bg-indigo-500 text-white hover:bg-indigo-600`}>
        Action
      </button>
    </div>
  )
}
