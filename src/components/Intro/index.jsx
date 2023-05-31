import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import styles from './index.module.css'

export default function Intro() {
  return (
    <div className={`container ${styles.intro}`}>
      <div className={`row`}>
        <div className={`col col-7 ${styles.description}`}>
          <div className={`row pb-3 ${styles.waving}`}>
              <img 
              src='assets/waving-hand.png'
              alt='waving hand'
              draggable='false'
              loading='eager'
              style={{ maxWidth: "60px" }}
              />
              <h4 className={`fw-light ${styles.hey}`}>Hey!</h4>
          </div>
          <div className='row pb-3'>
            <h1 className={`${styles.cursive}`}>I'm Anatolia Winter</h1>
          </div>
          <div className='row pb-2'>
            <h4 className="">I'm into Full Stack Development/Testing</h4>
          </div>
          <div className='row pb-2'>
            <h5 className="fw-light">I enjoy making applications that have innovative features and clean yet impactful design, alongside full-stack testing to ensure efficiency of code. </h5>
          </div>
            <button className="btn btn-dark"> More About Me <IoIosArrowForward style={{alignItems: 'center'}}/></button>
        </div>
        <div className='col position-relative intro-images'>
          <div>
            <img 
              src='assets/studying.png'
              alt='hero image'
              draggable='false'
              loading='eager'
              style={{ maxWidth: "350px" }}
            />
          </div>
          <div className='position-absolute'>
            <img 
              src='assets/react-original.svg'
              alt='react icon'
              draggable='false'
              loading='eager'
              className={`${styles.reactlogo}`}
              style={{ 
                height: "80px",
                // top: "10px"
               }}
            />
          </div>
          <div className='position-absolute'>
            <img 
              src='assets/jest-plain.svg'
              alt='jest icon'
              draggable='false'
              loading='eager'
              style={{ 
                height: "80px"
               }}
            />
          </div>
          <div className='position-absolute'>
            <img 
              src='assets/python-original.svg'
              alt='python icon'
              draggable='false'
              loading='eager'
              style={{ 
                height: "80px"
               }}
            />
          </div>
          <div className='position-absolute'>
            <img 
              src='assets/vitest-original.svg'
              alt='vitest icon'
              draggable='false'
              loading='eager'
              style={{ 
                height: "80px"
               }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
