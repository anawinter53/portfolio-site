import React from 'react'

export default function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-md ml-3 py-3 bg-info-light navbar-light px-5">
        <a className="navbar-brand" href="index.html">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-controls="hamburger-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-5" id="hamburger-menu">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
            <button className="btn">☾</button>
        </nav>
    </>
  )
}
