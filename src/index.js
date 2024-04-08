import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ProjetPerso } from './ProjetPerso';
import { ProjetPro } from './ProjetPro';
import { Formation } from './Formation';


const pro = ReactDOM.createRoot(document.querySelector('#pro #projets-profesionel'));
const perso = ReactDOM.createRoot(document.querySelector('#projets-personel'));
const formation = ReactDOM.createRoot( document.querySelector('#formations'));
formation.render(
  <div><Formation name="Auto-didacte" date="2016-2022">En apprentissage permanent...</Formation><Formation name="baccalauréat général" date="2020-2022"><p>( NSI, Maths Physique)</p> <p>Mention Assez bien</p></Formation><Formation name="BUT Informatique" date="2022-2024">En cours de formation...</Formation></div>
)

// VPS appart JDD

pro.render(
  
  <div>
    <ProjetPro name="Gites hautes vosges" imgsLink="./assets/location/0.png,./assets/location/1.png" >J’ai conçu et développé une plateforme en ligne dédiée à la location d’appartements, offrant une expérience utilisateur conviviale. Grâce à l’utilisation de PHP, JavaScript et PostgreSQL, j’ai créé un site web dynamique qui met en avant des logements avec des détails précis, des descriptions attrayantes et des images de haute qualité. Les utilisateurs peuvent facilement parcourir les annonces, vérifier la disponibilité des logements et obtenir des informations détaillées sur les tarifs. J’ai également intégré un système d’alerte pour mettre en avant certains logements. De plus, j’ai mis en place un panneau d’administration sécurisé pour une gestion simplifiée des logements et des réservations.</ProjetPro>
    <ProjetPro name="Journal Du Dév" imgsLink="./assets/JDD/0.png,./assets/JDD/1.png" >J’ai créé un site web communautaire dédié à l’apprentissage de la programmation. Ce site offre des cours interactifs, des forums de discussion et une interface utilisateur intuitive. Le site a été développé en utilisant Node.js et MySQL, avec un accent particulier sur la sécurité et la facilité de gestion grâce à un système d’administration intégré. Les cours sont organisés par chapitres avec un système de commentaires, et les utilisateurs ont différents niveaux d’accès qui leur permettent de consulter, commenter ou créer des leçons.</ProjetPro>
    <ProjetPro name="Serveur multihost" imgsLink="./assets/docker/0.png,./assets/docker/1.png" >J’ai mis en place un projet d’hébergement autonome permettant la configuration de plusieurs serveurs d’hébergement au sein d’un VPS sous Docker avec un reverse-proxy utilisant un serveur Nginx. Cela permet de relier les URL externes aux serveurs Docker internes. J’héberge différents types de serveurs, y compris des serveurs web et des serveurs de jeux vidéo pour des entreprises à des tarifs abordables. J’ai également une section “labs” pour héberger plusieurs projets en cours de développement.</ProjetPro>
  </div>
)

// Socket Game
perso.render(
  <div>
    <ProjetPerso name="Jeu de sockets en C" imgsLink="./assets/socket/0.png,./assets/socket/1.png">Dans le cadre de ce projet, j’ai mis en œuvre un système de communication entre un serveur et un client en utilisant le langage de programmation C. Le but principal de ce projet était de permettre à deux processus distincts de jouer à un jeu de tic-tac-toe. Pour cela, j’ai utilisé des sockets, qui sont des points de terminaison de communication entre ces deux processus. Ce projet a été réalisé en équipe, mettant l’accent sur la collaboration et la coordination pour assurer un développement efficace et une exécution sans faille du jeu.</ProjetPerso>
    <ProjetPerso name="Jeu avec génération procédurale" imgsLink="./assets/game/0.png,./assets/game/1.png">J’ai créé un jeu de type “RogueLike” dont l’objectif est de descendre le plus bas possible en trouvant la salle de chaque étage qui contient les escaliers. Chaque étage est généré de manière procédurale en fonction de la difficulté du jeu, du thème de l’étage et du niveau de l’étage. La génération est optimisée et intelligente pour assurer la disponibilité de toutes les salles nécessaires et un temps de création extrêmement court.</ProjetPerso>
  </div>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
