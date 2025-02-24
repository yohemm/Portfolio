import React from 'react';
import { getIcon } from '~/data';

export interface WebTechno {
    front: string[];
    back: string[];
}

export const getWebTechno = (front: string[], back: string[]):WebTechno => {return {front:front, back: back};}

interface Techno {
    name: string;
    position: number;
}
const Techno = (props: Techno) => {
    return (
        <>
            <div className={"skill-container pos-"+ props.position }>
                <i className={getIcon(props.name)}></i>
                <p>{props.name}</p>
            </div>
            { props.position == 1 ? <span className="vert"></span> : props.position == 2 ? <span className="horiz"></span> : "" }
        </>
    )
}

export const WebTechno = (props:WebTechno) => {
    if (props.front.length === 0) return (
        <p>Error front nb agrs</p>
    );
    if (props.back.length === 0) return(
        <p>Error back nb agrs</p>
    );
    
    return (
        <div id="main-skills" className="container-skills">
            <div id="back-skills">
                <h3>Back-end</h3>
                <div className="all-section-skill-container">
                    {
                        props.back.map(function(name, index){
                            return (<Techno key={name+" "+index} name={name} position={index}/>);
                        })
                    }
                </div>
            </div>
            <span></span>
            <div id="front-skills">
                <h3>Front-end</h3>
                <div className="all-section-skill-container">
                    <span className="anim"></span>
                    {
                        props.front.map(function(name, index){
                            return (<Techno key={name+" "+index} name={name} position={index}/>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}