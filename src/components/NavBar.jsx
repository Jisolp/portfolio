import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-transparent w-full flex py-6 justify-between items-center navbar">
      <ul className="bg-transparent list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[17px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black font-semibold hover:text-yellow-100 mr-10`}>
            {nav.link ? (
              <a href={nav.link} target="_blank" rel="noopener noreferrer">
                {nav.title}
              </a>
            ) : (
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            )}
          </li>
        ))}
      </ul>
      
      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[80px] h-[47px] object-contain" onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-third absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`mr-10 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-black hover:text-yellow-100`}>
                {nav.link ? (
                  <a href={nav.link} target="_blank" rel="noopener noreferrer">
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
