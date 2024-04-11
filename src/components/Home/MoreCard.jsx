import React from 'react';

function MoreCard({ project }) {
  return (
    <div className='flex flex-col w-96 max-w-xs'>
      <img src={project.image} alt={project.name} className='w-full h-auto' />
      <h1 className='text-xl font-bold mt-2'>{project.name}</h1>
      <p className='mt-1'>{project.description}</p>
    </div>
  );
}

export default MoreCard;
