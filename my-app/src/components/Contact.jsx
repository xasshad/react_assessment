import React from 'react'
import Typed from 'react-typed'

const Contact = () => {
  return (
    <div className="'w-full bg-white py-16 px-4 space-y-5">

      <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-center">
        Got a question?  
        <span>
        <Typed 
          className="text-[#00df9a]"
          strings={[ " Let's chat."]} 
          typeSpeed={140} 
          backSpeed={160}
          loop
        />
        </span>
      </h2>
      <form class="max-w-[1240px] mx-auto grid md:grid-cols-1">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" >
                    First Name
                  </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>

                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    E-mail
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Message
                  </label>
                  <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                </div>
              </div>

              <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                  <button class="shadow bg-[#00df9a] hover:bg-[#00a370] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Send
                  </button>
                </div>

          <div class="md:w-2/3"></div>

        </div>
      </form>
    </div>
  )
}

export default Contact