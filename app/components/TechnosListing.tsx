import React from 'react';

import { TitleAnimate } from './TitleAnimate';
import { TechnoIcon } from './TechnoIcon';

import '~/style/TechnosListing.css';

interface TechnosListing {
  title: string;
  technos: string[];
}

export const TechnosListing = (props: TechnosListing) => {
  return (
    <div className="technos-listing-container">
      <TitleAnimate>{props.title}</TitleAnimate>
      <div className="technos-listing-title">
        {props.technos.map((name) => {
          return <TechnoIcon name={name} key={name} />;
        })}
      </div>
    </div>
  );
};
