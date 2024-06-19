import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
          <div className='bg-black text-white flex justify-between items-center p-4 h-[80px] w-[700px] rounded-full ml-[600px] mt-[10px] fixed '>
      <ul className='flex space-x-4 text-2xl px-[150px]'>
            <li>
                <Link href={"/"} className='hover:underline underline-offset-8 '>Home</Link>
            </li>
            <li>
              <Link href='#Projects' className='hover:underline underline-offset-8 '>Projects</Link>
            </li>
            <li>
                <Link href='#about' className='hover:underline underline-offset-8 '>About
                </Link>
            </li>
            <li>
              <Link href='#Contact' className='hover:underline underline-offset-8 '>Contact</Link>
            </li>
        </ul>
    </div>

  )
}

export default Navbar