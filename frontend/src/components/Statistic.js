import React from 'react'

const Statistic = () => {
  return (
    <section class='text-gray-400 bg-gray-900 body-font'>
      <div class='container px-5 py-24 mx-auto flex flex-wrap'>
        <div class='flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
          <div class='w-full sm:p-4 px-4 mb-6'>
            <h1 class='title-font font-medium text-xl mb-2 text-white'>
              Moon hashtag pop-up try-hard offal truffaut
            </h1>
            <div class='leading-relaxed'>
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div>
          </div>
          <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 class='title-font font-medium text-3xl text-white'>2.7K</h2>
            <p class='leading-relaxed'>Users</p>
          </div>
          <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 class='title-font font-medium text-3xl text-white'>1.8K</h2>
            <p class='leading-relaxed'>Subscribes</p>
          </div>
          <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 class='title-font font-medium text-3xl text-white'>35</h2>
            <p class='leading-relaxed'>Downloads</p>
          </div>
          <div class='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
            <h2 class='title-font font-medium text-3xl text-white'>4</h2>
            <p class='leading-relaxed'>Products</p>
          </div>
        </div>
        <div class='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
          <img
            class='object-cover object-center w-full h-full'
            src='https://images.unsplash.com/photo-1624673905001-d002d20c0f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
            alt='stats'
            style={{ height: '600px' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Statistic
