import React from 'react';

import '~/style/TitleAnimate.css';

type TitleAnimateProps = {
  children: React.ReactNode;
};

export const TitleAnimate = (props: TitleAnimateProps) => {
  return (
    <div className='subtitle-container'>
      <h3 className='subtitle'> {props.children}</h3>
    </div>
  );
};
