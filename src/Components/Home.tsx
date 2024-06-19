import React from 'react'
import Image from 'next/image'
import ss from '@/Images/try.png'

function Home() {
  return (
    <div>
      <div>This is home page</div>
      <Image className='justify-center' src={ss} alt='Home' />

    </div>

  )
}

export default Home