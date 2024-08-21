import React from 'react'

import logo from './assets/svg/logo.svg';

function App() {
  return (
    <div className=''>
      {/* nav */}
      <div className='absolute top-0  flex justify-between items-center'>
        <img src={logo} alt="NUTPAM" className='relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80' />


      </div>
      {/* hero */}
      <div className='bg-hero background'>
        <div className='h-screen w-screen bg-gradient-to-b from-black/90 via-white/0 to-black/90  flex flex-col justify-evenly items-center'>
          <h3 className='mt-16 md:mt-6 text-2xl md:text-4xl sm:text-3xl tracking-widest text-red-600 bg-clip-text drop-shadow-md' >
            2K24
          </h3>
          <h1 className='text-7xl md:text-9xl sm:text-8xl tracking-normal sm:tracking-wider text-white  bg-clip-text drop-shadow-lg'>
            NUTPAM
          </h1>
          <section className='h-4/6 mt-10 flex flex-row justify-evenly items-center'>
            <h3 className='text-2xl md:text-4xl sm:text-3xl tracking-widest text-white bg-clip-text drop-shadow-md whitespace-break-spaces'> H 
              L         </h3>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Red to Yellow</button>
            <h3 className='text-2xl md:text-4xl sm:text-3xl tracking-widest text-white bg-clip-text drop-shadow-md'></h3>
          </section>

        </div>
      </div>

      {/* footer */}

    </div>
  )
}

export default App