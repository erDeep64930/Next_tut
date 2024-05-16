import AdminHeader from '@/components/AdminHeader'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='px-2 sm:w-64 fixed sm:block hidden '>
        <AdminHeader />
        <div className='bg-green-400 sm:ml-72'>
        {children}
        </div>



    </div>
  )
}

export default layout