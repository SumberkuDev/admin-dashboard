import React, { useContext } from 'react'
import image from '../img/profile.jpg'
import { Theme } from '../utils/Theme'
import Stylus from '../utils/Stylus'
import styles from '../Styles/styles'

export default function Header() {
  console.log(styles)
  const {
    handleNotifbar,
    notifbar,
    profileMenu,
    handleProfileMenu,
    dummyText,
    header,
    bellBtn,
    profileBtn,
  } = useContext(Theme)

  const {
    flex: { flexItemsCenter, flextCol },
    grid: { gridCenter },
    etc: { shdwRnd, stateBtn },
    spacing: { paddingX },
    wh: { btnWH, fullWH },
    utility: { searchbarInput },
  } = Stylus

  return (
    <header
      ref={header}
      className={`${flexItemsCenter} ${paddingX} justify-between fixed top-0 w-full h-12 sm:h-14 md:h-16 lg:pl-16 lg:pr-4 bg-white z-40 shadow-lg`}>
      <div className='relative hidden md:flex items-center h-8 sm:h-9 md:h-10 w-full md:w-4/5 lg:w-3/4 rounded-md focus-within:shadow-md bg-gray-100 focus-within:bg-white'>
        <div className={`${gridCenter} w-12 h-full text-gray-500`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 lg:h-5 w-4 lg:w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>

        <input
          className={searchbarInput}
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
          ref={bellBtn}
          onClick={handleNotifbar}
          className={`relative ${gridCenter} ${btnWH} ${shdwRnd} ${stateBtn}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 lg:w-5 lg:h-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
            />
          </svg>
          {dummyText.length ? (
            <div className='absolute top-3 right-3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-500 rounded-full'></div>
          ) : null}
        </button>

        <div
          ref={notifbar}
          className='absolute top-12 sm:top-14 md:top-16 w-full lg:w-3/5 h-0 shadow-md rounded-md overflow-hidden bg-white'>
          <div className='w-full h-12 lg:h-14 flex items-center filter drop-shadow-sm bg-white'>
            <h5 className='text-base sm:text-lg md:text-xl pl-2 md:pl-4 pt-2 font-semibold text-gray-700'>
              Notifications
            </h5>
          </div>
          <ul className='relative w-full py-1 max-h-56 md:max-h-64 lg:max-h-80 overflow-y-scroll'>
            {dummyText.length ? (
              dummyText.map((text, i) => (
                <li
                  className='w-full py-1 sm:py-2 border px-2 md:px-4 text-xs sm:text-sm'
                  key={i}>
                  {text}
                </li>
              ))
            ) : (
              <li className='w-h-full grid place-items-center py-1 sm:py-2 px-2 md:px-4 text-xs sm:text-sm'>
                You're All set!
              </li>
            )}
          </ul>
        </div>
        <button
          ref={profileBtn}
          onClick={handleProfileMenu}
          className={`${gridCenter} ${btnWH} ${shdwRnd} ${stateBtn}`}>
          <img className='w-6' src={image} alt='profileImage' />
        </button>

        <div
          ref={profileMenu}
          className='absolute top-12 sm:top-14 md:top-16 w-full sm:w-5/12 md:w-1/2 lg:w-1/3 h-42 lg:h-48 transform scale-0 -translate-y-1/2 shadow-md rounded-md overflow-hidden bg-white'>
          <nav
            className={`${fullWH} ${flextCol} items-stretch justify-between`}>
            <a
              href='#'
              className={`${fullWH} ${flexItemsCenter} space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 lg:h-5 w-4 lg:w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>profile</span>
            </a>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 lg:h-5 w-4 lg:w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <span>setting</span>
            </a>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 lg:h-5 w-4 lg:w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
              <span>help</span>
            </a>
            <a
              href='#'
              className='w-full h-full flex items-center space-x-2 px-2 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 lg:h-5 w-4 lg:w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
              <span>logout</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
