import React from "react";

import "~/style/TitleAnimate.css";

interface TitleAnimate {
    children: React.ReactNode
}

export const TitleAnimate = (props: TitleAnimate)=>{
    return (
        <div className="subtitle-container">
            <h3 className="subtitle"> { props.children }</h3>
        </div>
    )
}