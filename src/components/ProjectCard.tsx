import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/types'

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="mb-4">{project.description}</p>
      <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">Learn More</Link>
    </div>
  );
}

export default ProjectCard;
