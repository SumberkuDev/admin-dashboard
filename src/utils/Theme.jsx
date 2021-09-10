import React, { createContext, useEffect, useRef } from 'react'

export const Theme = createContext()

export default function ThemeProvider(props) {
  let hamburger = useRef()
  let navbar = useRef()
  let aside = useRef()
  let bell = useRef()
  let asideBtn = useRef()
  let notifbar = useRef()
  let profileMenu = useRef()
  let asideExpander = useRef()
  let expandText = useRef()
  let header = useRef()

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
      aside.current.classList.toggle('md:hover:w-60')
      asideExpander.current.classList.toggle('rotate-180')
      header.current.classList.toggle('lg:pl-64')
      header.current.classList.toggle('lg:pl-4')

      setTimeout(() => {
        aside.current.classList.toggle('md:hover:w-60')
        checkExpandText()
      }, 1500)
    } else {
      aside.current.classList.toggle('lg:w-60')
      asideExpander.current.classList.toggle('rotate-180')
      header.current.classList.toggle('lg:pl-64')
      header.current.classList.toggle('lg:pl-4')
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
    } else {
      notifbar.current.classList.toggle('h-0')
      notifbar.current.classList.toggle('h-72')
      notifbar.current.classList.toggle('md:h-80')
      notifbar.current.classList.toggle('lg:h-96')
    }
  }

  function handleProfileMenu() {
    if (notifbar.current.classList.contains('h-72')) {
      handleNotifbar()
      profileMenu.current.classList.toggle('scale-0')
      profileMenu.current.classList.toggle('scale-100')
      profileMenu.current.classList.toggle('-translate-y-1/2')
      profileMenu.current.classList.toggle('-translate-y-0')
    } else {
      profileMenu.current.classList.toggle('scale-0')
      profileMenu.current.classList.toggle('scale-100')
      profileMenu.current.classList.toggle('-translate-y-1/2')
      profileMenu.current.classList.toggle('-translate-y-0')
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
      icon: 'bx-home-alt',
      text: 'Home',
    },
    {
      icon: 'bx-user',
      text: 'User',
    },
    {
      icon: 'bx-rocket',
      text: 'Statistic',
    },
    {
      icon: 'bx-cog',
      text: 'Setting',
    },
    {
      icon: 'bxs-file-pdf',
      text: 'Print Report',
    },
    {
      icon: 'bx-info-circle',
      text: 'Information',
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
        bell,
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
      }}>
      {props.children}
    </Theme.Provider>
  )
}
