import React from 'react'
import styles from './index.module.css'

export default function Nav() {
  return (
    <>
        <nav className={`navbar navbar-expand-md ps-5 pe-5 py-2 sticky-top shadow-sm  ${styles.navigation}`}>
            <a className={`navbar-brand ${styles.logo}`} href="index.html">AW</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-controls="hamburger-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-5" id="hamburger-menu">
                <ul className="navbar-nav mx-auto">
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
