'use client';

import React from 'react';

import { TechnosListing } from './TechnosListing';


export interface ToolsAndServices {
    tools: string[];
    services: string[];
}
export const getToolsAndServices = (tools: string[], services: string[]): ToolsAndServices => {
    return {tools: tools, services: services};
}
export const ToolsAndServices = (props:ToolsAndServices) => {
    return (
        <div id="container-subtitle-async tools-and-services-container">
            {props.tools.length == 0?"":(
                <TechnosListing technos={props.tools} title='Les outils que j&apos;ai pu utilisé :'/>
            )}
            {props.services.length==0?"":(
                <TechnosListing technos={props.services} title='Les services que j&apos;ai pu utilisé :'/>
            )}
        </div>
    );
}
