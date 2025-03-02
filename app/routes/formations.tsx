import React from 'react';
import { SchoolCuriculum } from '~/components/SchoolCurriculum';

import '~/style/formation.css';
import { NavLink } from 'react-router';

export function meta() {
  return [
    { title: 'Yohem | Formations' },
    {
      name: 'description',
      content:
        'Portfolio de Yohem VAXELAIRE, programmeur Web Backend & System ayant pour objectif DevOps.'
    }
  ];
}

export default function Formations() {
  return (
    <>
      <SchoolCuriculum
        schoolSteps={[
          {
            diploma: 'Baccalauréat mention asséz bien',
            establishment: 'Lycée Georges Baumont, Saint-Dié-des-Vosges',
            name: 'Lycée',
            children: (
              <p>
                J’ai suivi une spécialité Maths et NSI (Numérique et Sciences Informatiques), où
                j’ai obtenu 20/20 aux deux épreuves du baccalauréat, aussi bien en TP pratique qu’en
                TP théorique sur papier dans cette derniére spécialité.
              </p>
            )
          },
          {
            diploma: 'BUT',
            establishment: "IUT du Littoral Côte d'Opale, Calais",
            name: 'Licence Technologique en Informatique',
            children: (
              <p>
                J’ai ensuite choisi un parcours en réseaux et systèmes informatiques afin d’être
                capable de mettre en place des serveurs professionnels et des infrastructures
                réseau, dans le but de diversifier mes compétences dans l’IT.
              </p>
            )
          }
        ]}
      />
      <section>
        <p>
          Dès le collège, avant même d’entamer mon cursus dans l’IT, j’ai commencé à me former et à
          apprendre la programmation. J’ai notamment créé de petits jeux vidéo à l’aide de moteurs
          graphiques, ainsi que des sites web, avant de me lancer dans le développement de
          véritables applications web.
        </p>
        <p>
          Tout au long de mes formations, j’ai continué à approfondir mes connaissances en me
          renseignant sur divers sujets et en réalisant de nouveaux projets personnels en parallèle.
        </p>
        <p>
          Vous pouvez notamment en retrouver une partie sur{' '}
          <NavLink to='https://github.com/yohemm' target='_blank'>
            mon profil GitHub.
          </NavLink>
        </p>
      </section>
    </>
  );
}
