import React from 'react';
import { getIcon } from '~/data';


export interface ToolsAndServices {
    tools: string[];
    services: string[];
}
export const getToolsAndServices = (tools: string[], services: string[]): ToolsAndServices => {
    return {tools: tools, services: services};
}
export const ToolsAndServices = (props:ToolsAndServices) => {
    return (
        <div id="used-skills">
            <div id="tools-skills" className="container-subtitle-async">
                <div className="skill-title-container">
                    <h3 className="subtitle">Les outils que j&apos;ai pu utilisé : </h3>
                </div>
                <div className="all-section-skill-container">
                    { 
                        props.tools.map( (name)=>{
                            return (
                                <div className="skill-container" key={name}>
                                    <i className={getIcon(name)}></i>
                                    <p>{ name }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="service-skills" className="container-subtitle-async">
                <div className="skill-title-container">
                    <h3 className="subtitle">Les services que j&apos;ai pu utilisé : </h3>
                </div>
                <div className="all-section-skill-container">
                    { 
                        props.services.map( (name)=>{
                            return (
                                <div className="skill-container" key={name}>
                                    <i className={getIcon(name)}></i>
                                    <p>{ name }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
