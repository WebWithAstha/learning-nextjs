import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <h1 className=' mx-auto w-fit text-center text-4xl mt-60 border-b border-gray-400 py-2 text-gray-500'>Our services.</h1>
    <ul className='mx-auto w-fit mt-6 list-decimal'>
         <Link href={'/services/1'}><li className='text-lg mb-2'>2 hrs off</li></Link>
         <Link href={'/services/2'}><li className='text-lg mb-2'>Wifi connectivity</li></Link>
         <Link href={'/services/3'}><li className='text-lg mb-2'>Extra Storage</li></Link>
    </ul>

    </>

  )
}

export default page