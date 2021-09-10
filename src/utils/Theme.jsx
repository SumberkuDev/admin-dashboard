import React, { createContext, useRef } from 'react'

export const Theme = createContext()

export default function ThemeProvider(props) {
  let hamburger = useRef()
  let navbar = useRef()
  let sidebar = useRef()
  let bell = useRef()
  let asideBtn = useRef()
  let notifbar = useRef()
  let profileMenu = useRef()

  function handleAside() {
    sidebar.current.classList.toggle('-translate-x-full')
    sidebar.current.classList.toggle('translate-x-0')
    hamburger.current.classList.toggle('bx-menu')
    hamburger.current.classList.toggle('bx-x')
  }

  function handleNotifbar() {
    if (profileMenu.current.classList.contains('h-52')) {
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
      profileMenu.current.classList.toggle('h-52')
      profileMenu.current.classList.toggle('h-0')
    } else {
      profileMenu.current.classList.toggle('h-52')
      profileMenu.current.classList.toggle('h-0')
    }
  }
  return (
    <Theme.Provider
      value={{
        hamburger,
        navbar,
        sidebar,
        bell,
        asideBtn,
        handleAside,
        notifbar,
        handleNotifbar,
        profileMenu,
        handleProfileMenu,
      }}>
      {props.children}
    </Theme.Provider>
  )
}
