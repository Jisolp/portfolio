import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate(); 

  const scrollToSection = (id) => {
    navigate("/"); 
    setTimeout(() => { 
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 0);
  };

  return (
    <nav className="bg-transparent w-full flex py-6 justify-between items-center navbar">
      <ul className="bg-transparent list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id} 
            className={`font-poppins font-normal text-[17px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black hover:opacity-30 cursor-pointer mr-10`}
          >
            {nav.link ? (
              <a href={nav.link} target="_blank" rel="noopener noreferrer">
                {nav.title}
              </a>
            ) : (
              <button onClick={() => scrollToSection(nav.id)}> 
                {nav.title}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[80px] h-[47px] object-contain" 
          onClick={() => setToggle((prev) => !prev)} 
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-third absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`mr-10 font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-black hover:opacity-30 cursor-pointer`}
              >
                {nav.link ? (
                  <a href={nav.link} target="_blank" rel="noopener noreferrer">
                    {nav.title}
                  </a>
                ) : (
                  <button onClick={() => scrollToSection(nav.id)}> {/* Call the scroll function */}
                    {nav.title}
                  </button>
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
