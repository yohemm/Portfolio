import React, { useRef } from 'react';
import { WebTechno } from '~/components/WebTechno';
import { useRevealAnim } from '~/elements/hooks';

import '~/style/home.css';

export function meta() {
  return [
    { title: 'Yohem | Portfolio' },
    {
      name: 'description',
      content:
        'Portfolio de Yohem VAXELAIRE, programmeur Web Backend & System ayant pour objectif DevOps.'
    }
  ];
}

export default function Home() {
  const startDev = useRef<HTMLDivElement | null>(null);
  useRevealAnim(startDev);

  const aboutPortfolio = useRef<HTMLDivElement | null>(null);
  useRevealAnim(aboutPortfolio);

  return (
    <>
      <section id='about-me'>
        <h2>A propos de moi</h2>
        <div className='space-between-vertcal'>
          <p>
            Développeur passionné par le domaine du web, notamment en backend, mais aussi par les
            systèmes tels que la mise en place de serveurs, j&apos;aspire à devenir DevOps.
            Souhaitant maîtriser la mise en production continue, je me forme actuellement sur ce
            sujet.
          </p>
          <p>
            Autodidacte, j&apos;aime apprendre et développer mes compétences en réalisant de
            nouveaux projets ou en relevant des défis.
          </p>

          <p>
            Je suis également capable de créer des applications avec des outils tels que JavaFX et
            des jeux vidéo en Python avec des bibliothèques comme Pickle, Pygame, Tkinter et Socket.
          </p>

          <p>
            L&apos;univers des technologies IT me fascine, mais pour me professionnaliser, j&apos;ai
            choisi de me concentrer sur une expérience en développement backend et en administration
            système.
          </p>
          <p>
            Mes technologies favorites en développement web sont donc Node.js avec Express pour le
            backend, ainsi que React pour le front-end
          </p>
          <p>
            De plus, j&apos;ai appris à mettre en place des structures système de multi-hébergement
            avec des conteneurs.
          </p>
        </div>
      </section>
      <section id='starting-dev' className={'reveal-down'} ref={startDev}>
        <p>
          J&apos;ai commencé à créer des sites web durant mon collège et, depuis, je ne me suis
          jamais arrêté. Au fil des années, j&apos;ai pu développer mes compétences, notamment en
          UX/UI design, en référencement et en optimisation SEO. J&apos;ai également acquis une
          solide compréhension des logiques et du fonctionnement du backend, ce qui me permet de
          créer des applications complexes intégrant la gestion des utilisateurs, des pages
          d&apos;administration, des middlewares et des API.
        </p>
        <p>
          Durant mes études supérieures, je me suis spécialisé pour approfondir mes connaissances en
          langages de bas niveau et en systèmes. J&apos;ai ainsi appris à créer des scripts
          complexes en Bash, comme des explorateurs de fichiers, et à installer différents types de
          serveurs. Cet apprentissage m&apos;a également permis de découvrir les bases de la mise en
          place d&apos;une infrastructure réseau professionnelle sécurisée.
        </p>
      </section>
      <section id='about-portfolio' ref={aboutPortfolio}>
        <p className='reveal-opacity'>
          Ce portfolio utilise React ainsi que React Router. La mise en production du site est
          automatiquement gérée par un pipeline CI/CD qui inspecte et vérifie le code, versionne
          l&apos;application avec Semantic Release, génère et envoie la nouvelle image Docker vers
          des dépôts, puis met à jour le serveur de production via une connexion SSH.
        </p>
        <div className='ci-cd-container reveal-down'>
          <img src='/assets/github_actions.png' alt='Plan du la CI-CD de github' />
        </div>
        <p className='reveal-right'>
          L&apos;utilisation de React Router pourrait sembler superflue pour un projet de ce type,
          mais j&apos;ai souhaité profiter de la création de ce portfolio pour découvrir la version
          7 de la librairie.
        </p>
        <WebTechno
          back={['NodeJS', 'React-Router', 'Docker']}
          front={['React', 'TypeScript', 'CSS']}
        />
      </section>
    </>
  );
}
