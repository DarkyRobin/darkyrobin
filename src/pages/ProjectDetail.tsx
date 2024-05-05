// ProjectDetail.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json';

interface Params {
  id: string; // Ensure that 'id' is of type string
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const project = projectsData.find(project => project.id === id);

  if (!project) {
    return <div className="container mx-auto py-8">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <p>{project.description}</p>
      {/* Add more details, screenshots, demo link, etc. */}
    </div>
  );
}

export default ProjectDetail;
