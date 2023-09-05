import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <div className='w-full h-24 bg-blue-500 flex justify-center items-center fixed z-10'>
        <Search/>
    </div>
  )
}
