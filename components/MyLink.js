import Link from 'next/link'
import React from 'react'

export default function MyLink({link,svg,title}) {
  return (
    <Link href={link}>
        <a className='py-3 m-2  shadow-md rounded-xl inline-flex items-center  px-4 '>
            
            <img className='w-8 mr-4' src={svg} alt='house' />
            <h4 className='text-xl font-medium'>{title}</h4>
            
        </a>
    </Link>
  )
}
