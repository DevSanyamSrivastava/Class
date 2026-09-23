import React from 'react'
import Student from './Student'
import { useParams } from 'react-router-dom'
const Details = () => {
  const { id, name } = useParams()
  const students = [
    { id: 1, name: 'Sanyam', class: '12th', city: 'lmp' },
    { id: 2, name: 'Anuj', class: 'B Tech', city: 'rbl' },
    { id: 3, name: 'Rohan', class: '10th', city: 'stp' },
    { id: 4, name: 'Sumit', class: 'Bio', city: 'lko' },
  ];

  const student = students.find((student) => student.id === parseInt(id));
  console.log("Student id",student)

  return (
    <>

    <h1 className='text-7xl text-green-700 bg-blue-100 p-8 m-6'>Details for item {id}</h1>
<h3 className='text-7xl text-green-700 bg-blue-100 p-8 m-6'>Welcome: {student.name}</h3>
<h3 className='text-7xl text-green-700 bg-blue-100 p-8 m-6'>Class: {student.class}</h3>
<h3 className='text-7xl text-green-700 bg-blue-100 p-8 m-6'>city: {student.city}</h3>

    </>
  )
}

export default Details