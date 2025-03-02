import React from 'react';
import { TechnoIcon } from './TechnoIcon';

import '~/style/TechnosListing.css';

type TechnosListingProps = {
  technos: string[];
};

export const TechnosListing = (props: TechnosListingProps) => {
  return (
    <div className='technos-listing-item'>
      {props.technos.map((name) => {
        return <TechnoIcon name={name} key={name} className='animate' />;
      })}
    </div>
  );
};
