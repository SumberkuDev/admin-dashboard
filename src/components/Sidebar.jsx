import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
        className='group fixed left-0 top-0 w-9/12 xs:w-9/12 sm:w-2/5 lg:w-12 lg:hover:w-60 h-screen transform -translate-x-full lg:transform-none overflow-x-hidden bg-gray-900 z-50'>
        <nav className='relative flex flex-col justify-between w-full h-full'>
          <ul className='w-full flex flex-col items-stretch pt-12 max-h-96 overflow-y-hidden overflow-x-hidden'>
            {dummyMenu.map((menu, i) => (
              <li key={i}>
                <NavLink
                  exact
                  activeClassName='active'
                  to={menu.hyperLink}
                  className='navLink'>
                  <span className='grid place-items-center w-10 h-10 md:w-12 md:h-12 absolute left-0'>
                    {menu.icon}
                  </span>
                  <span className='ml-12 md:ml-14 font-medium'>
                    {menu.text}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='hidden lg:block mt-auto'>
            <button
              onClick={handleAsideExpander}
              className='relative flex items-center w-full h-12 text-gray-200 hover:bg-gray-800'>
              <span className='grid place-items-center w-12 h-12 absolute left-0'>
                <svg
                  ref={asideExpander}
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 5l7 7-7 7M5 5l7 7-7 7'
                  />
                </svg>
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
