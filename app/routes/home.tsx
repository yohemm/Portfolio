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
    <section className="" id="about-me">
      <h2 className="">A propos de moi</h2>
      <p>
        Bonjour, je suis Yohem VAXELAIRE, un développeur web franco-néo-zélandais ayant vécu une partie de mon enfance en Polynésie française. Je vis actuellement en France, où je suis étudiant en informatique au sein d&apos;une université à Calais. Le développement web est ma passion, et je suis toujours prêt à apprendre de nouvelles technologies. Dans mon portfolio, vous pourrez voir mes compétences et mon parcours professionnel, ainsi que mes réalisations en termes d’intégration et de design. Je suis convaincu que mon expérience et mes compétences me permettent de répondre efficacement à vos besoins en matière de développement web. J’ai hâte de partager mes réalisations avec vous et de vous aider à atteindre vos objectifs grâce à mon expertise en développement web. N’hésitez pas à me contacter pour en savoir plus sur mes compétences et mon expérience.
      </p>
    </section>
    </>);
}
