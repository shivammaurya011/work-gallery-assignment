import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleEdit = (editedProject) => {
    axios.put(`http://localhost:3001/projects/${editedProject.id}`, editedProject)
      .then(response => {
        const updatedProjects = projects.map(project =>
          project.id === editedProject.id ? editedProject : project
        );
        setProjects(updatedProjects);
      })
      .catch(error => {
        console.error('Error updating project:', error);
      });
  };

  const handleImageChange = (projectId, newImage) => {
    axios.patch(`http://localhost:3001/projects/${projectId}`, { image: newImage })
      .then(response => {
        const updatedProjects = projects.map(project =>
          project.id === projectId ? { ...project, image: newImage } : project
        );
        setProjects(updatedProjects);
      })
      .catch(error => {
        console.error('Error updating image:', error);
      });
  };

  return (
    <div>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={handleEdit}
          onImageChange={handleImageChange}
        />
      ))}
    </div>
  );
}

export default ProjectSection;
