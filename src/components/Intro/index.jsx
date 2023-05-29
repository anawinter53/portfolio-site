import React from 'react'
import './intro.css'

export default function Intro() {
  return (
    <div className="container" id="intro">
      <img src='../../../blur-background.webp' className='background-img'></img>
      <div className="col pt-5 pb-5">
        <h3 className="fw-light pb-2">Hey!</h3>
        <h1 className="display-2 pb-2">I'm Anatolia Winter</h1>
        <h3 className="fw-light pb-2">I'm into Full Stack Development/Testing</h3>
        <button className="btn btn-dark">About Me</button>
      </div>
    </div>
  )
}
