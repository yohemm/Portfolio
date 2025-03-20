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
    intro: (
      <p>
        Afin de centraliser de nombreux projets, j&apos;ai décidé de louer un VPS que j&apos;ai
        configuré pour automatiser les déploiements et superviser les différents projets.
      </p>
    ),
    children: (
      <section>
        <p>
          Les projets sont hébergés dans des conteneurs Docker avec un réseau Docker distinct par
          projet. Un reverse proxy Nginx avec certification automatique via Certbot sert de
          passerelle pour autoriser les applications à être contactées depuis l&apos;extérieur.
        </p>
        <p>
          Certains projets appartenant à des organisations, j&apos;ai donc dû mettre en place des
          accès SSH sécurisés avec une gestion précise des droits et des permissions, afin de
          respecter l&apos;isolation des projets.
        </p>
        <p>
          De plus, une supervision a été mise en place en récupérant les informations du VPS et des
          conteneurs via Prometheus et son Node Exporter, qui envoient les données à Grafana pour le
          suivi et l&apos;analyse.
        </p>
        <p>
          Pour terminer, un serveur Gitea, Portainer et des interfaces web d&apos;administration de
          bases de données ont été mis en place pour faciliter la gestion des projets.
        </p>
      </section>
    ),
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
    intro: (
      <p>
        Projet personnel ayant pour but de créer une application web avec une gestion des
        utilisateurs complexe.
      </p>
    ),
    children: (
      <section>
        <p>
          Site web ayant pour but d&apos;être une plateforme de cours textuels pour les francophones
          passionnés par l&apos;IT. Il inclut une gestion des droits et des accès utilisateurs, des
          sections de commentaires ainsi que des formulaires de rédaction de cours.
          L&apos;utilisateur peut changer son pseudo ainsi que son image de profil. Par la suite, un
          système de badges et de trophées sera implémenté. Ce projet inclut un diagramme UML
          complexe:
          <div className='center-img'>
            <img src='/assets/JDD/UML.png' alt='Diagramme UML de La BBD du projet' height='400px' />
          </div>
        </p>
      </section>
    ),
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
    intro: (
      <p>
        Alternance de 2 ans en tant que technicien système & réseau au sein de la Polyclinique de
        Grande-Synthe.
      </p>
    ),
    children: (
      <section>
        <ul>
          <li>
            Mise en place de serveur GLPI sur IIS avec agent installé par GPO sur les postes de
            travail, remontée des imprimantes et composants réseau.
          </li>
          <li>
            Participation à la rédaction de plans de sécurité (SégurNumérique et Plan Blanc
            Informatique).
          </li>
          <li>Manipulation de l&apos;Active Directory, de Hyper-V et configuration de switchs.</li>
          <li>Création d&apos;images ISO et CloneZilla via l&apos;outil SysPrep de Windows.</li>
          <li>Cartographie réseau, des périphériques finaux aux périphériques réseau.</li>
          <li>Rédaction de scripts PowerShell pour des automatisations simples.</li>
          <li>
            Mission à long terme de Help Desk pour résoudre les problèmes informatiques et réseaux
            du corps médical et de l&apos;administration.
          </li>
          <li>
            Renouvellement complet du parc d&apos;imprimantes, passage de l&apos;ensemble du parc
            d&apos;imprimantes de la marque Konica à Canon.
          </li>
        </ul>
      </section>
    ),
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
    intro: (
      <p>
        Site vitrine de présentation de logements et prise de contact pour une entreprise de
        logement touristique.
      </p>
    ),
    children: (
      <div>
        <p>Site web réalisé en PHP avec un panel d&apos;administration complexe permettant de :</p>
        <ul>
          <li>Remplir le planning</li>
          <li>Ajouter des administrateurs</li>
          <li>
            Afficher des alertes sur certaines pages (bannière publicitaire pour un logement/une
            page)
          </li>
          <li>Ajouter de nouvelles pages</li>
          <li>Modifier le contenu des pages</li>
          <li>Personnaliser le style des pages</li>
          <li>Consulter les messages de contact</li>
        </ul>
      </div>
    ),
    toolsAndServices: null,
    webTechnos: {
      front: ['JavaScript', 'CSS'],
      back: ['PHP', 'PostGreSQL', 'Ninx']
    },
    presentationTechnos: ['PHP', 'PostGreSQL', 'Nginx']
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
