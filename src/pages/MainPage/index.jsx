import React from 'react';
import { Intro, About, TechStack, Socials, Projects } from '../../components';


export default function MainPage() {
  return (
    <div className='mainpage'>
          <Intro />
          <section id="about" class="about">
            <About />
          </section>
          <section id="tech-stack" class="tech-stack">
            <TechStack />
          </section>
          <section id="projects" class="projects">
            <Projects />
          </section>
          {/* <Socials /> */}
    </div>
  )
}
