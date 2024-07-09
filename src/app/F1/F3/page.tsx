import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div>F3 page</div>
    <Link href="/F1/F4">Go to F4 page</Link>
    <Link href="/About">Go to About page</Link>
    </>
  )
}

export default page