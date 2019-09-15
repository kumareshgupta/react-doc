import React from 'react'
import './myStyles.css'

export default function Stylesheet(props){
    let className = props.primary ? 'primary' :'secondary'
    return(
        <div>
            <p className={`${className} font-xl`}>Stylish Sheets are floating in the air.</p>
        </div>
    )
}