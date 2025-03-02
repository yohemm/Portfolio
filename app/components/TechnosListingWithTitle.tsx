import React from 'react';

import { TitleAnimate } from './TitleAnimate';
import { TechnosListing } from './TechnosListing';

type TechnosListingWithTitleProps = {
  title: string;
  technos: string[];
};

export const TechnosListingWithTitle = (props: TechnosListingWithTitleProps) => {
  return (
    <div className='technos-listing-container'>
      <TitleAnimate>{props.title}</TitleAnimate>
      <TechnosListing {...props} />
    </div>
  );
};
