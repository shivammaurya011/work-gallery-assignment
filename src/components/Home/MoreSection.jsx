import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoreCard from './MoreCard';

function MoreSection() {
  const [moreProjects, setMoreProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/moreProjects');
      setMoreProjects(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='px-32 py-4'>
      <h1 className='text-2xl font-bold mb-4'>More projects</h1>
      <div className='flex flex-wrap gap-16 justify-center items-center'>
        {moreProjects.map((project) => (
          <MoreCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default MoreSection;
