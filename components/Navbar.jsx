import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-20 py-10 justify-between items-center text-gray-600'>
        <h1>Logo</h1>
        <div className="nav-center flex items-center justify-center gap-8   ">
            <Link className='cursor-pointer hover:font-semibold transition-all' href={'/'}>Home</Link>
            <Link className='cursor-pointer hover:font-semibold transition-all' href={'/about'}>About</Link>
            <Link className='cursor-pointer hover:font-semibold transition-all' href={'/services'}>Services</Link>
        </div>
        <button className='px-4 py-1 rounded border-2 border-gray-400 hover:bg-gray-400 hover:text-gray-100 transition-all'>Login</button>
    </div>
  )
}

export default Navbar