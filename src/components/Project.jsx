import styles from '../style';
import { Link } from 'react-router-dom';
import { projectsLink } from '../constants';

const Project = () => (
  <section id="projects" className="p-6 xs:p-10 h-auto bg-gray-100">
    <h1 className={`${styles.heading1}`}>My Projects</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projectsLink.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-gray-600">{project.techStack.join(', ')}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Project;
