import React, { useEffect, useState } from 'react'

export default function Projects() {
//   const [ category, setCategory ] = useState('frontend')

//   useEffect(() => {
//     console.log(skillMap[category])
//   }, [category])

  return (
    <div className="container" id="projects">
      <div className="pt-5 pb-5">
        <h2 className="text-md-center">Projects</h2>
        <div className="row justify-content-center">

          {/* <div className=" w-50 pb-5" role="group">
            <button type="button" className="btn btn-secondary" onClick={() => setCategory('frontend')}>Frontend</button>
            <button type="button" className="btn btn-secondary" onClick={() => setCategory('backend')}>Backend</button>
            <button type="button" className="btn btn-secondary" onClick={() => setCategory('others')}>Others</button>
          </div>
          <div className='d-flex flex-row text-center gap-5'>
          {skillMap ? skillMap[category].map ((item, i) => ( 
            <div className='justify-content-start'>
              <div title={item.skill_name} style={{ backgroundColor: "#E8E9EB", width: '8rem', height: '8rem' }} className='rounded-circle d-flex justify-content-center align-items-center p-2'>
                <img alt='skill' style={{ width: '5rem', height: '5rem' }} src={item.image_url}/>
              </div>
              <p key={i} className='text-sm'>{item.skill_name}</p>
            </div>
          )) : undefined}
          </div> */}
        </div>
      </div>
    </div>
  )
}

const projects = {
    'MERN Stack': [
        { 
            project_name: 'Focalise', 
            project_image: '',
            github_url: ''
        }
    ]
}





// to be filled as portfolio grows with more range of projects that can be classified (MERN Stack etc)

// const skillMap = {
//   'frontend': [ 
//     {skill_name: 'HTML', image_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'},
//   ],
//   'backend': [
//     {skill_name: 'Node', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'},
//   ],
//   'others': [
//     {skill_name: 'npm', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'},
//   ]
//   }
