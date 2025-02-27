'use client';

import React from 'react';
import { TechnoIcon } from './TechnoIcon';

import '~/style/WebTechno.css';

export interface WebTechno {
  front: string[];
  back: string[];
}

export const getWebTechno = (front: string[], back: string[]): WebTechno => {
  return { front: front, back: back };
};

interface Techno {
  name: string;
  position: number;
}
const Techno = (props: Techno) => {
  return (
    <>
      <TechnoIcon name={props.name} className={'pos-' + props.position} />
      {props.position == 1 ? (
        <span className="vert"></span>
      ) : props.position == 2 ? (
        <span className="horiz"></span>
      ) : (
        ''
      )}
    </>
  );
};

export const WebTechno = (props: WebTechno) => {
  if (props.front.length === 0) return <p>Error front nb agrs</p>;
  if (props.back.length === 0) return <p>Error back nb agrs</p>;

  return (
    <div id="web-techno-main" className="web-techno-main">
      <div id="web-techno-backend">
        <h3>Back-end</h3>
        <div className="web-techno-icons-container">
          {props.back.map(function (name, index) {
            return <Techno key={name + ' ' + index} name={name} position={index} />;
          })}
        </div>
      </div>
      <span></span>
      <div id="web-techno-frontend">
        <h3>Front-end</h3>
        <div className="web-techno-icons-container">
          <span className="anim"></span>
          {props.front.map(function (name, index) {
            return <Techno key={name + ' ' + index} name={name} position={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
