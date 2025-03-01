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

import './app.css';

import { NavBar } from './components/NavBar';
import { FooterContact } from './components/FooterContact';
import { Loader } from './components/Loader';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  //   crossOrigin: "anonymous",
  // },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
    crossOrigin: 'anonymous'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <div className="" id="header">
              <h1>Yohem Vaxelaire</h1>
              <h2>Développeur Back-end.</h2>
              <p>
                Je m’appelle Yohem VAXELAIRE, et j’ai 18 ans. Je suis développeur informatique, fort
                de 6 ans d’expérience. Je suis passionné par la technologie et capable de travailler
                sur divers sujets, du développement web aux jeux vidéo. J’ai également de
                l’expérience dans le piratage et la création d’interfaces utilisateur optimisées
                pour le référencement (SEO). Je suis déterminé à continuer à apprendre et à me
                développer en tant que développeur professionnel.
              </p>
              <div className="">
                <NavLink to="/#contact-me" className="contact-btn">
                  Me Contacter
                </NavLink>
              </div>
            </div>
          </header>
          <main>
            <Outlet />
            <FooterContact
              linkAndName={{
                'About me': '/',
                Linkedin: 'https://www.linkedin.com/in/yohem-vaxelaire/',
                GitHub: 'https://github.com/yohemm',
                Contact: '/#my-contact'
              }}
            />
          </main>
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
