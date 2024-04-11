import React, { useState, useRef } from 'react';

function ProjectCard({ project, onEdit, onImageChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(project);
  const fileInputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProject(prevProject => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedProject);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      onImageChange(editedProject.id, URL.createObjectURL(newImage));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={`flex px-16 mx-10 border-b-2 border-gray-500`}>
      <div className="w-1/2 pt-10 pr-32 pl-10 ">
        {isEditing ? ( 
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              value={editedProject.name}
              onChange={handleChange}
              className="text-xl border-none focus:outline-none font-bold mb-4"
            />
            <textarea
              name="description"
              value={editedProject.description}
              onChange={handleChange}
              className="text-base text-gray-700 mb-2 border-none focus:outline-none"
            />
            <input
              type="text"
              name="techStack"
              value={editedProject.techStack}
              onChange={handleChange}
              className="text-sm text-gray-500 mb-4 border-none focus:outline-none"
            />
            <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4" onClick={handleEdit}>
              {project.name}
            </h2>
            <p className="text-base text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">{project.techStack}</p>
          </div>
        )}
      </div>
      <div className="w-1/2 py-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <label htmlFor="fileInput" onClick={handleImageClick}>
          <img src={project.image} alt={project.name} className="w-auto h-60 cursor-pointer" />
        </label>
      </div>
    </div>
  );
}

export default ProjectCard;
