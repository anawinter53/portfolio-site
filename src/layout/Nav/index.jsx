import React from 'react';
// import { react-scroll } from 'Scroll'
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import styles from './index.module.css'

export default function Nav() {
    // const navigate = useNavigate();

    // const handleAbout = () => {
    //     scrollTo('/about');
    // };

    // const handleStack = () => {
    //     scrollTo('/tech-stack');
    // };

    // const handleProjects = () => {
    //     scrollTo('/projects');
    // };

    
    const Scroll   = require('react-scroll');
    const scroller = Scroll.scroller;

    scroller.scrollTo('about', {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: 'about',
        offset: 50, // Scrolls to element + 50 pixels down the page
      })

    return (
    <>
        <nav className={`navbar navbar-expand-md ps-5 pe-5 py-2 sticky-top shadow-sm  ${styles.navigation}`}>
            <a className={`navbar-brand ${styles.logo}`} href="/">AW</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger-menu" aria-controls="hamburger-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-5" id="hamburger-menu">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        {/* <NavLink to='/about'>About</NavLink> */}
                        {/* <a className="nav-link" href="/about" onClick={handleAbout}>About</a> */}
                        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false} spyThrottle={500}> About </Link>
                    </li>
                    <li className="nav-item">
                        {/* <NavLink to='/tech-stack'>Stack</NavLink> */}
                        <a className="nav-link" href="/tech-stack" onClick={handleStack}>Stack</a>
                    </li>
                    <li className="nav-item">
                        {/* <NavLink to='/projects'>Projects</NavLink> */}
                        <a className="nav-link" href="/projects" onClick={handleProjects}>Projects</a>
                    </li>
                </ul>
            </div>
                <button className="btn">☾</button>
        </nav>
        <Outlet />
    </>
    )
}
