import React from 'react'

export default function CardLayout({ children }) {
  return (
    <section className='flex flex-col lg:flex-row items-stretch space-y-2 lg:space-y-0 lg:space-x-2 justify-center'>
      {children}
    </section>
  )
}
