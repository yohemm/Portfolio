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
  <ProjetPro name="Location de Maison" imgsLink="./assets/location/0.png,./assets/location/1.png,./assets/location/2.png" ></ProjetPro>
)

perso.render(
  <div><ProjetPerso name="Journal Du Dév" imgsLink="./assets/JDD/0.png,./assets/JDD/1.png">Ici est la descripption</ProjetPerso><ProjetPerso name="Histoire de la programmation" imgsLink="./assets/histoirProg/0.png,./assets/histoirProg/1.png">Site Web avec mini-jeux sur l'histoire de la programmation</ProjetPerso></div>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
