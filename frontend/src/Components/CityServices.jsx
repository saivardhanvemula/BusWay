import React from 'react'
import styles from "./CityServices.module.css"
export const  CityServices = () => {
  return (
    <div className={styles.cityServices}>
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <input type="text"placeholder='From' />
                    <input type="text"placeholder='To' />
                </div>
                <button className={styles.button}>Search</button>
            </div>
        </div>
    </div>
  )
}
