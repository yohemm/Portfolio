'use client';

import { PROJECTS } from '~/data';
import React from 'react';
import { NavLink, useNavigate } from 'react-router';

type ProjectShowcaseProps = {
  name: string;
  displayName: string;
  image: string;
  presentation: React.ReactNode;
  presentationTechnos: string[];
};

export const ProjectShowcase = (props: ProjectShowcaseProps) => {
  useNavigate();
  const imageStyle: React.CSSProperties = {
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className="card">
      <div className="card-header" style={imageStyle}>
        <div className="card-header-content">
          <h4>{props.displayName}</h4>
        </div>
      </div>
      <div className="card-content">
        <div className="card-details">{props.presentation}</div>
        <NavLink className="formation-btn" to={'/projects/' + props.name}>
          Voir en détaille
        </NavLink>
        <p className="card-technos-overview">
          Techonologies utilisées :{' '}
          {props.presentationTechnos.map((techno, index) => {
            return index == props.presentationTechnos.length - 1 ? (
              <span key={techno}>
                <span>{techno}</span>.
              </span>
            ) : (
              <span key={techno}>
                <span>{techno}</span>{', '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export const ProjectShowcases = () => {
  return (
    <>
      {PROJECTS.map((project) => (
        <ProjectShowcase key={project.name + '-card'} {...project} />
      ))}
    </>
  );
};
