const styles = {
  // common styles used
  p: {
    rel: 'relative',
    abs: 'asbolute',
    fxd: 'fixed',
  },
  d: {
    flexRowCnt: 'flex-row items-center',
    flexRowStr: 'flex-row items-stretch',
    flexColCnt: 'flex-col items-center',
    flexColStr: 'flex-col items-stretch',
    grid: 'grid place-items-center',
  },
  fs: {
    heading:
      'text-base xs:text-lg sm:text-lg lg:text-xl 2xl:text-3xl font-semibold text-gray-800',
    paragraph:
      'text-sm sm:text-base 2xl:text-lg font-normal text-gray-700',
  },
  stateHvr: {
    ctaHvr: 'transform hover:-transform-translate-y-0.5',
    utilHvr: 'hover:shadow-md',
  },
  stateFcs: {
    utilHvr:
      'outline-none focus:ring-2 ring-indigo-400 bg-white text-gray-700',
  },
}

export default styles
