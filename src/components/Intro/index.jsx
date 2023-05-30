import React from 'react'
import './intro.css'

export default function Intro() {
  return (
    <div className="container" id="intro">
      {/* <img src='../../../blur-background.webp' className='background-img'></img> */}
      <div className="col pb-5">
        <h4 className="fw-light pb-2">Hey!</h4>
        <h1 className="display-3 pb-2">I'm Anatolia Winter</h1>
        <h4 className="fw-light pb-2">I'm into Full Stack Development/Testing</h4>
        <button className="btn btn-dark">About Me</button>
      </div>
    </div>
  )
}
