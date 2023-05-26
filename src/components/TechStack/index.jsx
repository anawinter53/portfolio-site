import React from 'react'

export default function TechStack() {
  return (
    <div className="container" id="tech-stack">
      <div className="pt-5 pb-5">
        <h2 className="text-md-center">Tech Stack</h2>
        <div className="row justify-content-center">
          <div className="btn-group btn-group-lg w-50" role="group">
            <button type="button" className="btn btn-secondary">Frontend</button>
            <button type="button" className="btn btn-secondary">Backend</button>
            <button type="button" className="btn btn-secondary">Others</button>
          </div>
        </div>
      </div>
    </div>
  )
}
