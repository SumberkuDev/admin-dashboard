import React, { useContext } from 'react'
import { Theme } from '../utils/Theme'

export default function SidebarBtn() {
  const { asideHandler, handleAside, hamburger } = useContext(Theme)
  return (
    <button
      onClick={handleAside}
      ref={asideHandler}
      className='grid lg:hidden place-items-center fixed right-5 md:right-8 bottom-5 md:bottom-8 w-8 xs:w-10 h-8 xs:h-10 rounded-xl text-white bg-gray-800'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 xs:w-6 xs:h-6'
        viewBox='0 0 20 20'
        fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  )
}
