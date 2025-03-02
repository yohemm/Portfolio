'use client';

import React, { useEffect, useState } from 'react';

type SchoolCuriculumProps = {
  schoolSteps: SchoolStepProps[];
};

export type SchoolStepProps = {
  name: string;
  establishment: string;
  diploma: string;
  children: React.ReactNode;
};
export const SchoolCuriculum = (props: SchoolCuriculumProps) => {
  return (
    <section id='schoolcuriculum'>
      {props.schoolSteps.map((value) => {
        return (
          <SchoolStep
            key={value.name.replace(' ', '-')}
            name={value.name}
            establishment={value.establishment}
            diploma={value.diploma}>
            {' '}
            {value.children}{' '}
          </SchoolStep>
        );
      })}
    </section>
  );
};

export const SchoolStep = (props: SchoolStepProps) => {
  const [className, setClassName] = useState('');
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setClassName('path');
    setDelay(0.25);
    return () => {
      setClassName('');
      setDelay(0);
    };
  }, []);
  return (
    <div className='school-step'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        className='svg-animate'>
        <path fill='none' d='M0,0 L0,100' style={{ animationDelay: `0s` }} className={className} />
        <path
          fill='none'
          d='M0,100 L100,100'
          style={{ animationDelay: `${delay}s` }}
          className={className}
        />
        <path
          fill='none'
          d='M100,100 L100,0'
          style={{ animationDelay: `${delay * 2}s` }}
          className={className}
        />
        <path
          fill='none'
          d='M100,0 0,0'
          style={{ animationDelay: `${delay * 3}s` }}
          className={className}
        />
      </svg>
      <div className='text'>
        <h3>{props.name}</h3>
        <p className='diploma'>Diplôme obtenue : {props.diploma} </p>
        <p className='etablishement'>Etablissement : {props.establishment} </p>
        <div className='details'>{props.children}</div>
      </div>
    </div>
  );
};
