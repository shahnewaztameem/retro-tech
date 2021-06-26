import React from 'react'

const Hero = () => {
  return (
    <section class='text-gray-400 bg-gray-900 body-font'>
      <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            VINTCLUB
            <br class='hidden lg:inline-block' />
            readymade gluten
          </h1>
          <p class='mb-8 leading-relaxed'>
            Fusce dictum efficitur est eget viverra. Mauris euismod urna sed
            augue rhoncus, id laoreet vehicula. Nul lam interdum ex lorem. Morbi
            libero velit, consectetur sed est vitae, consequat aliquet magna.
            Mauris a justo. Phasellus rhoncus elit imperdiet.
          </p>
          <div class='flex justify-center'>
            <button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Learn More
            </button>
            <button class='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
              Join Us
            </button>
          </div>
        </div>
        <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            class='object-cover object-center rounded'
            alt='hero'
            src='https://images.unsplash.com/photo-1484396196377-1ca16c878cb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
