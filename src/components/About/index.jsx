import React from 'react'

export default function About() {
  return (
    <div className="container" id="about">
      <div className="pt-5 pb-5">
        <h2 className="text-md-center">About Me</h2>
        <div className="row">
          <div className="col-4">
            <img src="https://images.unsplash.com/photo-1452457750107-cd084dce177d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1701&q=8" alt="Image of coding female" className="img-fluid" />
          </div>
          <div className="col-8 p-xl-5">
            <h2>Anatolia Winter</h2>
            <h4 className="fw-light">I am a career switcher, with a background in education and a degree in Psychology. I started my switch into tech at La Fosse Academy, learning a range of technologies including React and more. During this time I realised my skill in design and testing, both of which I am very passionate about. Through the course projects I have tested with Jest, Vite and Pytest. I founded and help grow a community of women in tech, supporting women switching into tech in particular.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
