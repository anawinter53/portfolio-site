import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default function Socials() {
  return (
    <div className={`container ${styles.socials}`}>
        <div className='row'>
            <div className={`rounded-circle ${styles.bubble}`}>
                <Link >
                    <img src='assets/linkedin-plain.svg' href='linkedin.com/in/anatolia-winter/' className={`${styles.icon}`}/>
                </Link>
            </div>
            <div className={`rounded-circle ${styles.bubble}`}>
                <Link >
                    <img src='assets/github-original.svg' href='https://github.com/anawinter53' className={`${styles.icon}`}/>
                </Link>
            </div>
        </div>
    </div>
  )
}
