import type React from "react";
import { getWebTechno, type WebTechno } from "~/components/WebTechno";
import { getToolsAndServices, type ToolsAndServices } from "~/components/ToolsAndServices";
import { Project, WebProject } from "~/elements/Project";
export const projects: (WebProject | Project)[] = [
    new WebProject("test1", 
        "test1", 
        "/assets/game/0.PNG", 
        (<>presentation</>), 
        (<>intro</>), 
        (<>node</>),
        getWebTechno(["React", "CSS"],["PHP", "PostGreSQL"])),
    new Project("test2", 
        "test2", 
        "/assets/JDD/0.PNG", 
        (<>presentation</>), 
        (<>intro</>), 
        (<>node</>),
        getToolsAndServices(["Git"],["GitHub"]))
] 

export function getProjectByName(name:string) : Project|WebProject|null {
    for( let index=0; index < projects.length; index++){
        const project = projects[index];
        // console.log(project.name);
        if (project.name === name){
            return project;
        }
    }
    return null;
}