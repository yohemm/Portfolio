import { PROJECTS } from "~/data";
import React from 'react';
import { NavLink, useNavigate } from "react-router";

interface ProjectShowcase {
    name: string;
    displayName: string;
    image: string;
    children: React.ReactNode;
    technos: string[];
}

export const ProjectShowcase = (props:ProjectShowcase) => {
    const navigate= useNavigate();
    const imageStyle:React.CSSProperties = {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
    }
    return (
        
        <div className="card">
            <div className="card-header" style={ imageStyle }>
                <div className="card-header-content">
                    <h4>{props.displayName}</h4>
                </div>
            </div>
            <div className="card-content">
                <div className="card-details">{props.children}</div>
                <NavLink className="formation-btn" to={ "/projects/" + props.name }>Voir en détaille</NavLink>
                <p className="card-technos-overview">Techonologies utilisées : { props.technos.map((techno, index) => {
                    return index==props.technos.length-1?<span key={techno}><span>{techno}</span>.</span>:<span key={techno}><span>{techno}</span>,</span>
                })}</p>
            </div>
        </div>
    );
}

export const ProjectShowcases = () => {
    return <>{PROJECTS.map(project => <ProjectShowcase key={project.name + "-card"} name={project.name} image={project.image} technos={project.getTechnos()} displayName={project.displayName} >{project.presentation}</ProjectShowcase>)}</>
}