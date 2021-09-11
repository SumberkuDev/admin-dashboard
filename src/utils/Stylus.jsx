import React, { createContext } from 'react'

export const Stylus = createContext()

export default function StylusProvider() {
  const stylus = {
    flex: {
      flexItemsCenter: 'flex items-center',
      flextColCenter: 'flex flex-col items-center',
    },
    grid: {
      gridCenter: 'grid place-items-center',
    },
    fontSize: {
      pFS: 'text-sm md:text-base font-normal md:font-medium text-gray-700',
      hFS: 'text-lg md:text-xl font-semibold md:font-bold text-gray-800',
      labelFS: 'text-xs md:text-sm font-light',
    },
    spacing: {
      paddingX: 'px-2 sm:px-3.5 md:px-6',
      paddingY: 'py-1.5 sm:py-2.5 md:py-4',
    },
    utility: {
      button:
        'inline-block py-1.5 sm:py-2 md:py-2.5 px-2.5 md:px-5 rounded-md text-xs sm:text-sm lg:text-base',
    },
    etc: {
      shadowRound: 'shadow-md rounded-md',
    },
  }

  // sebagai tambahan, fungsi ini akan dijadikan sebuah 'state' dimana fungsi ini akan memberikan sebuah object 'stylus' diatas yang nantinya akan diguanakan oleh semua komponen dalam styling, rencananya seperti itu kurang lebih, karena saat ini saya lagi cari cara yang efektif agar mempermudah pembacaan kode, karena disini megggunakan tailwindcss
  // fungsi ini hanya untuk menyimpan style
  return (
    <Stylus.Provider value={{ stylus }}>{chidlren}</Stylus.Provider>
  )
}
