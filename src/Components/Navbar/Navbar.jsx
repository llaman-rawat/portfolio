import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from "@remixicon/react"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#171d32] text-white flex justify-between items-center px-10 py-4">

      <span className='text-xl font-bold tracking-wide'>portfolio</span>

      <ul className={`${menu ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 
      md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

        <li><a href='#about'>about</a></li>
        <li> <a href='#projects'>projects</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#contact'>contact</a></li>

      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className='md:hidden absolute right-10 top-6'
          onClick={() => {
            setMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className='md:hidden absolute right-10 top-6'
          onClick={() => {
            setMenu (!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  )
}

export default Navbar