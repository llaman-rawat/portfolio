import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Developer
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Hi, I'm Aman, a passionate Frontend Developer who enjoys
              building modern and responsive web applications using
              React, JavaScript, HTML, CSS, and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a fresher, I continuously improve my development
              skills by building real-world projects like Quiz Apps,
              Todo Apps, and interactive web interfaces.
            </p>

            {/* Button */}
           <a href="/resume.pdf"download  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition">
           Download Resume
          </a>
          </div>

          {/* Right Skills */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
              <h4 className="text-xl font-semibold">HTML</h4>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
              <h4 className="text-xl font-semibold">CSS</h4>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
              <h4 className="text-xl font-semibold">JavaScript</h4>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
              <h4 className="text-xl font-semibold">React</h4>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
              <h4 className="text-xl font-semibold">Tailwind</h4>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-center hover:scale-105 transition">
              <h4 className="text-xl font-semibold">Git</h4>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}