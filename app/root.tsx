import React, { useState, useEffect } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from 'react-router';
import type { Route } from './+types/root';

import './style/spawnAnimation.css';
import './app.css';

import { NavBar } from './components/NavBar';
import { FooterContact } from './components/FooterContact';
import { Loader } from './components/Loader';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
    crossOrigin: 'anonymous'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <Loader/> */}
          <header>
            <NavBar />
            <div className='' id='header'>
              <h1>Yohem VAXELAIRE</h1>
              <h2>Développeur Back-end.</h2>
              <p>
                Je suis un programmeur informatique de 20 ans, passionné par les technologies web et
                systèmes. Je maîtrise la création d&apos;applications web complexes ainsi que leur
                hébergement automatisé via des chaînes CI/CD et du monitoring.
              </p>
              <p>
                Découvrez <NavLink to='/projects'>mes projets</NavLink> et{' '}
                <NavLink to='/skills'>compétences</NavLink>, et n&apos; hésitez pas à me contacter
                pour toute collaboration ou échange autour de la tech!
              </p>
              <div className=''>
                <NavLink to='/#contact-me' className='contact-btn'>
                  Me Contacter
                </NavLink>
              </div>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
          <FooterContact
            linkAndName={{
              'About me': '/',
              Linkedin: 'https://www.linkedin.com/in/yohem-vaxelaire/',
              GitHub: 'https://github.com/yohemm',
              Contact: '/#my-contact'
            }}
          />
        </>
      )}{' '}
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
