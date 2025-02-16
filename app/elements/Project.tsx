
import type React from "react";
import type { ReactNode } from "react";
import type { ToolsAndServices } from "~/components/ToolsAndServices";
import { WebTechno } from "~/components/WebTechno";

export interface IProject {
    name:string;
    intro: React.ReactNode
    children: React.ReactNode
}

export class WebProject implements IProject{
    name: string;
    children: ReactNode;
    webTechnos : WebTechno;
    intro: React.ReactNode;

    constructor(name:string, intro: React.ReactNode, children:ReactNode, webTechnos:WebTechno) {
        this.name = name;
        this.children = children;
        this.intro = intro;
        this.webTechnos = webTechnos;
    }
}
export class Project implements IProject{
    name: string;
    children: ReactNode;
    toolsAndServices : ToolsAndServices;
    intro: React.ReactNode;

    constructor(name:string, intro: React.ReactNode, children:ReactNode, toolsAndServices:ToolsAndServices) {
        this.name = name;
        this.children = children;
        this.intro = intro;
        this.toolsAndServices = toolsAndServices;
    }
}

// export function isAnProject(obj: any): obj is Project {
//     return 'name' in obj && 'children' in obj && 'toolsAndServices' in obj;
// }

// export function isAnWebProject(obj: any): obj is Project {
//     return 'name' in obj && 'children' in obj && 'webTechno' in obj;
// }

export const projects: (WebProject | Project)[] = [
    new WebProject(
        "test1", 
        (<>intro</>), 
        (<>node</>),
        {back:["PHP", "PostGreSQL"], front:["React", "CSS"]}),
    new Project("test2", 
        (<>intro</>), 
        (<>node</>),
        { tools:["Git"], services:["GitHub"]}),
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