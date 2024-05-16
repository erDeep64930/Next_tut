import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 items-center p-5 bg-pink-200'>
        <Image src="/ai.png" alt="banner" width={150} height={200}/>
       <div>
       <h2>
            Welcome Deep Learning platform .
        </h2>
        <h2>
           Enhance your skills with us .
        </h2>
       </div>
    </div>
  )
}

export default WelcomeBanner