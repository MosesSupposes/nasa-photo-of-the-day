import React from 'react'


export default function APOD(props) {
    return <img 
                src={props.hdurl || props.url} 
                alt="The astronmical photo of the day" 
            />
}