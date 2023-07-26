import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ProjetPerso } from './ProjetPerso';
import { ProjetPro } from './ProjetPro';
import { Formation } from './Formation';


const pro = ReactDOM.createRoot(document.querySelector('#pro #react-pro'));
const perso = ReactDOM.createRoot(document.querySelector('#react-pers'));
const formation = ReactDOM.createRoot( document.querySelector('#react-forma'));
formation.render(
  <div><Formation name="Auto-didacte" date="2016-2022">En apprentissage permanent...</Formation><Formation name="baccalauréat général" date="2020-2022"><p>( NSI, Maths Physique)</p> <p>Mention Assez bien</p></Formation><Formation name="BUT Informatique" date="2022-2024">En cours de formation...</Formation></div>
)

pro.render(
  <ProjetPro name="Location de Maison" imgsLink="./assets/location/0.png,./assets/location/1.png,./assets/location/2.png" >Dans le cadre de ce projet, j'ai développé une plateforme en ligne conviviale dédiée à la location de logements. En utilisant PHP, JavaScript et MySQL, j'ai créé un site web interactif qui présente des appartements avec leurs caractéristiques, des descriptions engageantes et des images captivantes. Les visiteurs peuvent naviguer aisément à travers les annonces, vérifier la disponibilité des logements et obtenir des informations complètes sur les tarifs. De plus, j'ai intégré un panneau d'administration sécurisé pour permettre une gestion facile des logements et des réservations, sans nécessiter de compétences techniques.</ProjetPro>
)

perso.render(
  <div><ProjetPerso name="Journal Du Dév" imgsLink="./assets/JDD/0.png,./assets/JDD/1.png">J'ai réalisé un site web dynamique axé sur la création d'une communauté passionnée de programmation. Le site offre des cours interactifs, des forums de discussion et des interfaces utilisateur conviviales. J'ai utilisé Node JS et MySQL pour développer ce projet, en veillant à ce qu'il soit sécurisé et facile à gérer grâce à un système d'administration dédié.</ProjetPerso><ProjetPerso name="Histoire de la programmation" imgsLink="./assets/histoirProg/0.png,./assets/histoirProg/1.png">Site Web avec mini-jeux sur l'histoire de la programmation réaliser durant mes années de lycée.</ProjetPerso></div>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
