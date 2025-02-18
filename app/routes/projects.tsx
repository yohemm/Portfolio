import { data } from "react-router";
import { projectShowcases } from "~/components/ProjectShowcase";
import { projects } from "~/elements/Project";

export default function Projects() {
    return (
        <div className="projects-container">
            { projectShowcases() }
            {/* { projects.map(project => <ProjectShowcase key={project.name} name={project.displayName} image={project.image} technos={project.getTechnos()}>{project.presentation}</ProjectShowcase>) } */}
        </div>
    );
}