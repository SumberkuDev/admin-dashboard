import React from 'react'

export default function CardLayout({ children }) {
  return (
    <section className='flex items-stretch space-x-2 justify-center'>
      {children}
    </section>
  )
}
