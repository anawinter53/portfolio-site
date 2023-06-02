import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

export default function Projects() {
  const [ category, setCategory ] = useState('react')

  useEffect(() => {
    console.log(projects[category])
  }, [category])

  return (
    <div className={`container ${styles.projects}`}>
      <div className="pt-5 pb-5">
        <h2 className={`text-md-center cursive ${styles.title}`}>Projects</h2>
        <div className="row justify-content-center">
          <div className={`mb-5 rounded buttons opacity-background`}>
            <button type="button" className="btn main-button button" onClick={() => setCategory('react')}>React</button>
            <button type="button" className="btn main-button button" onClick={() => setCategory('python')}>Python</button>
            <button type="button" className="btn main-button button" onClick={() => setCategory('others')}>Others</button>
          </div>
          <div className='d-flex flex-row text-center gap-5'>
          {projects ? projects[category].map ((item, i) => ( 
            <div className={`justify-content-center rounded opacity-background ${styles.outer_card}`} href={item.github_url}>
              <div title={item.project_name} className={`d-flex justify-content-center align-items-center p-2 rounded ${styles.img_card}`}>
                <img alt='skill' className={`${styles.image}`} src={item.main_image}/>
              </div>
              <h4 key={i} className='text-sm'>{item.project_name}</h4>
              <p className=''>{item.tech_stack}</p>
            </div>
          )) : undefined}
          </div>
        </div>
      </div>
    </div>
  )
}

const projects = {
    'react': [
        { 
            project_name: 'Focalise', 
            tech_stack: 'HTML5, CSS3, Bootstrap, React, Vite, Vitest, Python, Flask, Pytest, Bcrypt, SQLAlchemy, Render',
            main_image: 'assets/focalise-main.png',
            secondary_image: 'assets/focalise-secondary.png',
            github_url: 'https://github.com/anawinter53/focalise-client'
        },
        { 
            project_name: 'Learnify',
            tech_stack: 'HTML5, CSS3, JavaScript, React, jsdom, Vite, Vitest, Express, Bcrypt, Nodemon, PostgreSQL, Jest, Supertest', 
            main_image: 'assets/learnify-main.png',
            secondary_image: 'assets/learnify-secondary.png',
            github_url: 'https://github.com/anawinter53/Learnify'
        },
        { 
            project_name: 'Portfolio Page', 
            tech_stack: 'HTML5, CSS3, Bootstrap, JavaScript, React, Vite',
            main_image: 'assets/learnify-main.png',
            secondary_image: 'assets/learnify-main.png',
            github_url: 'https://github.com/anawinter53/portfolio-site'
        },
    ],
    'python': [
        { 
            project_name: 'Focalise', 
            tech_stack: 'HTML5, CSS3, Bootstrap, React, Vite, Vitest, Python, Flask, Pytest, Bcrypt, SQLAlchemy, Render',
            main_image: 'assets/focalise-main.png',
            secondary_image: 'assets/focalise-secondary.png',
            github_url: 'https://github.com/anawinter53/focalise-api'
        },
    ],
    'others': [
        { 
            project_name: 'Eco Emporium', 
            tech_stack: 'HTML5, CSS3, JavaScript, jsdom, ExpressJS, NodeJS, Bcrypt, Nodemon, PostgreSQL, Jest, Supertest',
            main_image: 'assets/eco-emporium-main.png',
            secondary_image: 'assets/eco-emporium-secondary.png',
            github_url: 'https://github.com/Sonagi-R/Eco-Emporium'
        },
        { 
            project_name: 'History Guessr', 
            tech_stack: 'HTML5, CSS3, JavaScript, ExpressJS, NodeJS',
            main_image: 'assets/history-guessr-main.png',
            secondary_image: 'assets/history-guessr-main.png',
            github_url: 'https://github.com/Electrolytful/History-Guessr'
        },
    ]
}
