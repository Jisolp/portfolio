import styles from '../style';
import { myphoto } from '../assets';

const About = () => (
  <section id="about" className="flex flex-col md:flex-row p-6 xs:p-10 h-auto bg-gray-100">
    <div className="flex-shrink-0 md:mr-10 flex justify-center mb-6 md:mb-0 md:w-1/3 ml-4 md:ml-10"> 
      <img
        src={myphoto} 
        alt="My Picture" 
        className="rounded-lg h-auto max-h-56 w-auto md:max-h-72" 
      />
    </div>

    <div className="flex-1 flex flex-col justify-center mr-4 xs:mr-16"> 

      <h1 className={`${styles.heading1}`}>About Me</h1>
      <p className={`${styles.paragraph}  leading-[20px] md:leading-[24px] mt-4`}> 
        Hi, I am currently a Math, CS student at UCSD. I am a software engineer with a strong background in <strong>full-stack development and AI</strong>. I have experiences from developing scalable web applications to implementing AI-driven solutions. In my free time, I love reading, running, and snowboarding!
      </p>

      <p className={`${styles.paragraph} leading-[20px] md:leading-[24px] mt-4`}> 
        Right Now, I am <strong>looking for opportunities</strong> where I can continue to learn and contribute to meaningful projects! Looking forward to hearing from you!
      </p>
    </div>
  </section>
);

export default About;
