import React from 'react'

const page = ({params}) => {
  return (
    <h1 className=' mx-auto w-fit text-center text-4xl mt-60 border-b border-gray-400 py-2 text-gray-500'>We serve you under the services no. <span>{params.serviceId}</span> </h1>

  )
}

export default page