import styles from '../style';
import { background, downarrow } from '../assets';
import NavBar from './NavBar';
import { socialMedia } from '../constants';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section id="home" className="relative w-full h-screen">
    <div className="absolute top-0 left-0 w-full z-20">
      <NavBar />
    </div>
    <img src={background} alt="background" className="w-full h-full object-cover" />

    {/* Blurb */}
    <div className={`absolute top-1/3 left-0 right-0 text-center z-30`}>
      <h1 className="font-semibold font-poppin text-[30px] xs:text-[80px] text-neutral-800 xs:leading-[140px] leading-[70.8px] w-full"> Hi, I'm Jisol! </h1>
      <p className="font-mono text-[17px] xs:text-[22px] text-black xs:leading-[30px] leading-[30px] w-full">
        I am a software engineer, and I love {" "}
        <Link to="/exploring" className="underline hover:opacity-30 cursor-pointer">exploring</Link> and {" "}
        <a href="#projects" className="underline hover:opacity-30 cursor-pointer">building</a>
      </p>

      {/* icons */}
      <div className="flex justify-center items-center mt-6 space-x-6">
        {socialMedia.map((social) => (
          <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt={social.id} className="w-8 h-8 cursor-pointer hover:opacity-30" />
          </a>
        ))}
      </div>
    </div>

    <div className="absolute bottom-2.5 left-0 right-0 z-30 flex justify-center">
      <a href="#about"> 
        <img src={downarrow} alt="downarrow" className="w-12 h-12 mx-auto bounce cursor-pointer" /> 
      </a>
    </div>
  </section>
);

export default Hero;
