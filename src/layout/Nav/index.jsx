import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import styles from './index.module.css'

export default function Nav() {

    
    return (
    <>
        <nav className={`navbar navbar-expand-md ps-5 pe-5 py-2 sticky-top shadow-sm  ${styles.navigation}`}>
            <a className={`navbar-brand ${styles.logo}`} href="/">AW</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-controls="hamburger-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-5" id="hamburger-menu">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item fw-light">
                        <NavHashLink to="/#about" style={{ textDecoration: 'none', color: '#000' }}>
                            About
                        </NavHashLink>
                    </li>
                    <li className="nav-item fw-light">
                        <NavHashLink to="/#tech-stack" style={{ textDecoration: 'none', color: '#000' }}>
                            Tech Stack
                        </NavHashLink>
                    </li>
                    <li className="nav-item fw-light">
                        <NavHashLink to="/#projects" style={{ textDecoration: 'none', color: '#000' }}>
                            Projects
                        </NavHashLink>
                    </li>
                </ul>
            </div>
                {/* <button className="btn">☾</button> */}
        </nav>
        <Outlet />
    </>
    )
}
