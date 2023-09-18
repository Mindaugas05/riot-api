import React from 'react'
import Search from './Search'
import Link from 'next/link'
import Button from '@mui/material/Button'

export default function Header() {
  return (
    <div className='w-full h-24 opacity-90 bg-blue-500 flex justify-center items-center sticky z-10'>
      <Button className='font-bold rounded-full mx-8 bold h-12 shadow-none hover:shadow-none' href="/champions" variant="contained">Champions</Button>
      <Search />
    </div>
  )
}

