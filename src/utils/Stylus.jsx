import React, { createContext } from 'react'

export const Stylus = createContext()

export default function StylusProvider() {
  const stylus = {
    fontSize: {
      pFS: 'text-sm md:text-base font-normal md:font-medium text-gray-700 dark:text-gray-200',
      hFS: 'text-lg md:text-xl font-semibold md:font-bold text-gray-800 dark:text-gray-100',
      labelFS: 'text-xs md:text-sm font-light',
    },
    spacing: {
      paddingX: 'px-2 sm:px-3.5 md:px-6',
      paddingY: 'py-1.5 sm:py-2.5 md:py-4',
    },
  }

  // sebagai tambahan, fungsi ini akan dijadikan sebuah 'state' dimana fungsi ini akan memberikan sebuah object 'stylus' diatas yang nantinya akan diguanakan oleh semua komponen dalam styling, rencananya seperti itu kurang lebih, karena saat ini saya lagi cari cara yang efektif agar mempermudah pembacaan kode, karena disini megggunakan tailwindcss
  // fungsi ini hanya untuk menyimpan style
  return (
    <Stylus.Provider value={{ stylus }}>{chidlren}</Stylus.Provider>
  )
}
