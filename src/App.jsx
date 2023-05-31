import React from 'react'
import { Nav } from './layout'
import { Intro, About, TechStack, Background, Projects } from './components'

export default function App() {
  return (
    <div>
        <Nav />
        <Background />
        <Intro />
        <About />
        <TechStack />
        <Projects />
    </div>
  )
}
