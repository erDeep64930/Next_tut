import React from 'react'
import WelcomeBanner from './_component/WelcomeBanner'

const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {/* left */}
        <div className='col-span-2'>
            <WelcomeBanner />
        </div>
        {/* right */}
        <div className='col-span-1'>Right section</div>
    </div>
  )
}

export default page