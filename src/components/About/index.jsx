import React from 'react'
import styles from './index.module.css';
import portrait from '../../../assets/anatolia-photo.jpg'

export default function About() {
  return (
    <div className={`container ${styles.about}`}>
      <div className="">
        <h2 className={`text-md-center cursive ${styles.title}`}>About Me</h2>
        <div className="row">
          <div className={`col-4 ${styles.photo_section}`}>
            <img src={portrait} alt="Image of coding female" className={`img-fluid rounded ${styles.photo}`} />
          </div>
          <div className={`col-8 p-xl-5 ${styles.desc_section}`}>
            <h1 className='pb-2'>Anatolia Winter</h1>
            <p className={`pb-2 rounded ${styles.role}`}>Full Stack Developer & Tester</p>
            <h5 className="fw-light">I am a career switcher, with a background in education and a degree in Psychology. I started my switch into tech at La Fosse Academy, learning a range of technologies including React and more. During this time I realised my skill in design and testing, both of which I am very passionate about. Through the course projects I have tested with Jest, Vite and Pytest. I founded and help grow a community of women in tech, supporting women switching into tech in particular.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
