import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <Card>Notification
      <Link href="/dasboard/archived">Archive</Link>
    </Card>
  )
}

export default page