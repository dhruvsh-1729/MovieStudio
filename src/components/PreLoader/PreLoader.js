import React from 'react'
import styles from './PreLoader.module.css'
import Loader from '../Loader/Loader'

const PreLoader = () => {
  return (
    <div className={styles.main}>
    <h1>Welcome to MovieStudios!</h1>
    <Loader />
    </div>
  )
}

export default PreLoader