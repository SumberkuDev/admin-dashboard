import React, { useContext } from 'react'
import { Theme } from '../utils/Theme'

export default function Sidebar() {
  const { sidebar } = useContext(Theme)
  return (
    <>
      <aside
        ref={sidebar}
        className='fixed left-0 top-0 w-10/12 xs:w-9/12 sm:w-8/12 md:w-72 h-screen transform -translate-x-full lg:transform-none bg-gray-900 z-50'></aside>
    </>
  )
}
