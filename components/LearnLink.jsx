import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
  return (
    <div>
        <h1>Go to admin Dashboardpage</h1>
        <Link href="/admin/dashboard">Click here</Link>
    </div>
  )
}

export default LearnLink