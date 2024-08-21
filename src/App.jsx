
import NavBar from './components/nav/NavBar';

function App() {

  return (
    <div className=''>
      {/* nav */}
      <NavBar />

      {/* hero */}
      <div className='bg-hero background'>
        <div className='h-screen w-screen bg-gradient-to-b from-black/90 via-white/0 to-black/90 flex flex-col justify-center items-center'>
          <section className='h-2/5 flex flex-col justify-end items-center'>
            <h3 className='2xl:text-4xl md:text-3xl sm:text-2xl 2xl:font-bold leading-none tracking-widest text-red-600 bg-clip-text drop-shadow-sm-red subpixel-antialiased' >
              2K24
            </h3>
            <h1 className='sm:text-7xl sm:mb-10 md:text-8xl md:mb-8 lg:text-9xl lg:mb-6 xl:text-[11rem] 2xl:text-[13rem] leading-none tracking-normal sm:tracking-wider text-white drop-shadow-lg'>
              NUTPAM
            </h1>
          </section>
          <section className='h-2/5 pt-12 sm:pt-0 sm:pb-5  flex flex-row gap-28 md:gap-20 sm:gap-8 justify-center items-center'>
            <span className='text-4xl sm:text-2xl tracking-widest text-white bg-clip-text whitespace-break-spaces flex flex-col gap-10 sm:gap-5'>
              <p>技</p>
              <p>術</p>
            </span>
            <button type="button" className="text-lg md:text-base sm:text-sm font-medium rounded-lg sm:rounded-md px-5 md:px-4 sm:px-3 py-2.5 md:py-2 sm:py-1.5 text-center me-2 mb-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 ">
              REGISTER
            </button>
            <span className='text-2xl sm:text-lg tracking-widest text-white bg-clip-text whitespace-break-spaces flex flex-col gap-0 '>
              <p>二</p>
              <p>千</p>
              <p>二</p>
              <p>十</p>
              <p>四</p>
            </span>
          </section>

          <section className='h-1/5 bg-black w-screen' ></section>

        </div>
      </div>

      {/* footer */}

    </div>
  )
}

export default App