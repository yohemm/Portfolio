import React from "react"

import { getIcon } from "~/data"

import "~/style/TechnoIcon.css"

interface TechnoIcon {
    name:string;
    className?: string;
}

export const TechnoIcon = (props:TechnoIcon) => {
    
    return (
        <div className={ "technos-container " + ( props.className || "") }>
            <i className={getIcon(props.name)}></i>
            <p>{ props.name }</p>
        </div>
    )
}

// TechnoIcon.defaultProps = {
//     className:""
// };