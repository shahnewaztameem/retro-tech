import React from 'react'
import styles from './Loader.module.css'
const Loader = () => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.pulse_spinner}></div>
    </div>
  )
}

export default Loader
