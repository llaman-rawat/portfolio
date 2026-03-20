import React from 'react'

const Experience = () => {
  return (
    <div>
        
    <section id="experience" className="w-full  bg-[#171d32] text-white px-6 md:px-20 py-10">
      
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center py-5">
        Experience
      </h2>

      <div className="space-y-10">

        <div className="bg-[#1f2544] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl md:text-2xl font-semibold">
            Frontend Developer 
          </h3>
       
          
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-200">
         
      <li>Learning React, JavaScript, HTML, CSS and Tailwind</li>  
      <li> Building projects like Quiz App, Todo App and Login Form</li> 
      <li> Deploying projects using GitHub and Vercel</li>
      <li>Practicing responsive web design</li>
          </ul>
        </div>
      </div>
    </section>
        {/* </section> */}



    </div>
  )
}

export default Experience
