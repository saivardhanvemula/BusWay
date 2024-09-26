import React from 'react'
import styles from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <div>
        <div className={styles.homepage}>
            <div className={styles.left}>
                <button>City Services</button>
                <button>City Services</button>
                <button>City Services</button>
            </div>
            <div className={styles.mid}>
                <img src="" alt="" />
            </div>
            <div className={styles.right}>
                <button className={styles.button}>Future Scope</button>
                <button className={styles.button}>Future Scope</button>
            </div>
        </div>
    </div>
  )
}
