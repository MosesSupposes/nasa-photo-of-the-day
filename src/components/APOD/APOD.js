import React from 'react'
import styles from './APOD.module.css'


export default function APOD(props) {
    return (
        <figure>
            <img
                className={styles.APODImg}        
                src={props.hdurl || props.url} 
                alt="The astronmical photo of the day" 
            />
            <figcaption className={styles.caption}>{props.caption}</figcaption>
        </figure>

    )
}