import React, { useContext } from 'react'
import { Theme } from '../utils/Theme'

export default function Sidebar() {
  const {
    aside,
    asideExpander,
    handleAsideExpander,
    expandText,
    dummyMenu,
  } = useContext(Theme)

  return (
    <>
      <aside
        ref={aside}
        className='group fixed left-0 top-0 w-10/12 xs:w-9/12 sm:w-2/5 lg:w-12 lg:hover:w-60 h-screen transform -translate-x-full lg:transform-none overflow-x-hidden bg-gray-900 z-50'>
        <nav className='relative flex flex-col justify-between w-full h-full'>
          <ul className='w-full flex flex-col items-stretch pt-12 max-h-96 overflow-y-hidden overflow-x-hidden'>
            {dummyMenu.map((menu, i) => (
              <li key={i}>
                <a
                  href='#'
                  className='relative flex items-center w-full text-sm md:text-base h-12 whitespace-nowrap text-gray-200 hover:bg-gray-800'>
                  <span className='grid place-items-center w-10 h-10 md:w-12 md:h-12 absolute left-0'>
                    <i className={`bx ${menu.icon}`}></i>
                  </span>
                  <span className='ml-12 md:ml-14 font-medium text-base'>
                    {menu.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden lg:block mt-auto'>
            <button
              onClick={handleAsideExpander}
              className='relative flex items-center w-full h-12 text-gray-200 hover:bg-gray-800'>
              <span className='grid place-items-center w-12 h-12 absolute left-0'>
                <i
                  ref={asideExpander}
                  className='bx bx-chevrons-right transform group-hover:rotate-180'></i>
              </span>
              <span
                className='ml-14 font-medium text-base'
                ref={expandText}></span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  )
}
