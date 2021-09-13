const stylus = {
  flex: {
    flexItemsCenter: 'flex items-center',
    flextCol: 'flex flex-col',
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
    extendSidebar: 'px-2 sm:px-3.5 md:px-4 lg:pl-16',
  },
  utility: {
    button:
      'inline-block py-1.5 px-5 md:px-10 rounded-md text-xs sm:text-sm lg:text-base',
    searchbarInput:
      'peer w-full h-full flex items-center text-sm outline-none bg-transparent placeholder-transparent text-gray-700',
  },
  wh: {
    btnWH: 'w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10',
    fullWH: 'w-full h-full',
  },
  etc: {
    shdwRnd: 'rounded-md hover:shadow-md',
    stateBtn:
      'outline-none focus:ring-2 ring-indigo-400 bg-white text-gray-700',
  },
}

export default stylus
