import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsLink } from '../constants';

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsLink.find((proj) => proj.id === id); // Find the project details

  // If the project is not found, you can handle it accordingly
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-md" />
      <h2 className="mt-4 text-xl">Technologies Used</h2>
      <p>{project.techStack.join(', ')}</p>
      <h2 className="mt-4 text-xl">Description</h2>
      <p>{project.description || "No description available."}</p>
    </div>
  );
};

export default ProjectDetail;
