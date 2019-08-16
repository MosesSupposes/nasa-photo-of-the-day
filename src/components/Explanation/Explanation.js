import React from 'react'
import styles from './Explanation.module.css'


export default function Explanation(props) {
    return <p className={styles.explanation}>{props.text}</p>
}