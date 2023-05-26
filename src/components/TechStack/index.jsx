import React, { useEffect, useState } from 'react'

export default function TechStack() {
  const [ stack, setStack ] = useState('frontend')

  useEffect(() => {
    console.log(skillMap[stack])
  }, [stack])

  return (
    <div className="container" id="tech-stack">
      <div className="pt-5 pb-5">
        <h2 className="text-md-center">Tech Stack</h2>
        <div className="row justify-content-center">
          <div className="btn-group btn-group-lg w-50 pb-5" role="group">
            <button type="button" className="btn btn-secondary" onClick={() => setStack('frontend')}>Frontend</button>
            <button type="button" className="btn btn-secondary" onClick={() => setStack('backend')}>Backend</button>
            <button type="button" className="btn btn-secondary" onClick={() => setStack('others')}>Others</button>
          </div>
          <div className='d-flex flex-row text-center gap-5'>
          {skillMap ? skillMap[stack].map ((item, i) => ( 
            <div className='justify-content-start'>
              <div title={item.skill_name} style={{ backgroundColor: "#E8E9EB", width: '8rem', height: '8rem' }} className='rounded-circle d-flex justify-content-center align-items-center p-2'>
                <img alt='skill' style={{ width: '5rem', height: '5rem' }} src={item.image_url}/>
              </div>
              <p key={i} className='text-sm'>{item.skill_name}</p>
            </div>
          )) : undefined}
          </div>
        </div>
      </div>
    </div>
  )
}

const skillMap = {
  'frontend': [ 
    {skill_name: 'HTML', image_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'},
    {skill_name: 'CSS', image_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg'},
    {skill_name: 'JavaScript', image_url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'},
    {skill_name: 'React', image_url: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg'},
    {skill_name: 'Bootstrap', image_url: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original.svg'},
    {skill_name: 'Vite', image_url:'https://camo.githubusercontent.com/734bba415fb6b43deca708d2c0a7c5c77f84e10bb1594ffb25d4661c5c2ab266/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3337343136372f766974652e737667'},
    {skill_name: 'Vitest', image_url:'https://camo.githubusercontent.com/a2b51065ef3b087a9bd28700825cf6421acccac5f1035b961618404adf3a11b8/68747470733a2f2f7669746573742e6465762f6c6f676f2d736861646f772e737667'},
  ],
  'backend': [
    {skill_name: 'Node', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'},
    {skill_name: 'ExpressJS', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg'},
    {skill_name: 'Python', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'},
    {skill_name: 'Pytest', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/pytest/pytest-original.svg'},
    {skill_name: 'Postgresql', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg'},
    {skill_name: 'SQL Alchemy', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlalchemy/sqlalchemy-plain.svg'},
  ],
  'others': [
    {skill_name: 'npm', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg'},
    {skill_name: 'Jest', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jest/jest-plain.svg'},
    {skill_name: 'Figma', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg'},
    {skill_name: 'Trello', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/trello/trello-plain.svg'},
    {skill_name: 'SPSS', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/spss/spss-original.svg'},
    {skill_name: 'Git', image_url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg'},
    {skill_name: 'GitHub', image_url:'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg'},
    
  ]
  }
