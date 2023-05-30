import React from 'react'
import { Nav } from './layout'
import { Intro, About, TechStack } from './components'

export default function App() {
  return (
    <div>
        <Nav />
        <div className='main-page'>
        <Intro />
        <About />
        <TechStack />
        </div>
    </div>
  )
}
