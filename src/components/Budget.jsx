import Link from 'next/link'
import React from 'react'

export const Budget = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className="text-amber-300 text-center font-bold">Ready to enter the game?</p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLScsKtwodI4X6RwTP8BEMrubn5xaxNqCiWcF6cnZO1cWB6uDwQ/viewform?usp=sharing"
        target='_blank'
        className='flex items-center justify-center p-2 my-2 w-40 font-medium text-center text-white bg-fuchsia-600 rounded-lg hover:ring-2 ring-amber-300 hover:shadow-lg hover:shadow-amber-300 hover:scale-105'>
        Get a budget idea now!
      </Link>

    </div>
  )
}
