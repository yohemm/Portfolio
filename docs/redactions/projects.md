# Project

## [VPS](https://github.com/yohemm/VPS-Docker-Net)

    Technos:
        - Docker
        - Mail Services
        - Gitea Repo
        - Web Hosting
        - Nginx ReverseProxy
        - DB(mongo, posgresql, mysql)
        - Grafana X Prometheus
        - portainer
        - VPS Hostinger
        - Hostinger DNS AREA

Configuration d&apos;un VPS utilisé par plusieur personne pouvant se connecté par ssh. Plusieur site profesionnelles ainsi que des project personnelle sont hébergé dessus, comme par exemple se portfolio. Le serveur utilise nginx entant que reverse proxy et docker pour pour lancé de multiple application.

### Presentation

Serveur de multi-herbergements avec auto-certifation ssl, supervision et management des containers

### Intro

Afin de centraliser de nombreux projets, j&apos;ai décidé de louer un VPS que j&apos;ai configuré pour automatiser les déploiements et superviser les différents projets.

### Main

Les projets sont hébergés dans des conteneurs Docker avec un réseau Docker distinct par projet. Un reverse proxy Nginx avec certification automatique via Certbot sert de passerelle pour autoriser les applications à être contactées depuis l&apos;extérieur.

Certains projets appartenant à des organisations, j&apos;ai donc dû mettre en place des accès SSH sécurisés avec une gestion précise des droits et des permissions, afin de respecter l&apos;isolation des projets.

Mais j&apos;ai aussi eu le temps de créer de nombreux projets personnels tels que des serveurs de mails, des serveurs d&apos;automatisation (n8n), des serveurs web / de jeux.

De plus, une supervision a été mise en place en récupérant les informations du VPS et des conteneurs via Prometheus et son Node Exporter, qui envoient les données à Grafana pour le suivi et l’analyse.

Pour terminer, un serveur Gitea, Portainer et des interfaces web d’administration de bases de données ont été mis en place pour faciliter la gestion des projets.

## [JournalDuDev](https://github.com/yohemm/journal-du-dev)

    Technos:
      - NodeJS
      - CSS
      - JS
      - Express
      - mysql

Projects personnelle ayant pour but de créer une communauté autour de la programmation dans le milieu francophone.
Cette application n&apos;est pas pas encore terminé bien qu&apos;elle inclue deja un system de d&apos;utilisateur avec des droits et images de profiles, l&apos;ajout de commentaire et la creation de nouveau cours.

### Presentation

Project Web Personnel incluant un un gestion des utilisateurs et leur profile, section commentaire, création de cours/articles. Suivant un diagramme UML.

### Intro

Projet personnel ayant pour but de créer une application web avec une gestion des utilisateurs complexe.

### Main

Site web ayant pour but d&apos;être une plateforme de cours textuels pour les francophones passionnés par l&apos;IT.

Il inclut une gestion des droits et des accès utilisateurs, des sections de commentaires ainsi que des formulaires de rédaction de cours.

L&apos;utilisateur peut changer son pseudo ainsi que son image de profil. Par la suite, un système de badges et de trophées sera implémenté.

Ce projet m&apos;a permis de démontrer mes compétences en Node.js et notamment Express.

Ce projet inclut un diagramme UML complexe :


## Alternance PGS

    Technos:
      - Servers Windows (AD, Domain, RDS, Remote APP)
      - Document de Sécu
      - ISO/image CloneZilla
      - mise en place de serveur sous débian
      - mise en place de GLPI avec IIS

Alertance pour ma 2eme et 3eme année de licence professionnelle en temps que technicien réseau et systeme.
J&apos;ai pu approfondir mes connaissances en réseau.
Découvrir le monde proffessionnelle de l&apos;IT.
Participer à la réalisation de Plan de sécurité et autre document officielle.
Découvrir les serveur Windows (AD, IIS, DNS, GPO, Remote App, ...).

Mon alternance se déroulé dans le service informatique d&apos;une clinique, entreprise privé du milieux médical se qui m&apos;as permit de dévcouvrir le mileux des grosse entreprise mais aussi de comprendre et d&apos;appliqué la rigeur de la sécurité informatique pour garantir la disponibilité des services ciritique.

### Presentation

