'use client';

import React, { useRef } from 'react';
import { TechnoIcon } from './TechnoIcon';

import '~/style/WebTechno.css';
import type { TechnoProps, WebTechnoProps } from '~/elements/Project';
import { useIsInViewport } from '~/elements/hooks';

const Techno = (props: TechnoProps) => {
  return (
    <>
      <TechnoIcon name={props.name} className={'pos-' + props.position} />
      {props.position == 1 ? (
        <span className='vert'></span>
      ) : props.position == 2 ? (
        <span className='horiz'></span>
      ) : (
        ''
      )}
    </>
  );
};

export const WebTechno = (props: WebTechnoProps) => {
  if (props.front.length === 0) return <p>Error front nb agrs</p>;
  if (props.back.length === 0) return <p>Error back nb agrs</p>;

  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <div
      id='web-techno-main'
      className={'web-techno-main ' + (isInViewport ? 'in-viewport' : '')}
      ref={ref}>
      <div id='web-techno-backend'>
        <h3>Back-end</h3>
        <div className='web-techno-icons-container'>
          {props.back.map(function (name, index) {
            return <Techno key={name + ' ' + index} name={name} position={index} />;
          })}
        </div>
      </div>
      <span></span>
      <div id='web-techno-frontend'>
        <h3>Front-end</h3>
        <div className='web-techno-icons-container'>
          <span className='anim'></span>
          {props.front.map(function (name, index) {
            return <Techno key={name + ' ' + index} name={name} position={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
