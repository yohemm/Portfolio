import React from 'react';
import { ProjectShowcases } from "~/components/ProjectShowcase";

export default function Projects() {
    return (
        <div className="projects-container">
            { <ProjectShowcases/> }
            {/* { projects.map(project => <ProjectShowcase key={project.name} name={project.displayName} image={project.image} technos={project.getTechnos()}>{project.presentation}</ProjectShowcase>) } */}
        </div>
    );
}