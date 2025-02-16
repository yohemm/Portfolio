import { ProjectShowing } from "~/components/ProjectShowing";

export default function Projects() {
    return (
        <ProjectShowing name="Gites hautes vosges" images={["./assets/location/0.png","./assets/location/1.png"]}>J’ai conçu et développé une plateforme en ligne dédiée à la location d’appartements, offrant une expérience utilisateur conviviale. Grâce à l’utilisation de PHP, JavaScript et PostgreSQL, j’ai créé un site web dynamique qui met en avant des logements avec des détails précis, des descriptions attrayantes et des images de haute qualité. Les utilisateurs peuvent facilement parcourir les annonces, vérifier la disponibilité des logements et obtenir des informations détaillées sur les tarifs. J’ai également intégré un système d’alerte pour mettre en avant certains logements. De plus, j’ai mis en place un panneau d’administration sécurisé pour une gestion simplifiée des logements et des réservations.</ProjectShowing>
    );
}