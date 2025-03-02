'use client';

import React from 'react';

import { TechnosListingWithTitle } from './TechnosListingWithTitle';
import type { ToolsAndServicesProps } from '~/elements/Project';

export const getToolsAndServices = (tools: string[], services: string[]): ToolsAndServicesProps => {
  return { tools: tools, services: services };
};
export const ToolsAndServices = (props: ToolsAndServicesProps) => {
  return (
    <div className='container-subtitle-async tools-and-services-container'>
      {props.tools.length == 0 ? (
        ''
      ) : (
        <TechnosListingWithTitle technos={props.tools} title="Les outils que j'ai pu utilisé :" />
      )}
      {props.services.length == 0 ? (
        ''
      ) : (
        <TechnosListingWithTitle
          technos={props.services}
          title="Les services que j'ai pu utilisé :"
        />
      )}
    </div>
  );
};
