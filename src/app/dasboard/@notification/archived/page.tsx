import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <Card>
        <div>Archived Notification
        <Link href="/dasboard">Default</Link>
    </div>
    </Card>
  )
}

export default page