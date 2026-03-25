import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white flex justify-between items-center px-8 py-4 border-b border-gray-800">
      
      <h1 className="text-2xl font-bold">Aman.dev</h1>

      <ul className={`md:flex gap-8 font-medium ${menu ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent text-center md:text-left py-6 md:py-0`}>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>

      <div className="md:hidden">
        {menu ? (
          <RiCloseLine size={28} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu2Line size={28} onClick={() => setMenu(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;