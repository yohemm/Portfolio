import React from 'react';
import type { Route } from '../+types/root';
import { ProjectShowcases } from "~/components/ProjectShowcase";

import "~/style/projects.css"

export function meta({}:Route.MetaArgs){
    return [
        {title: "Yohem | Projects"},
        {name: 'description', content: 'Portfolio de Yohem VAXELAIRE, programmeur Web Backend & System ayant pour objectif DevOps.'}
    ]
}

export default function Projects() {
    return (
        <div className="projects-container">
            { <ProjectShowcases/> }
            {/* { projects.map(project => <ProjectShowcase key={project.name} name={project.displayName} image={project.image} technos={project.getTechnos()}>{project.presentation}</ProjectShowcase>) } */}
        </div>
    );
}