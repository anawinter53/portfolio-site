import React from 'react'
import './intro.css'

export default function Intro() {
  return (
    <div className="container" id="intro">
      <div className='row'>
        <div className="col col-7 description">
          <h4 className="fw-light pb-2">Hey!</h4>
          <h1 className="display-3 pb-2">I'm Anatolia Winter</h1>
          <h4 className="fw-light pb-2">I'm into Full Stack Development/Testing</h4>
          <button className="btn btn-dark">About Me</button>
        </div>
        <div className='col position-relative intro-images'>
          <div className='rounded'>
            <img 
              src='studying.png'
              alt='hero image'
              draggable='false'
              loading='eager'
              style={{ maxWidth: "350px"}}
            />
          </div>
          <div className='position-absolute'>

          </div>
        </div>
      </div>
    </div>
  )
}
