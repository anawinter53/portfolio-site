import React from 'react'
import { Nav } from './layout'
import { Intro, About, TechStack, Background, Projects } from './components'
import './App.css'

export default function App() {
  return (
    <div>
        <Nav />
        <div className='mainpage'>
          <Background />
          <Intro />
          <About />
          <TechStack />
          <Projects />
        </div>
    </div>
  )
}
