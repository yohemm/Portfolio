import type { Route } from "./+types/home";
import { Formation } from "app/components/Formation";
import { WebTechno } from "~/components/WebTechno";
import { ProjectShowing } from "~/components/ProjectShowing";
import { ToolsAndServices } from "~/components/ToolsAndServices";


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
        Bonjour, je suis Yohem VAXELAIRE, un développeur web franco-néo-zélandais ayant vécu une partie de mon enfance en Polynésie française. Je vis actuellement en France, où je suis étudiant en informatique au sein d'une université à Calais. Le développement web est ma passion, et je suis toujours prêt à apprendre de nouvelles technologies. Dans mon portfolio, vous pourrez voir mes compétences et mon parcours professionnel, ainsi que mes réalisations en termes d’intégration et de design. Je suis convaincu que mon expérience et mes compétences me permettent de répondre efficacement à vos besoins en matière de développement web. J’ai hâte de partager mes réalisations avec vous et de vous aider à atteindre vos objectifs grâce à mon expertise en développement web. N’hésitez pas à me contacter pour en savoir plus sur mes compétences et mon expérience.
      </p>
    </section>
    {/* <ToolsAndServices services={["GitHub"]} tools={["JavaScript", "CSS", "Git"]}/>
    <WebTechno front={["JavaScript", "CSS"]} back={["Node Js", "PostGreSQL", "PHP"]}/> */}
    {/* <Formation name="Auto-didacte" date="2016-2022">En apprentissage permanent...</Formation><Formation name="baccalauréat général" date="2020-2022"><p>( NSI, Maths Physique)</p> <p>Mention Assez bien</p></Formation><Formation name="BUT Informatique" date="2022-2024">En cours de formation...</Formation> */}
    </>);
}