Alternance en tant que Technicien Système et Réseau au sein de la Polyclinique de Grande-Synthe.

### Intro

Alternances de 2 ans en temps que technicien systeme & réseau au sein de la Polyclinque De Grande-Synthe.

### Main

Mise en place de serveur GLPI sur IIS avec agent installé par GPO sur les postes de travaille, remonté des imprimentes et composant réseau.
Participation à la rédaction de plan de Sécurité (SégurNumérique et Plan Blanc innformatique).
Manipulation de l&apos;Active Directory, de Hyper-V et configuration de switchs.
Creation d&apos;image ISO et CloneZilla via l&apos;outil SysPrep de Windows.
Cartographie réseau, des périphériques finaux aux prériphérique réseau.
Rédaction de script PowerShell pour des petites automatisations.
Mission longtherme de Help Desk pour résoudre les problemes informatiques et réseaux du corps médicals et de l&apos;administration
Renouvellement complet du parc d&apos;imprimantes, passage de l&apos;ensemble du parc d&apos;imprimantes de la marque Konica à Canon.

Mon alternance se déroulé dans le service informatique d&apos;une clinique, entreprise privé du milieux médical se qui m&apos;as permit de dévcouvrir le mileux des grosse entreprise mais aussi de comprendre et d&apos;appliqué la rigeur de la sécurité informatique pour garantir la disponibilité des services ciritique.

## [Gites hautes vosges](https://github.com/yohemm/apartment-rental)

    Technos:
        - PHP Vanilla
        - PostGreSQL
        - JS
        - CSS
        - hébergement

Hebergement de serveur et base de donnée
Création d&apos;un site PHP incluant un panel admin no code permettant de modifier les pages et object du site comme désiré par le manager du site.

### Presentation

Site vitrine professionnel destiné à la prise de contact pour la location d’hébergements, avec un panel d’administration no-code pour une gestion simplifiée.

### Intro

Site vitrine de présentation de logements et prise de contact pour une entreprise de logement touristique.

### Main

Site web réalisé en PHP avec un panel d&apos;administration complexe permettant de :

- Remplir le planning
- Ajouter des administrateurs
- Afficher des alertes sur certaines pages (bannière publicitaire pour un logement/une page)
- Ajouter de nouvelles pages
- Modifier le contenu des pages
- Personnaliser le style des pages
- Consulter les messages de contact

Le site web a été réalisé uniquement en JavaScript, PHP et en vanilla.

Lors de la création du site, je ne maîtrisais pas de framework PHP, j’ai donc préféré consolider mes compétences en PHP vanilla.

Le site étant uniquement un site de prospection/vitrine, l&apos;utilisation de PHP vanilla ne posait aucun problème.

Je suis aussi responsable de l&apos;hébergement (via mon serveur Docker), de la zone DNS, mais aussi de la maintenance du site.

## MP

    Technos:
        - Java 8
        - spigot
        - hébergement

Hebergement de plusieurs serveur webs et base de donnée
Création de plusieur plugin minecraft dévelopé en JAVA 8.

### Presentation

Mise en place de serveurs de production ainsi que développement en Java 8.

### Intro
Création de multiples plugins pour le fonctionnement d’un serveur Minecraft, hébergement des bases de données et du site web depuis le serveur VPS.

Le serveur Minecraft est en développement actif depuis plus de six ans. Il contient de multiples mods créés par d’autres développeurs, ainsi que de nombreux plugins créés ou mis à jour par mes soins.


### Main

Je me suis intéressé à ce projet lors de sa création, d’abord en tant que simple membre du l&apos;équipe du serveur (animateur de la communauté), puis je me suis hissé dans la hiérarchie.
Je suis actuellement le seul développeur de plugins du projet, et je suis responsable de la mise en place et de la maintenance de plusieurs serveurs du projet.

**Plugins (Java & Spigot) :**
- Gestion du temps en jeu
- Blocs cassables avec réapparition et récompenses personnalisées
- Gestion du système de vente via HDV
- Supervision de joueurs pour les membres du l&apos;équipe du serveur
- Participation au plugin principal, incluant la gestion des rôles, des factions et du territoire

**Hébergements (Docker, PostgreSQL, MongoDB, Nginx, Apache) :**
- Hébergement du serveur web officiel
- Hébergement du serveur web du launcher client
- Hébergement de bases de données propres aux plugins
- Hébergement de bases de données propres au launcher du serveur (l’application client)

