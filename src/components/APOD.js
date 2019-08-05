import React from 'react'


export default function APOD(props) {
    return (
        <figure>
            <img         
                src={props.hdurl || props.url} 
                alt="The astronmical photo of the day" 
            />
            <figcaption>{props.caption}</figcaption>
        </figure>

    )
}