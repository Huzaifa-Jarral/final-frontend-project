import React from 'react'
import image from "../assets/image.jpg" 
import images from "../assets/images.png"
import coding from "../assets/React.jpg"
import msoffice from "../assets/Ms office.jpg"
function Home() {
  return (
    <div>
      <section class="mt-15 bg-gradient-to-r from-gray-900 via-indigo-900 to-orange-900 text-white px-4 py-0 shadow-lg">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img src={image} alt="image" className="image w-50 h-50 rounded-full object-cover "/>
    <div class="image text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-3">Huzaifa Bin Khawar</h1>
      <p class="mb-8 leading-relaxed">
      A Frontend Developer and made many projects. Have a keen knowledge 
      about React Js, Also completed Graphics Designing, Ms Office and Window Installation.
       Work with precision, creativity, and a strong focus on delivering quality results.
      </p>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font bg-gradient-to-r from-cyan-800 via-blue-900 to-indigo-900
">
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

export default Home
