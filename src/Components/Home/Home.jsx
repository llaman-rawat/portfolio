import React from "react";
import sit from "../../assets/sit.webp"

const Home = () => {
  return (
    <section id="" className="w-full min-h-screen bg-[#171d32] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-lg text-gray-400">Hi, I'm</h2>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Aman Rawat
        </h1>

        <h3 className="text-2xl md:text-3xl text-[#465697] font-semibold">
          Frontend Developer
        </h3>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
          I build responsive and modern web applications using React,
          JavaScript and Tailwind CSS. I love creating clean UI and smooth
          user experiences.
        </p>

        <div className="flex gap-4 pt-4">
          <a href="#contact" className="bg-[#465697] px-6 py-3 rounded-full font-semibold hover:scale-105 hover:opacity-90 duration-300">
            Contact Me
          </a>
        </div>
      </div>

      
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <img
          src={sit}
          alt="Aman Rawat"
          className="w-72 md:w-96 object-contain drop-shadow-2xl"
        />
      </div>

    </section>
  );
};

export default Home;
