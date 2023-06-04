import React from 'react';
import { Intro, About, TechStack, Socials, Projects } from '../../components';


export default function MainPage() {
  return (
    <div className='mainpage'>
          <Intro />
          <About />
          <TechStack />
          <Projects />
          <Socials />
    </div>
  )
}
