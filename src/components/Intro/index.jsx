import React from 'react';
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from "react-icons/io";
import styles from './index.module.css';

export default function Intro() {
  return (
    <div className={`container ${styles.intro}`}>
      <div className={`row`}>
        <div className={`col col-7 ${styles.description}`}>
          <div className={`row pb-4 ${styles.waving}`}>
              <img src='assets/waving-hand.png' alt='waving hand' draggable='false' loading='eager' style={{ maxWidth: "60px" }} />
              <h4 className={`fw-light ${styles.hey}`}>Hey!</h4>
          </div>
          <div className='row'>
            <h1 className={`cursive ${styles.name}`}>I'm Anatolia Winter</h1>
          </div>
          <div className={`pb-2 ${styles.typewriter}`}>
            <h3 className="">I'm into </h3>
            <h3 className={`${styles.typing}`}>
              <Typewriter options={{ strings: 'Full Stack Development & Testing ', autoStart: true, loop: true, deleteSpeed: 50, delay: 50 }}/> 
            </h3>
          </div>  
          <div className='row pb-2'>
            <h5 className="fw-light">I enjoy making applications that have innovative features and clean yet impactful design, alongside full-stack testing to ensure efficiency of code. </h5>
          </div>
            <button className="btn main-button"> More About Me <IoIosArrowForward style={{alignItems: 'center'}}/></button>
        </div>
        <div className={`col  ${styles.logos}`}>
          <div className={`${styles.persona}`}>
            <div>
              <img src='assets/studying.png' alt='hero image' draggable='false' loading='eager' className={`${styles.hero}`}/>
            </div>
            <div className={`${styles.bubble}`}>
              <img src='assets/react-original.svg' alt='react icon' draggable='false' loading='eager' className={`${styles.react}`}/>
            </div>
            <div className={`${styles.bubble}`}>
              <img src='assets/jest-plain.svg' alt='jest icon' draggable='false' loading='eager' className={`${styles.jest}`}/>
            </div>
            <div className=''>
              <img src='assets/python-original.svg' alt='python icon' draggable='false' loading='eager' className={`${styles.python}`}/>
            </div>
            <div className=''>
              <img src='assets/vitest-original.svg' alt='vitest icon' draggable='false' loading='eager' className={`${styles.vitest}`}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
