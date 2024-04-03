import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import Clock from '../Clock/Clock';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <div className='flex justify-between items-center px-5 py-5 sticky top-0 bg-primary text-secondary text-3xl z-10'>
        <div>
            <h1 className='sriracha md:text-4xl'>MADURAI ZOOTOPIA</h1>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-5 p-2 '>
                <li className="hover:border-b-2  duration-100" id='linkTags'><NavLink to='/'>HOME</NavLink></li>
                <li className="hover:border-b-2  duration-100" id='linkTags'><NavLink  to='about'>ABOUT</NavLink></li>
                <li className="hover:border-b-2 duration-100" id='linkTags'><NavLink to='animals'>ANIMALS</NavLink></li>
                <li className="hover:border-b-2 duration-100" id='linkTags'><NavLink to='contact'>CONTACT</NavLink></li>
            </ul>
        </div>
        {toggleMenu && (
          <nav className="block md:hidden sticky top-0">
          <ul className="fixed top-[70px] left-0 bg-primary w-full h-1/5 flex flex-col text-secondary text-2xl ">
            <li className=" text-center border-b-2" >
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className=" text-center border-b-2">
              <NavLink to="about">ABOUT</NavLink>
            </li>
            <li className=" text-center border-b-2" >
              <NavLink to="animals">ANIMALS</NavLink>
            </li>
            <li className=" text-center border-b-2">
              <NavLink to="contact">CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      )}
      
      <button
        className="block md:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
        >
        <IoMenu className="text-white h-8 mr-6" />
      </button>
    </div>
    <div className='bg-secondary p-1'>
      <Clock/>
    </div>
        </>
  )
}

export default Navbar