import React from "react";
import sit from "../../assets/sit.webp";

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24">

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-gray-400">Hi, I'm</h2>

        <h1 className="text-5xl md:text-6xl font-bold">
          Aman Rawat
        </h1>

        <h3 className="text-2xl text-gray-300">
          Frontend Developer
        </h3>

        <p className="text-gray-400">
          I build modern, responsive and user-friendly web apps using React and Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-2 rounded-xl">
            View Projects
          </a>
          <a href="#contact" className="border px-6 py-2 rounded-xl">
            Contact Me
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10">
        <img src={sit} className="w-80 rounded-xl shadow-xl" />
      </div>

    </section>
  );
};

export default Home;