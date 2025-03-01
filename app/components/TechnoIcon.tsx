import React from 'react';

import { getIcon } from '~/data';

import '~/style/TechnoIcon.css';

type TechnoIconProps = {
  name: string;
  className?: string;
};

export const TechnoIcon = (props: TechnoIconProps) => {
  return (
    <div className={'technos-container ' + (props.className || '')}>
      <i className={getIcon(props.name)}></i>
      <p>{props.name}</p>
    </div>
  );
};

// TechnoIcon.defaultProps = {
//     className:""
// };
