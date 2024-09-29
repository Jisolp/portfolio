import styles from '../style';
import { myphoto } from '../assets';

const About = () => (
  <section id="about" className="flex flex-col md:flex-row p-6 md:p-10 h-auto bg-gray-100">
    <div className="flex-shrink-0 md:mr-10 flex justify-center mb-6 md:mb-0 md:w-1/3 ml-4 md:ml-10"> 
      <img
        src={myphoto} 
        alt="My Picture" 
        className="rounded-lg h-auto max-h-56 w-auto md:max-h-72" 
      />
    </div>

    <div className="flex-1 flex flex-col justify-center mr-4 md:mr-16"> 

      <h2 className="font-poppins font-semibold text-[29px] md:text-[29px] text-black leading-[28px] md:leading-[32px]">About Me</h2>
      <p className="font-sans font-normal text-black text-[14px] md:text-[20px] leading-[20px] md:leading-[24px] mt-4"> 
        Hi! I'm Jisol, a software engineer with a strong background in full-stack development and machine learning. I have experiences from developing scalable web applications to implementing AI-driven solutions.
      </p>

      <p className="font-sans font-normal text-black text-[14px] md:text-[20px] leading-[20px] md:leading-[24px] mt-4"> 
        In my free time, I love reading, running, and spending time outdoors.
      </p>
    </div>
  </section>
);

export default About;
