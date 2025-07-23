import React from 'react'
import images from "../assets/images.png"
import coding from "../assets/React.jpg"
import msoffice from "../assets/Ms office.jpg"
function About() {
  return (
    <div>
      <section class="text-gray-600 body-font bg-gradient-to-r from-cyan-800 via-blue-900 to-indigo-900">
        <h1 className='flex justify-center text-center pt-10 text-3xl font-bold text-white'>
          MY SKILLS
        </h1>
        <div class="container px-5 py-10 mx-auto ">
          <div class="rounded-3xl bg-gray-300 px-4 py-4 flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
             <img src={coding} alt="coding" className='coding w-40 h-32 rounded-full object-cover mx-auto mt-0 shadow-lg' />
            </div>
            <div class="flex-grow sm:text-left text m-centert-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font mb-2 font-bold">FrontEnd Developer</h2>
              <p class="leading-relaxed text-base">
                Passionate Frontend Developer focused on building responsive, user-friendly,
                 and visually appealing web interfaces using modern technologies.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              </a>
            </div>
          </div>
      
          
          <div class="bg-gray-800 p-4 rounded-3xl text-white flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-amber-500 text-xl title-font mb-2 font-bold">Ms Office</h2>
              <p class="leading-relaxed text-base">
                Efficient in using MS Word for documentation, Excel for data analysis, and PowerPoint for clear, professional presentations,
                and have 1 year experience in it.
              </p>
              <a class="mt-3 text-amber-500 inline-flex items-center">Learn More
              </a>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
             <img src={msoffice} alt="msoffice" className='ms office w-40 h-32 rounded-full object-cover mx-auto mt-0 shadow-lg' />
            </div>
          </div>
      
      
          <div class="bg-gray-300 p-4 rounded-3xl flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div class=" sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={images} alt="image" className='images w-40 h-32 rounded-full object-cover mx-auto mt-0 shadow-lg'/>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-bold mb-2">Graphic Designer</h2>
              <p class="leading-relaxed text-base">
                Experienced in logo design, social media creatives, and branding—bringing 
                visual ideas to life with precision and creativity.Turning imagination into visual reality — one design at a time.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              </a>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default About
