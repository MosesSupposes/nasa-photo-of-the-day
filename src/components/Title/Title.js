import React from 'react'
import styles from './Title.module.css'


export default function Title(props) {
    switch(props.size) {
        case "h1":
            return <h1 className={styles.title}>{props.text}</h1>
        case "h2":
            return <h2 className={styles.title}>{props.text}</h2>
        case "h3":
            return <h3 className={styles.title}>{props.text}</h3>
        case "h4":
            return <h4 className={styles.title}>{props.text}</h4>
        case "h5":
            return <h5 className={styles.title}>{props.text}</h5>
        case "h6":
            return <h6 className={styles.title}>{props.text}</h6>
    }
    
}