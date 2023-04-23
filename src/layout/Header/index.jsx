import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// import Link from 'next/link'
// import { Link as ScrollLink } from 'react-scroll'
// import { FiSun, FiMoon } from 'react-icons/fi'
// import { FaNodeJs } from 'react-icons/fa'
// import { CgClose, CgMenuRight } from 'react-icons/cg'


export default function Header() {
    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    // const { theme, setTheme } = useTheme()

    const navs = ['home', 'about', 'projects', 'experience', 'contact']

    useEffect(() => {
        const updateScroll = () => {
            window.scrollY >= 90 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', updateScroll)
    }, [])

    return (
    <div>
        <header>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Projects</h1>
            <h1>Experience</h1>
        </header>
    </div>
    )
}
