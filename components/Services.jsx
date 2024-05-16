import React from 'react'
const services = [
  {id: 1, name:'UI & UX DESIGNING', description:'I design beautiful web iterfaces with Figma and Adove XD', image:'/ai.png'},
  {id:2, name:'WEB DEVELOPMENT', description:'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS', image:'/img4.jpg'},
  {id:3, name:'MOBILE DEVELOPMENT', description:'I am an expert mobile developer. I have experience using Flutter and React Native.', image:'/img9.jpg'},
  {id:4, name:'VERSION CONTROL', description:'I can use version control systems well, and Git & Mecurial are my go-to tool.', image:'/ai.png'},
  {id:5, name:'NPM AND NODEJS', description:'I have core understanding of NPM. I can also develop general purpose applications with NodeJS', image:'/ai.png'},
  {id:6, name:'WEB SCRAPING', description:'I can collect content and data from the internet then manipulate and analyze as needed.', image:'/ai.png'},
]
const Services = () => {
  return (
    <div>
      <div>
              <h1 className="text-primary font-semibold text-3xl mt-14">The services i offer:</h1>
              <div className='grid md:grid-cols-3 my-8 gap-5'>
              {
                services.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
                    <img src={service.image} alt="" className='mb-3' />
                    <h6 className='text-2xl mb-4'>{service.name}</h6>
                    <p className='text-base'>{service.description}</p>
                </div>)
              }
              </div>
        </div>
    </div>
  )
}

export default Services