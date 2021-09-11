import React, { createContext, useEffect, useRef } from 'react'

export const Theme = createContext()

export default function ThemeProvider(props) {
  let hamburger = useRef()
  let navbar = useRef()
  let aside = useRef()
  let bellBtn = useRef()
  let profileBtn = useRef()
  let asideBtn = useRef()
  let notifbar = useRef()
  let profileMenu = useRef()
  let asideExpander = useRef()
  let expandText = useRef()
  let header = useRef()
  let mainLayout = useRef()

  function handleAside() {
    if (
      notifbar.current.classList.contains('h-72') ||
      profileMenu.current.classList.contains('scale-100')
    ) {
      controlHead()
      aside.current.classList.toggle('-translate-x-full')
      aside.current.classList.toggle('translate-x-0')
      hamburger.current.classList.toggle('bx-menu')
      hamburger.current.classList.toggle('bx-x')
    } else {
      aside.current.classList.toggle('-translate-x-full')
      aside.current.classList.toggle('translate-x-0')
      hamburger.current.classList.toggle('bx-menu')
      hamburger.current.classList.toggle('bx-x')
    }
  }

  function handleAsideExpander() {
    if (expandText.current.innerText === 'Minimize') {
      aside.current.classList.toggle('lg:w-60')
      aside.current.classList.toggle('lg:w-12')
      aside.current.classList.toggle('lg:hover:w-60')
      asideExpander.current.classList.toggle('rotate-180')
      header.current.classList.toggle('lg:pl-64')
      header.current.classList.toggle('lg:pl-16')
      mainLayout.current.classList.toggle('lg:pl-64')
      mainLayout.current.classList.toggle('lg:pl-16')
      setTimeout(() => {
        aside.current.classList.toggle('lg:hover:w-60')
        checkExpandText()
      }, 500)
    } else {
      aside.current.classList.toggle('lg:w-60')
      aside.current.classList.toggle('lg:w-12')
      asideExpander.current.classList.toggle('rotate-180')
      header.current.classList.toggle('lg:pl-64')
      header.current.classList.toggle('lg:pl-16')
      mainLayout.current.classList.toggle('lg:pl-64')
      mainLayout.current.classList.toggle('lg:pl-16')
      checkExpandText()
    }
  }

  function controlHead() {
    if (profileMenu.current.classList.contains('scale-100')) {
      handleProfileMenu()
    }
    if (notifbar.current.classList.contains('h-72')) {
      handleNotifbar()
    }
  }

  function handleNotifbar() {
    if (profileMenu.current.classList.contains('scale-100')) {
      handleProfileMenu()
      notifbar.current.classList.toggle('h-0')
      notifbar.current.classList.toggle('h-72')
      notifbar.current.classList.toggle('md:h-80')
      notifbar.current.classList.toggle('lg:h-96')
      bellBtn.current.classList.toggle('ring-2')
    } else {
      notifbar.current.classList.toggle('h-0')
      notifbar.current.classList.toggle('h-72')
      notifbar.current.classList.toggle('md:h-80')
      notifbar.current.classList.toggle('lg:h-96')
      bellBtn.current.classList.toggle('ring-2')
    }
  }

  function handleProfileMenu() {
    if (notifbar.current.classList.contains('h-72')) {
      handleNotifbar()
      profileMenu.current.classList.toggle('scale-0')
      profileMenu.current.classList.toggle('scale-100')
      profileMenu.current.classList.toggle('-translate-y-1/2')
      profileMenu.current.classList.toggle('-translate-y-0')
      profileBtn.current.classList.toggle('ring-2')
    } else {
      profileMenu.current.classList.toggle('scale-0')
      profileMenu.current.classList.toggle('scale-100')
      profileMenu.current.classList.toggle('-translate-y-1/2')
      profileMenu.current.classList.toggle('-translate-y-0')
      profileBtn.current.classList.toggle('ring-2')
    }
  }

  function checkExpandText() {
    aside.current.classList.contains('lg:w-60')
      ? (expandText.current.innerText = 'Minimize')
      : (expandText.current.innerText = 'Expand')
  }
  //
  useEffect(() => {
    checkExpandText()
  }, [])
  //

  //

  // dummy menu and text or placeholder
  let dummyText = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque error dolorum reprehenderit. Numquam laudantium quidem perspiciatis earum rerum nam debitis. Incidunt, non?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur laborum ducimus ea ex rem sed quia aliquam?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur laborum ducimus ea ex rem sed quia aliquam?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur laborum ducimus ea ex rem sed quia aliquam?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur laborum ducimus ea ex rem sed quia aliquam?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam et natus sint soluta animi, inventore, nulla, quam alias saepe nihil optio aut. Magni blanditiis aliquid dignissimos officia sequi labore nihil autem sint?',
  ]
  let dummyMenu = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 lg:w-5 lg:h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
      text: 'Home',
      hyperLink: '/',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 lg:w-5 lg:h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      text: 'User',
      hyperLink: '/user',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 lg:w-5 lg:h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
      ),
      text: 'Statistic',
      hyperLink: '/statistic',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 lg:w-5 lg:h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
      text: 'Print Report',
      hyperLink: '/report',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4 lg:w-5 lg:h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      text: 'Information',
      hyperLink: '/informatiion',
    },
  ]

  //
  return (
    <Theme.Provider
      value={{
        dummyText,
        hamburger,
        navbar,
        aside,
        bellBtn,
        profileBtn,
        asideBtn,
        handleAside,
        notifbar,
        handleNotifbar,
        profileMenu,
        expandText,
        handleProfileMenu,
        asideExpander,
        handleAsideExpander,
        header,
        dummyMenu,
        mainLayout,
      }}>
      {props.children}
    </Theme.Provider>
  )
}
