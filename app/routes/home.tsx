import type { Route } from "./+types/home";
import React from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
  return (<> 
    <section id="about-me">
      <h2>A propos de moi</h2>
      <div className="space-between-vertcal">
        <p>
        Développeur passionné par le domaine du web, notamment en backend, mais aussi par les systèmes, comme la mise en place de serveurs, j’aspire à devenir DevOps. Voulant maîtriser la mise en production continue, je me forme actuellement sur ce sujet.
        </p>
        <p>
        Autodidacte, j’aime apprendre et développer mes compétences en réalisant de nouveaux projets ou en relevant des défis.
        </p>

        <p>
        Je suis également capable de créer des applications avec des outils tels que JavaFX et des jeux vidéo en Python avec des bibliothèques comme Pickle, Pygame et Socket.
        </p>

        <p>
        L’univers des technologies IT me fascine, mais pour me professionnaliser, j’ai choisi de me concentrer sur une expérience en développement backend et en administration système.
        </p>
      </div>
    </section>
    </>);
}
