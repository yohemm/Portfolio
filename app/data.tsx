import type React from 'react';
import { type Project } from '~/elements/Project';

export const PROJECTS: Project[] = [
  {
    name: 'vps',
    displayName: "Gestion d'un serveur VPS multi-service",
    image: '/assets/docker/0.png',
    presentation: (
      <p>
        Serveur multi-hébergement avec auto-certification SSL, supervision et gestion des
        conteneurs.
      </p>
    ),
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: {
      tools: ['Docker', 'Git', 'Nginx', 'Bash', 'Postfix', 'Serveurs Web'],
      services: [
        'Grafana',
        'Prometheus',
        'Gitea',
        'Portainer',
        'PostgreSQL',
        'Mongo',
        'Mysql',
        'DNS'
      ]
    },
    webTechnos: null,
    presentationTechnos: ['Docker', 'Git', 'Nginx', 'Bash', 'Grafana', 'Prometheus']
  },
  {
    name: 'web-community',
    displayName: "Application web pour créer des cours sur l'IT",
    image: '/assets/JDD/0.png',
    presentation: (
      <p>
        Projet web personnel incluant une gestion des utilisateurs et de leur profil, une section
        commentaires, ainsi que la création de cours et d&apos;articles, le tout suivant un
        diagramme UML.
      </p>
    ),
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: null,
    webTechnos: {
      front: ['JavaScript', 'CSS'],
      back: ['NodeJS', 'MySQL', 'Express']
    },
    presentationTechnos: ['NodeJS', 'MySQL', 'Express']
  },
  {
    name: 'work-study',
    displayName: 'Alternance en Licence Professionnelle',
    image: '/assets/JDD/0.png',
    presentation: (
      <p>
        Alternance en tant que Technicien Système et Réseau au sein de la Polyclinique de
        Grande-Synthe.
      </p>
    ),
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: null,
    webTechnos: null,
    presentationTechnos: [
      'PowerShell',
      'Active Directory',
      'IIS',
      'GLPSI',
      'Refonte réseau',
      'Plan de sécurité'
    ]
  },
  {
    name: 'gites-hautes-vosges',
    displayName: 'Creation de site profesionnel',
    image: '/assets/location/0.png',
    presentation: (
      <p>
        Site vitrine professionnel destiné à la prise de contact pour la location
        d&apos;hébergements, avec un panel d&apos;administration no-code pour une gestion
        simplifiée.
      </p>
    ),
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: null,
    webTechnos: {
      front: ['JavaScript', 'CSS'],
      back: ['PHP', 'PostGreSQL', 'Hébergement']
    },
    presentationTechnos: ['PHP', 'PostGreSQL', 'Hébergement']
  },
  {
    name: 'minepiece',
    displayName: 'Développement bénevole pour un communauté',
    image: '/assets/docker/0.png',
    presentation: <p>Mise en place de serveurs de production ainsi que développement en Java 8.</p>,
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: {
      tools: ['Java', 'Spigot', 'Hébergement'],
      services: []
    },
    webTechnos: null,
    presentationTechnos: ['Java', 'Spigot', 'Serveurs Webs', 'Bases de Données']
  },
  {
    name: 'flash-card',
    displayName: 'Application Web de Révision',
    image: '/assets/location/0.png',
    presentation: (
      <p>
        Application de révision basée sur un système de flashcards, incluant une gestion des
        utilisateurs via un ORM et une structure CRUD.
      </p>
    ),
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: null,
    webTechnos: { front: ['JavaScript', 'CSS'], back: ['Laravel', 'MySQL'] },
    presentationTechnos: ['Laravel', 'MySQL', 'ORM & CRUD']
  },
  {
    name: 'games',
    displayName: 'Création de petits jeux vidéo',
    image: '/assets/game/0.png',
    presentation: (
      <p>
        Création de multiples jeux vidéo, intégrant de la génération procédurale ainsi qu&apos;une
        architecture client-serveur communiquant via des sockets.
      </p>
    ),
    intro: <>intro</>,
    children: <>node</>,
    toolsAndServices: { tools: ['Java', 'Python', 'NumPy'], services: [] },
    webTechnos: null,
    presentationTechnos: ['Java', 'JavaFX', 'Python', 'NumPy', 'Pygame']
  }
];

export function getProjectByName(name: string): Project | null {
  for (let index = 0; index < PROJECTS.length; index++) {
    const project = PROJECTS[index];
    // console.log(project.name);
    if (project.name === name) {
      return project;
    }
  }
  return null;
}

export const ICONS: { [id: string]: string } = {
  MySQL: 'devicon-mysql-plain colored',
  PostGreSQL: 'devicon-postgresql-plain colored',
  MongoDB: 'devicon-mongodb-plain colored',
  PHP: 'devicon-php-plain colored',
  Laravel: 'devicon-laravel-original colored',
  NodeJS: 'devicon-nodejs-plain colored',
  Express: 'devicon-express-original colored',
  'React-Router': 'devicon-reactrouter-plain colored',
  React: 'devicon-react-original colored',
  VueJs: 'devicon-vuejs-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  TypeScript: 'devicon-typescript-plain colored',
  CSS: 'devicon-css3-plain colored',
  Git: 'devicon-git-plain colored',
  GitHub: 'devicon-github-original colored',
  Java: 'devicon-java-plain colored',
  Python: 'devicon-python-plain colored',
  Bash: 'devicon-bash-plain colored',
  Debian: 'devicon-debian-plain colored',
  Docker: 'devicon-docker-plain colored',
  MarkDown: 'devicon-markdown-original colored',
  Prometheus: 'devicon-prometheus-original colored',
  Grafana: 'devicon-grafana-plain colored',
  'Windows Server': 'devicon-windows11-original colored',
  NumPy: 'devicon-numpy-plain colored',
  Apache: 'devicon-apache-plain colored',
  Nginx: 'devicon-nginx-original colored'
};
export const getIcon = (name: string): string => (ICONS[name] ? ICONS[name] : '');
