import styles from '../style';
import { Link } from 'react-router-dom';
import { projectsLink } from '../constants';
const Project = () => (
  <section id="projects" className="flex flex-col md:flex-row p-6 xs:p-10 h-auto bg-gray-100">
    <h1 className={`${styles.heading1}`}>Projects</h1>
  </section>
)

export default Project