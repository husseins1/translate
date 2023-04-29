import Link from 'next/link'
import React from 'react'

export default function MyLink({link,svg,title}) {
  return (
    <Link href={link}>
        <a className='py-3 w-40 shadow-md rounded-xl inline-flex items-center  px-4 '>
            
            <img className='w-8 mr-4' src="/icons/house.png" alt='house' />
            <h4 className='text-xl font-medium'>{title}</h4>
            
        </a>
    </Link>
  )
}
