import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import focalise_main from '../../../assets/focalise-main.jpg'
import learnify_main from '../../../assets/learnify-main.jpg'
import portfolio_main from '../../../assets/portfolio-main.jpg'
import eco_emporium_main from '../../../assets/eco-emporium-main.jpg'
import history_guessr_main from '../../../assets/history-guessr-main.jpg'


export default function Projects() {
  const [ category, setCategory ] = useState('react')

  useEffect(() => {
    console.log(projects[category])
  }, [category])

  return (
    <div className={`container ${styles.projects}`}>
      <div className="pt-5 pb-5">
        <h2 className={`text-md-center text cursive ${styles.title}`}>Projects</h2>
        <div className="row justify-content-center">
          <div className={`mb-5 rounded buttons opacity-background`}>
            <button type="button" className="btn main-button button" onClick={() => setCategory('react')}>React</button>
            <button type="button" className="btn main-button button" onClick={() => setCategory('python')}>Python</button>
            <button type="button" className="btn main-button button" onClick={() => setCategory('others')}>Others</button>
          </div>
          <div className={`d-flex flex-row text-center gap-5 ${styles.cards}`}>
          {projects ? projects[category].map ((item, i) => ( 
            <div className={`justify-content-center rounded opacity-background ${styles.outer_card}`} href={item.github_url}>
              <div title={item.project_name} className={`d-flex justify-content-center align-items-center p-2 rounded ${styles.img_card}`}>
                <img alt='skill' className={`${styles.image}`} src={item.main_image}/>
              </div>
              <div className={`${styles.card_text}`}>
                <h4 key={i} className='text-sm text'>{item.project_name}</h4>
                <p className='fw-light text'>Made using {item.tech_stack}</p>
                <button className={`btn text ${styles.repo}`} onClick={() => window.open(item.github_url)}>Github Repo</button>
              </div>
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
            main_image: focalise_main,
            secondary_image: 'assets/focalise-secondary.jpg',
            github_url: 'https://github.com/anawinter53/focalise-client'
        },
        { 
            project_name: 'Learnify',
            tech_stack: 'HTML5, CSS3, JavaScript, React, jsdom, Vite, Vitest, Express, Bcrypt, Nodemon, PostgreSQL, Jest, Supertest', 
            main_image: learnify_main,
            secondary_image: 'assets/learnify-secondary.jpg',
            github_url: 'https://github.com/anawinter53/Learnify'
        },
        { 
            project_name: 'Portfolio', 
            tech_stack: 'HTML5, CSS3, Bootstrap, JavaScript, React, Vite',
            main_image: portfolio_main,
            secondary_image: 'assets/learnify-main.jpg',
            github_url: 'https://github.com/anawinter53/portfolio-site'
        },
    ],
    'python': [
        { 
            project_name: 'Focalise', 
            tech_stack: 'HTML5, CSS3, Bootstrap, React, Vite, Vitest, Python, Flask, Pytest, Bcrypt, SQLAlchemy, Render',
            main_image: focalise_main,
            secondary_image: 'assets/focalise-secondary.jpg',
            github_url: 'https://github.com/anawinter53/focalise-api'
        },
    ],
    'others': [
        { 
            project_name: 'Eco Emporium', 
            tech_stack: 'HTML5, CSS3, JavaScript, jsdom, ExpressJS, NodeJS, Bcrypt, Nodemon, PostgreSQL, Jest, Supertest',
            main_image: eco_emporium_main,
            secondary_image: 'assets/eco-emporium-secondary.jpg',
            github_url: 'https://github.com/Sonagi-R/Eco-Emporium'
        },
        { 
            project_name: 'History Guessr', 
            tech_stack: 'HTML5, CSS3, JavaScript, ExpressJS, NodeJS',
            main_image: history_guessr_main,
            secondary_image: 'assets/history-guessr-main.jpg',
            github_url: 'https://github.com/Electrolytful/History-Guessr'
        },
    ]
}
