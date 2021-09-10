import React, { useContext } from 'react'
import { Theme } from '../utils/Theme'

export default function SidebarBtn() {
  const { asideHandler, handleAside, hamburger } = useContext(Theme)
  return (
    <button
      onClick={handleAside}
      ref={asideHandler}
      className='grid lg:hidden place-items-center fixed right-3 md:right-4 bottom-3 md:bottom-4 w-8 sm:w-10 h-8 sm:h-10 text-lg sm:text-xl rounded-xl text-white bg-gray-800'>
      <i className='bx bx-menu' ref={hamburger}></i>
    </button>
  )
}
