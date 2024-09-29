import styles from '../style'
import { linkedin, github, email, background } from '../assets'
import NavBar from './NavBar';
import { navLinks } from '../constants';

const Hero = () => (
  <section id="home" className="relative w-full h-screen">

    <div className="absolute top-0 left-0 w-full z-20">
      <NavBar></NavBar>
    </div>
    <img src={background} alt="background" className="w-full h-full object-cover"/>
    <div className={`absolute top-1/3 left-0 right-0 text-center z-30`}>
      <h1 className="font-semibold font-poppin text-[30px] xs:text-[90px]  text-neutral-800 xs:leading-[140px] leading-[70.8px] w-full"> Hi, I'm Jisol! </h1>
      <p className="font-mono text-[20px] xs:text-[22px] text-black xs:leading-[20px] leading-[15px] w-full">I am a software engineer, and I love <a href="./Exploring" className="underline hover:text-yellow-100">exploring</a> and <a href= "./Projects" className="underline hover:text-yellow-100">building</a></p>
      <img src={linkedin} alt="linkedin" />
      <img src={github} alt="github"/>
      <img src={email} alt="email"/>
    </div>
    

  </section>
)

export default Hero