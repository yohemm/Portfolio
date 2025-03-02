'use client';

import React from 'react';
import { NavLink, useNavigate } from 'react-router';

type FooterContactProps = {
  linkAndName: { [id: string]: string };
};

const externalPatern: RegExp = /http/;

export const FooterContact = (props: FooterContactProps) => {
  useNavigate();
  return (
    <footer id='my-contact'>
      <address>
        <ul>
          {Object.keys(props.linkAndName).map((key) => {
            return (
              <li key={key}>
                <NavLink
                  to={props.linkAndName[key]}
                  target={externalPatern.test(props.linkAndName[key]) ? '_blank' : ''}
                >
                  {key}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </address>
    </footer>
  );
};
