import React from 'react';

import '~/style/TitleAnimate.css';

type TitleAnimateProps = {
  children: React.ReactNode;
};

export const TitleAnimate = (props: TitleAnimateProps) => {
  return <h3 className='subtitle'> {props.children}</h3>;
};
