import React from 'react'
import styles from './Loader.module.css'
const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pulse_spinner}></div>
    </div>
  )
}

export default Loader
