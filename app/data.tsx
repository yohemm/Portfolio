import type React from 'react';
import { NavLink } from 'react-router';
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
      <>
        <NavLink
          to='https://github.com/yohemm/VPS-Docker-Net'
          target='_blank'
          className='link-github-project '>
          <i className='devicon-github-original colored'></i>
          Source du Projet
        </NavLink>
        <p>
          Afin de centraliser de nombreux projets, j&apos;ai décidé de louer un VPS que j&apos;ai
          configuré pour automatiser les déploiements et superviser les différents projets.
        </p>
      </>
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
          Mais j&apos;ai aussi eu le temps de créer de nombreux projets personnels tels que des
          serveurs de mails, des serveurs d&apos;automatisation (n8n), des serveurs web / de jeux.
        </p>
        <p>
          De plus, une supervision a été mise en place en récupérant les informations du VPS et des
          conteneurs via Prometheus et son Node Exporter, qui envoient les données à Grafana pour le
          suivi et l’analyse.
        </p>
        <p>
          Pour terminer, un serveur Gitea, Portainer et des interfaces web d’administration de bases
          de données ont été mis en place pour faciliter la gestion des projets.
        </p>
        <div className='center-img'>
          <img
            src='/assets/docker/0.png'
            alt='Docker compose du site profesionnel hébergé sur le serveur VPS'
            height='400px'
          />
          <img
            src='/assets/docker/1.png'
            alt='deuxieme partie du docker compose du site profesionnel hébergé sur le VPS'
            height='400px'
          />
        </div>
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
      <>
        <NavLink
          to='https://github.com/yohemm/journal-du-dev'
          target='_blank'
          className='link-github-project '>
          <i className='devicon-github-original colored'></i>
          Source du Projet
        </NavLink>
        <p>
          Projet personnel ayant pour but de créer une communauté autour de la programmation dans le
          milieu francophone à l&apos;aide une application web.
        </p>
        <p>
          Cette application n&apos;est pas pas encore terminé bien qu&apos;elle inclue deja un
          system de d&apos;utilisateur avec des droits et images de profiles, l&apos;ajout de
          commentaire et la creation de nouveau cours.
        </p>
      </>
    ),
    children: (
      <section>
        <p>
          Site web ayant pour but d&apos;être une plateforme de cours textuels pour les francophones
          passionnés par l&apos;IT.
        </p>
        <p>
          Il inclut une gestion des droits et des accès utilisateurs, des sections de commentaires
          ainsi que des formulaires de rédaction de cours.
        </p>
        <p>
          <div className='center-img'>
            <img src='/assets/JDD/0.png' alt='Accueil du projet' height='400px' />
            <img src='/assets/JDD/2.png' alt='Profile utilisateur du projet' height='400px' />
          </div>
          L&apos;utilisateur peut changer son pseudo ainsi que son image de profil. Par la suite, un
          système de badges et de trophées sera implémenté.
        </p>
        <p>
          Ce projet m&apos;a permis de démontrer mes compétences en Node.js et notamment Express.
        </p>
        <p>
          Ce projet inclut un diagramme UML complexe:
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
    image: '/assets/polyclinique/ext.jpg',
    presentation: (
      <p>
        Alternance en tant que Technicien Système et Réseau au sein de la Polyclinique de
        Grande-Synthe.
      </p>
    ),
    intro: (
      <p>
        Alternances de 2 ans en temps que technicien systeme & réseau au sein de la Polyclinque De
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
        <div className='center-img'>
          <img src='/assets/polyclinique/ext.jpg' alt='Batiment de la PG-S' height='400px' />
        </div>
        <p>
          Mon alternance se déroulé dans le service informatique d&apos;une clinique, entreprise
          privé du milieux médical se qui m&apos;as permit de dévcouvrir le mileux des grosse
          entreprise mais aussi de comprendre et d&apos;appliqué la rigeur de la sécurité
          informatique pour garantir la disponibilité des services ciritique.
        </p>
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
    displayName: 'Création de site professionnel',
    image: '/assets/location/0.png',
    presentation: (
      <p>
        Site vitrine professionnel destiné à la prise de contact pour la location
        d&apos;hébergements, avec un panel d&apos;administration no-code pour une gestion
        simplifiée.
      </p>
    ),
    intro: (
      <div>
        <NavLink
          to='https://github.com/yohemm/apartment-rental'
          target='_blank'
          className='link-github-project '>
          <i className='devicon-github-original colored'></i>
          Source du Projet
        </NavLink>
        <p>
          Site vitrine de présentation de logements et prise de contact pour une entreprise de
          logement touristique.
        </p>
      </div>
    ),
    children: (
      <section>
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

        <div className='center-img'>
          <img
            src='/assets/location/0.png'
            alt='Docker compose le projet de site professionnel'
            height='400px'
          />
          <img src='/assets/location/2.png' alt='Accueil du projet' height='400px' />
        </div>
        <p>Le site web a été réalisé uniquement en JavaScript et PHP vanilla.</p>
        <p>
          Lors de la création du site, je ne maîtrisais pas de framework PHP, j’ai donc préféré
          consolider mes compétences en PHP vanilla.
        </p>
        <p>
          Le site étant uniquement un site de prospection/vitrine, l&apos;utilisation de PHP vanilla
          ne posait aucun problème.
        </p>
        <p>
          Je suis aussi responsable de l&apos;hébergement (via mon serveur Docker), de la zone DNS,
          mais aussi de la maintenance du site.
        </p>
      </section>
    ),
    toolsAndServices: null,
    webTechnos: {
      front: ['JavaScript', 'CSS'],
      back: ['PHP', 'PostGreSQL', 'Nginx']
    },
    presentationTechnos: ['PHP', 'PostGreSQL', 'Nginx']
  },
  {
    name: 'minepiece',
    displayName: 'Développement bénevole pour un communauté',
    image: '/assets/minepiece/0.png',
    presentation: <p>Mise en place de serveurs de production ainsi que développement en Java 8.</p>,
    intro: (
      <>
        <p>
          Création de multiples plugins pour le fonctionnement d’un serveur Minecraft, hébergement
          des bases de données et du site web depuis le serveur VPS.
        </p>
        <p>
          Le serveur Minecraft est en développement actif depuis plus de six ans. Il contient de
          multiples mods créés par d’autres développeurs, ainsi que de nombreux plugins créés ou mis
          à jour par mes soins.
        </p>
      </>
    ),
    children: (
      <section>
        <p>
          Je me suis intéressé à ce projet lors de sa création, d’abord en tant que simple membre du
          l&apos;équipe du serveur (animateur de la communauté), puis je me suis hissé dans la
          hiérarchie.
        </p>
        <p>
          Je suis actuellement le seul développeur de plugins du projet, et je suis responsable de
          la mise en place et de la maintenance de plusieurs serveurs du projet.
        </p>
        <div>
          <b>Plugins (Java & Spigot) :</b>
          <ul>
            <li>
              <p>Gestion du temps en jeu</p>
              <NavLink
                to='https://github.com/yohemm/Temporal-MC'
                target='_blank'
                className='link-github-project '>
                <i className='devicon-github-original colored'></i>
                Source du Projet
              </NavLink>
            </li>
            <li>
              <p>Blocs cassables avec réapparition et récompenses personnalisées</p>
              <NavLink
                to='https://github.com/yohemm/Breakable_Block'
                target='_blank'
                className='link-github-project '>
                <i className='devicon-github-original colored'></i>
                Source du Projet
              </NavLink>
            </li>
            <li>
              <p>Gestion du système de vente via HDV</p>
              <NavLink
                to='https://github.com/yohemm/HDV-minecraft-plugin'
                target='_blank'
                className='link-github-project '>
                <i className='devicon-github-original colored'></i>
                Source du Projet
              </NavLink>
            </li>
            <li>
              <p>Supervision de joueurs pour les membres du l&apos;équipe du serveur</p>
              <NavLink
                to='https://github.com/yohemm/ModoStick'
                target='_blank'
                className='link-github-project '>
                <i className='devicon-github-original colored'></i>
                Source du Projet
              </NavLink>
            </li>
            <li>
              <p>
                Participation au plugin principal, incluant la gestion des rôles, des factions et du
                territoire
              </p>
            </li>
          </ul>
          <div className='center-img'>
            <img
              src='/assets/minepiece/2.png'
              alt='Architecture de fichier du projet'
              height='400px'
            />
            <img src='/assets/minepiece/3.png' alt='Code du projet' height='400px' />
          </div>
        </div>
        <div>
          <b>Hébergements (Docker, PostgreSQL, MongoDB, Nginx, Apache) :</b>
          <ul>
            <li>
              <p>Hébergement du serveur web officiel</p>
            </li>
            <li>
              <p>Hébergement du serveur web du launcher client</p>
            </li>
            <li>
              <p>Hébergement de bases de données propres aux plugins</p>
            </li>
            <li>
              <p>
                Hébergement de bases de données propres au launcher du serveur (l’application
                client)
              </p>
            </li>
          </ul>
          <div className='center-img'>
            <img src='/assets/minepiece/0.png' alt='Launcher du projet' height='400px' />
            <img src='/assets/minepiece/1.png' alt='Hébergement web du projet' height='400px' />
          </div>
        </div>
      </section>
    ),
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
    intro: (
      <div>
        <NavLink
          to='https://github.com/yohemm/FlashCards'
          target='_blank'
          className='link-github-project '>
          <i className='devicon-github-original colored'></i>
          Source du Projet
        </NavLink>
        <p>
          Application web de révision réalisée lors d’un projet du BUT, utilisant un système de
          flashcards développée avec Laravel.
        </p>
      </div>
    ),
    children: (
      <section>
        <p>
          Lors de ce projet, j’ai pu développer le fonctionnement back-end, qui a été réalisé via un
          ORM et une API CRUD.
        </p>
        <p>
          Un système de middleware a aussi été mis en place pour limiter les accès nécessitant la
          création d’un compte.
        </p>
        <p>
          L’organisation de ce projet étant à définir en interne, j’ai également pu m’améliorer en
          gestion de projet et d’équipe, car j’ai dû m’improviser chef de projet afin de m’assurer
          du respect des deadlines. J’ai donc appris à assigner des tâches en fonction des
          compétences de chacun, tout en expliquant les autres parties du projet afin que personne
          ne soit mis de côté et que tout le monde puisse au moins comprendre la logique globale et,
          au mieux, répliquer le fonctionnement du serveur sur un autre projet.
        </p>
        <p>
          Le site fonctionne avec une API CRUD qui est appelée pour la moindre modification des
          données. Cette API sert donc d’intermédiaire entre l’interface graphique du navigateur et
          le serveur de base de données PostgreSQL.
        </p>
      </section>
    ),
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
    intro: (
      <p>
        Durant mes études au lycée, j’ai commencé à créer plusieurs jeux, notamment pour mes cours
        de NSI. J’ai aussi pu développer ces compétences lors de mes années de BUT.
      </p>
    ),
    children: (
      <section>
        <p>
          Lors de mes cours de NSI durant mon année de terminale, j’ai notamment découvert la
          librairie PyGame, ce qui m’a permis de créer un jeu en 2D dans le style Open World, avec
          un système de quêtes ouvertes permettant de débloquer des raccourcis sur la carte ou bien
          de nouveaux événements ou objets.
          <NavLink
            to='https://github.com/yohemm/peace-full-rpg'
            target='_blank'
            className='link-github-project '>
            <i className='devicon-github-original colored'></i>
            Source du Projet
          </NavLink>
        </p>
        <p>
          La version finale de ce jeu, avec la carte terminée et l’ensemble des quêtes, a
          malheureusement disparu, mais le système reste le même que celui du projet sur GitHub.
        </p>
        <p>Le jeu a été créé sans aucune classe Python, avec un paradigme fonctionnel.</p>
        <p>
          J’ai délégué la création de la carte, mais celle-ci étant très grande, cela rendait le
          travail très chronophage. J’ai donc dû créer un logiciel externe permettant la création de
          la carte via un outil que j’ai développé, qui est assez similaire à Paint.
        </p>
        <p>
          Durant mes vacances d’été entre ma terminale et mon BUT, j’ai eu l’occasion de développer
          un POC (proof of concept) d’un jeu 2D de combat en réseau, vu de dessus, avec des
          déplacements omnidirectionnels en 2D (gestion de l’angle et de la rotation du personnage).
          <NavLink
            to='https://github.com/yohemm/grab-the-player'
            target='_blank'
            className='link-github-project '>
            <i className='devicon-github-original colored'></i>
            Source du Projet
          </NavLink>
        </p>
        <p>
          Ce jeu inclut un client et un serveur ; le dialogue entre ces deux composants s’effectue
          via des sockets Python.
          <div className='center-img'>
            <img src='/assets/socket/0.png' alt='Prototype du projet' height='400px' />
            <img src='/assets/socket/1.png' alt='Prototype du projet' height='400px' />
          </div>
        </p>
        <p>
          Mon dernier projet de jeua été réalisé à l’aide de JavaFX. C’est un rogue-lite dans lequel
          on explore un donjon généré procéduralement. Le but est de descendre dans les étages en
          trouvant la clé détenue par le boss de chaque étage.
          <NavLink
            to='https://github.com/yohemm/AnOtherGame'
            target='_blank'
            className='link-github-project '>
            <i className='devicon-github-original colored'></i>
            Source du Projet
          </NavLink>
        </p>
        <div className='center-img'>
          <img src='/assets/game/0.png' alt='Prototype du projet' height='400px' />
          <img src='/assets/game/1.png' alt='carte du monde du projet' height='400px' />
          <img src='/assets/game/2.png' alt='Architecture code du projet' height='400px' />
        </div>
        <p>
          Lors de ce projet, j’ai dû réaliser un diagramme UML afin d’avoir une vue d’ensemble, mais
          aussi pour ne pas me perdre dans l’avancement du projet.
        </p>
      </section>
    ),
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
