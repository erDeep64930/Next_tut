import AdminHeader from '@/components/AdminHeader'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <AdminHeader />

{children}

    </div>
  )
}

export default layout