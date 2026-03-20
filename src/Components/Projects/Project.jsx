import {useState} from 'react'
// src/Components/Projects/Project.jsx 
const Project = () => {
  const projects = [
    { 
      title: "Todo App",
      description:
        "A task management app built using React and Tailwind CSS.",
      github: "https://github.com/llaman-rawat/Todo-App",
         live: "https://todoapp-nu-red.vercel.app/",
       
    },
    { 
        
      title: "Quize App", 
      description:
        "Responsive landing page with modern UI design.",
      github: "#",
       live: "https://appquize.vercel.app/",
   
    },
    {
      title: "landing",
      description:
        "Personal portfolio built with React and Tailwind.",
      live: "https://landing-one-sable-27.vercel.app",
    },
    
  ]

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-[#0f172a] text-white pt-24 px-6"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:scale-105 duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 px-4 py-2 rounded-xl"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project