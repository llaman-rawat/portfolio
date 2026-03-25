import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-16">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Frontend Developer
          </h3>

          <p className="text-gray-400 mb-4">
            I'm Aman, passionate about building modern web applications using React and Tailwind CSS.
          </p>

          <p className="text-gray-400 mb-6">
            I love creating responsive UI and improving my skills through real-world projects.
          </p>

          <a href="/resume.pdf" download className="bg-white text-black px-6 py-2 rounded-xl">
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {["HTML","CSS","JavaScript","React","Tailwind","Git"].map(skill => (
            <div key={skill} className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}