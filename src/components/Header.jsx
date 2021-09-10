import React, { useContext } from 'react'
import image from '../img/profile.jpg'
import { Theme } from '../utils/Theme'

export default function Header() {
  const {
    handleNotifbar,
    notifbar,
    profileMenu,
    handleProfileMenu,
    dummyText,
    header,
  } = useContext(Theme)

  return (
    <header
      ref={header}
      className='flex items-center justify-between fixed top-0 w-full h-12 sm:h-14 md:h-16 px-2 sm:px-4 md:px-6 lg:pl-16 lg:pr-4 bg-white z-40'>
      <div className='relative hidden md:flex items-center h-8 sm:h-9 md:h-10 w-full md:w-4/5 lg:w-3/4 rounded-md focus-within:shadow-md bg-gray-100 focus-within:bg-white'>
        <div className='grid place-items-center w-12 h-full text-gray-500'>
          <i className='bx bx-search'></i>
        </div>

        <input
          className='peer w-full h-full flex items-center text-sm outline-none bg-transparent placeholder-transparent text-gray-700'
          type='text'
          id='searchbar'
          placeholder='search something...'
        />
        <label
          className='absolute left-12 opacity-0 transform translate-x-5 cursor-text transition-all duration-200 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:opacity-100 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400'
          htmlFor='searchbar'>
          search something..
        </label>
      </div>
      <div className='relative flex items-center justify-end w-full h-full space-x-2'>
        <button
          onClick={handleNotifbar}
          className='grid place-items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md outline-none focus:ring-2 focus:ring-indigo-400 text-base md:text-lg lg:text-xl text-gray-700 hover:shadow-md'>
          <i className='bx bx-bell'></i>
        </button>

        <div
          ref={notifbar}
          className='absolute top-12 sm:top-14 md:top-16 w-full lg:w-3/5 h-0 shadow-md rounded-md overflow-hidden bg-white'>
          <div className='w-full h-12 lg:h-14 flex items-center filter drop-shadow-sm bg-white'>
            <h5 className='text-base sm:text-lg md:text-xl pl-2 md:pl-4 pt-2 font-semibold text-gray-700'>
              Notifications
            </h5>
          </div>
          <ul className='w-full py-1 h-56 md:h-64 lg:h-80 overflow-y-scroll'>
            {dummyText.map((text, i) => (
              <li
                className='w-full py-2 border px-2 md:px-4 text-xs sm:text-sm lg:text-base'
                key={i}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleProfileMenu}
          className='grid place-items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md outline-none focus:ring-2 focus:ring-indigo-400 hover:shadow-md bg-white'>
          <img className='w-6' src={image} alt='profileImage' />
        </button>

        <div
          ref={profileMenu}
          className='absolute top-12 sm:top-14 md:top-16 w-full sm:w-5/12 md:w-1/2 lg:w-1/3 h-42 lg:h-48 transform scale-0 -translate-y-1/2 shadow-md rounded-md overflow-hidden bg-white'>
          <nav className='w-full h-full flex flex-col items-stretch justify-between'>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-gray-100'>
              <i className='bx bx-user'></i>
              <span>profile</span>
            </a>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-gray-100'>
              <i className='bx bx-cog'></i>
              <span>setting</span>
            </a>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-gray-100'>
              <i className='bx bx-support'></i>
              <span>help</span>
            </a>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium hover:bg-gray-100'>
              <i className='bx bx-log-out-circle'></i>
              <span>logout</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
