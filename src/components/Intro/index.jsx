import React from 'react';
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from "react-icons/io";
import styles from './index.module.css';
import wavinghand from '../../../assets/waving-hand.jpg'
import studying from '../../../assets/studying.jpg'

export default function Intro() {
  return (
    <div className={`container ${styles.intro}`}>
      <div className={`row`}>
        <div className={`col col-7 ${styles.description}`}>
          <div className={`row pb-4 ${styles.waving}`}>
              <img src={wavinghand} alt='waving hand' draggable='false' loading='eager' style={{ maxWidth: "60px" }} />
              <h4 className={`fw-light text ${styles.hey}`}>Hey!</h4>
          </div>
          <div className='row'>
            <h1 className={`cursive text ${styles.name}`}>I'm Anatolia Winter</h1>
          </div>
          <div className={`pb-2 text ${styles.typewriter}`}>
            <h3 className="">I'm into </h3>
            <h3 className={`${styles.typing}`}>
              <Typewriter options={{ strings: 'Full Stack Development & Testing ', autoStart: true, loop: true, deleteSpeed: 50, delay: 50 }}/> 
            </h3>
          </div>  
          <div className='row pb-2'>
            <h5 className='fw-light text'>I enjoy making applications that have innovative features and clean yet impactful design, alongside full-stack testing to ensure efficiency of code. </h5>
          </div>
            <button className="btn main-button"> More About Me <IoIosArrowForward style={{alignItems: 'center'}}/></button>
        </div>
        <div className={`col  ${styles.logos}`}>
          <div className={`${styles.persona}`}>
            <div>
              <img src={studying} alt='hero image' draggable='false' loading='eager' className={`${styles.hero}`}/>
            </div>
            <div className={`${styles.bubble}`}>
              <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' alt='react icon' draggable='false' loading='eager' className={`${styles.react}`}/>
            </div>
            <div className={`${styles.bubble}`}>
              <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jest/jest-plain.svg' alt='jest icon' draggable='false' loading='eager' className={`${styles.jest}`}/>
            </div>
            <div className=''>
              <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' alt='python icon' draggable='false' loading='eager' className={`${styles.python}`}/>
            </div>
            <div className=''>
              <img src='https://camo.githubusercontent.com/a2b51065ef3b087a9bd28700825cf6421acccac5f1035b961618404adf3a11b8/68747470733a2f2f7669746573742e6465762f6c6f676f2d736861646f772e737667' alt='vitest icon' draggable='false' loading='eager' className={`${styles.vitest}`}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
