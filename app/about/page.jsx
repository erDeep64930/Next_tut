"use client"

import React from 'react'

const Aboutpage = () => {
  return (
    <div className='h-full w-full justify-center items-center bg-black text-white p-8 '>
      <h1 className='text-center text-2xl space-y-4'>Aboutpage</h1>
      <PropsTutorial name="ajay devgan"/>
      <PropsTutorial name="sunil setty"/>
      <PropsTutorial name="sanjay dutt"/>
      <button className='mt-4 text-zinc-200 px-5 py-3 border shadow-lg hover:animate-tilt' onClick={()=>alert("welcome to about page")}>Welcome</button>
    </div>
  )
}

export default Aboutpage;



 const PropsTutorial = ({name }) => {
  return (
    <div>
      this is simply a tutorial of props via {name}
    </div>
  )
}
