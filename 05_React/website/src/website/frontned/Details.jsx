import React from 'react'
import Student from './Student'
import { useParams } from 'react-router-dom'
const Details = () => {
  const { id, name } = useParams()

  return (
    <>
    <h1 className='text-7xl text-green-700 bg-blue-100 p-8 m-6'>Details for item {id}</h1>

    </>
  )
}

export default Details