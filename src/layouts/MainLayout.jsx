import React, { useContext } from 'react'
import { Theme } from '../utils/Theme'

export default function MainLayout({ children }) {
  const { mainLayout } = useContext(Theme)
  return (
    <main
      ref={mainLayout}
      className='px-2 sm:px-3.5 md:px-4 lg:pl-16 pt-14 sm:pt-16 md:pt-20'>
      {children}
    </main>
  )
}