## [Flash card App](https://github.com/yohemm/FlashCards)

    Technos:
    - Laravels
    - mysql
    - CSS
    - JS
    - HTML

Application de carte de memorisation créer pour un project lors de ma licence professionnelle.
Avec un ORM et un CRUD.

### Presentation

Application de révision basée sur un système de flashcards, incluant une gestion des utilisateurs via un ORM et une structure CRUD.

### Intro
Application web de révision réalisée lors d’un projet du BUT, utilisant un système de flashcards développée avec Laravel.

### Main

Lors de ce projet, j’ai pu développer le fonctionnement back-end, qui a été réalisé via un ORM et une API CRUD.

Un système de middleware a aussi été mis en place pour limiter les accès nécessitant la création d’un compte.

L’organisation de ce projet étant à définir en interne, j’ai également pu m’améliorer en gestion de projet et d’équipe, car j’ai dû m’improviser chef de projet afin de m’assurer du respect des deadlines. J’ai donc appris à assigner des tâches en fonction des compétences de chacun, tout en expliquant les autres parties du projet afin que personne ne soit mis de côté et que tout le monde puisse au moins comprendre la logique globale et, au mieux, répliquer le fonctionnement du serveur sur un autre projet.

Le site fonctionne avec une API CRUD qui est appelée pour la moindre modification des données. Cette API sert donc d’intermédiaire entre l’interface graphique du navigateur et le serveur de base de données PostgreSQL.

## Jeux Video

- [peacefull RPG](https://github.com/yohemm/peace-full-rpg)
  Technos:
  - Python (pygame)
  - pickle
    RPG en 2D avec systeme de quetes, un application à était créer en plus pour la creation de la carte.
    Se jeux à était créer en tant que project pour mon année de terminal au lycée.
- [GrabThePlayer](https://github.com/yohemm/grab-the-player)
  Technos:
  - Python
  - Pygame
  - Socket
  - Pickle
    Jeux multi de combat joueur avec un client et un server qui dialogue en UDP.
- [An Other Game](https://github.com/yohemm/AnOtherGame)
  Technos:
  - UML diagram
  - Java
  - Java FX
    Jeux dans le style rogue lite incluant de la géneration procédural.

### Presentation

Création de multiples jeux vidéo, intégrant de la génération procédurale ainsi qu’une architecture client-serveur communiquant via des sockets.
Merci pour ton texte ! 

### Intro

Durant mes études au lycée, j’ai commencé à créer plusieurs jeux, notamment pour mes cours de NSI. J’ai aussi pu développer ces compétences lors de mes années de BUT.

### Main

Lors de mes cours de NSI, j’ai notamment découvert la librairie PyGame, ce qui m’a permis de créer un jeu en 2D dans le style Open World, avec un système de quêtes ouvertes permettant de débloquer des raccourcis sur la carte ou bien de nouveaux événements ou objets.
La version finale de ce jeu, avec la carte terminée et l’ensemble des quêtes, a malheureusement disparu, mais le système reste le même que celui du projet sur GitHub.

Le jeu a été créé sans aucune classe Python, avec un paradigme fonctionnel.

J’ai délégué la création de la carte, mais celle-ci étant très grande, cela rendait le travail très chronophage. J’ai donc dû créer un logiciel externe permettant la création de la carte via un outil que j’ai développé, qui est assez similaire à Paint.

Durant mes vacances d’été entre ma terminale et mon BUT, j’ai eu l’occasion de développer un POC (proof of concept) d’un jeu 2D de combat en réseau, vu de dessus, avec des déplacements omnidirectionnels en 2D (gestion de l’angle et de la rotation du personnage).
Ce jeu inclut un client et un serveur ; le dialogue entre ces deux composants s’effectue via des sockets Python.

Mon dernier projet de jeua été réalisé à l’aide de JavaFX. C’est un rogue-lite dans lequel on explore un donjon généré procéduralement. Le but est de descendre dans les étages en trouvant la clé détenue par le boss de chaque étage.
Lors de ce projet, j’ai dû réaliser un diagramme UML afin d’avoir une vue d’ensemble, mais aussi pour ne pas me perdre dans l’avancement du projet.