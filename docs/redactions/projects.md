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

Configuration d'un VPS utilisé par plusieur personne pouvant se connecté par ssh. Plusieur site profesionnelles ainsi que des project personnelle sont hébergé dessus, comme par exemple se portfolio. Le serveur utilise nginx entant que reverse proxy et docker pour pour lancé de multiple application.

### Presentation

Serveur de multi-herbergements avec auto-certifation ssl, supervision et management des containers

### Intro

Afin de centraliser de nombreux projets, j'ai décidé de louer un VPS que j'ai configuré pour automatiser les déploiements et superviser les différents projets.

### Main

Les projets sont hébergés dans des conteneurs Docker avec un réseau Docker distinct par projet. Un reverse proxy Nginx avec certification automatique via Certbot sert de passerelle pour autoriser les applications à être contactées depuis l'extérieur.

Certains projets appartenant à des organisations, j'ai donc dû mettre en place des accès SSH sécurisés avec une gestion précise des droits et des permissions, afin de respecter l'isolation des projets.

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
Cette application n'est pas pas encore terminé bien qu'elle inclue deja un system de d'utilisateur avec des droits et images de profiles, l'ajout de commentaire et la creation de nouveau cours.

### Presentation

Project Web Personnel incluant un un gestion des utilisateurs et leur profile, section commentaire, création de cours/articles. Suivant un diagramme UML.

## Alternance PGS

    Technos:
      - Servers Windows (AD, Domain, RDS, Remote APP)
      - Document de Sécu
      - ISO/image CloneZilla
      - mise en place de serveur sous débian
      - mise en place de GLPI avec IIS

Alertance pour ma 2eme et 3eme année de licence professionnelle en temps que technicien réseau et systeme.
J'ai pu approfondir mes connaissances en réseau.
Découvrir le monde proffessionnelle de l'IT.
Participer à la réalisation de Plan de sécurité et autre document officielle.
Découvrir les serveur Windows (AD, IIS, DNS, GPO, Remote App, ...)

## Presentation

Alternance en tant que Technicien Système et Réseau au sein de la Polyclinique de Grande-Synthe.

## [Gites hautes vosges](https://github.com/yohemm/apartment-rental)

    Technos:
        - PHP Vanilla
        - PostGreSQL
        - JS
        - CSS
        - hébergement

Hebergement de serveur et base de donnée
Création d'un site PHP incluant un panel admin no code permettant de modifier les pages et object du site comme désiré par le manager du site.

### Presentation

Site vitrine professionnel destiné à la prise de contact pour la location d’hébergements, avec un panel d’administration no-code pour une gestion simplifiée.

## MP

    Technos:
        - Java 8
        - spigot
        - hébergement

Hebergement de plusieurs serveur webs et base de donnée
Création de plusieur plugin minecraft dévelopé en JAVA 8.

### Presentation

Mise en place de serveurs de production ainsi que développement en Java 8.

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
