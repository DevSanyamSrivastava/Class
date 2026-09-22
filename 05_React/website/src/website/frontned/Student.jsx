import React from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
  const students = [
    { id: 1, name: 'Sanyam', class: '12th', city: 'lmp' },
    { id: 2, name: 'Anuj', class: 'B Tech', city: 'rbl' },
    { id: 3, name: 'Rohan', class: '10th', city: 'stp' },
    { id: 4, name: 'Sumit', class: 'Bio', city: 'lko' },
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {students.map((student) => (
        <div key={student.id} className="container max-width bg-indigo-400">
          <p>{student.name}</p>
          <p>{student.class}</p>
          {/* Added text inside the Link so it is clickable */}
          <Link to={`/details/${student.id}`} className='g-gray-200 text-gray-800 hover:bg-gray-300'>View Details</Link>

        </div>
      ))}
    </div>
  );
};

export default Student;
