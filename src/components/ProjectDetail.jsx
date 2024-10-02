import { useParams, Link } from 'react-router-dom';
import { projectsLink } from '../constants';
import NavBar from './NavBar';
import styles from '../style';
import React, { useEffect } from 'react';

const ProjectDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    const { id } = useParams(); 
  const project = projectsLink.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full min-h-screen overflow-y-auto flex flex-col">
      <NavBar />

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row flex-1 p-6">
        <div className="flex-1">
          <h1 className={`${styles.heading1} ml-3 mr-3 text-wrap mt-10 mb-2`}>{project.title}</h1>
          <div className={`${styles.paragraph} ml-3 mr-3`} dangerouslySetInnerHTML={{ __html: project.description || "<p>No description available.</p>" }}/>
        </div>

        {/* Link Boxes */}
        <div className="flex flex-col ml-4 mt-20 lg:w-1/3">
          <div className="bg-white border border-blue-500 rounded-md shadow p-4 mb-2">
            <h2 className="text-xl font-semibold">Links</h2>
            <hr className="border-gray-300 my-2" /> 
            <ul className="mt-2">
              {project.github && (
                <li>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:opacity-70">
                    GitHub
                  </a>
                </li>
              )}
              {project.demo && (
                <li>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:opacity-70">
                    Live Demo
                  </a>
                </li>
              )}
              {project.figma && (
                <li>
                  <a href={project.figma} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:opacity-70">
                    Figma
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white border border-blue-500 rounded-md shadow p-4 mb-3 xs-mb-1">
            <h2 className="text-xl font-semibold">Tech Stack</h2>
            <hr className="border-gray-300 my-2" />
             <ul className="list-disc list-inside">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-gray-700">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Other Works Section */}
      <div className="mt-4 p-6">
        <h2 className="text-xl font-semibold">Check out my other work:</h2>
        <div className="overflow-x-auto mt-2"> 
          <ul className="flex space-x-4 whitespace-nowrap"> 
            {projectsLink.map((proj) => (
              <li key={proj.id} className="flex items-center">
                {/* Highlight current project */}
                {proj.id.toString() === id ? (
                  <span className="bg-blue-200 text-black font-bold py-1 px-2 rounded-full flex items-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.293a1 1 0 00-1.414 0L10 11.586 8.121 9.707a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {proj.title}
                  </span>
                ) : (
                  <Link to={`/projects/${proj.id}`} className="text-gray-600 hover:text-blue-500">
                    {proj.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
