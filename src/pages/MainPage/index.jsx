import React from 'react';
import { Intro, About, TechStack, Socials, Projects } from '../../components';


export default function MainPage() {
  return (
    <div className='mainpage'>
          <Intro />
          <About id='about' name='about'/>
          <TechStack name='tech-stack'/>
          <Projects name='projects'/>
          <Socials />
    </div>
  )
}
