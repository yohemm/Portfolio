import type React from "react";
import { getWebTechno, type WebTechno } from "~/components/WebTechno";
import { getToolsAndServices, type ToolsAndServices } from "~/components/ToolsAndServices";
import { type Project } from "~/elements/Project";
// export const PROJECTS: (WebProject | Project)[] = [
//     {
//         name: "",
//         displayName: "",
//         image: "",
//         presentation: <></>,
//         intro: <></>,
//         mainContent: "",
//         toolsAndServices: {services:[], tools:[]},
//     }
// ]

export const PROJECTS: Project[] = [
    { name :"vps", 
        displayName: "Gestion d'un Server VPS multi services", 
        image: "/assets/docker/0.png", 
        presentation : (<>presentation</>), 
        intro:(<>intro</>), 
        children:(<>node</>),
        toolsAndServices:{tools:["Docker", "Git", "Nginx", "Bash" ,"Postfix", "Serveurs Web"],services:["Grafana","Prometheus","Gitea","Portainer","PostgreSQL", "Mongo", "Mysql","DNS"]},
        webTechnos:null,
        presentationTechnos: ["Docker", "Git", "Nginx", "Bash","Grafana","Prometheus"]
    },
    { name :"web-community", 
        displayName: "Aplication Web pour créer des cours sur l’IT", 
        image: "/assets/JDD/0.png", 
        presentation : (<>presentation</>), 
        intro:(<>intro</>), 
        children:(<>node</>),
        toolsAndServices: null,
        webTechnos:{front:["JavaScript", "CSS"], back:["NodeJS", "MySQL", "Express"]},
        presentationTechnos: ["NodeJS", "MySQL", "Express"]
    },
    { name :"gites-hautes-vosges", 
        displayName: "Creation de site profesionnelle", 
        image: "/assets/location/0.png", 
        presentation : (<>presentation</>), 
        intro:(<>intro</>), 
        children:(<>node</>),
        toolsAndServices: null,
        webTechnos:{front:["JavaScript", "CSS"], back:["PHP","PostGreSQL", "Hébergement"]},
        presentationTechnos: ["PHP","PostGreSQL", "Hébergement"]
    },
    { name :"minepiece", 
        displayName: "Développement bénevol pour un communité", 
        image: "/assets/docker/0.png", 
        presentation : (<>presentation</>), 
        intro:(<>intro</>), 
        children:(<>node</>),
        toolsAndServices: {tools:["Java", "Spigot", "Hébergement"], services:[]},
        webTechnos: null,
        presentationTechnos: ["Java", "Spigot", "Serveurs Webs", "Bases de Données"]
    },
    { name :"flash-card", 
        displayName: "Creation de site profesionnelle", 
        image: "/assets/location/0.png", 
        presentation : (<>presentation</>), 
        intro:(<>intro</>), 
        children:(<>node</>),
        toolsAndServices: null,
        webTechnos: {front:["JavaScript", "CSS"], back:["Laravel","MySQL"]},
        presentationTechnos: ["Laravel","MySQL", "ORM & CRUD"]
    },
    { name :"games", 
        displayName: "Creation de Petit Jeux video", 
        image: "/assets/game/0.png", 
        presentation : (<>presentation</>), 
        intro:(<>intro</>), 
        children:(<>node</>),
        toolsAndServices: {tools:["Java","Python", "NumPy"], services:[]},
        webTechnos: null,
        presentationTechnos: ["Java", "JavaFX","Python", "NumPy", "Pygame"]
    }
]

export function getProjectByName(name:string) : Project|null {
    for( let index=0; index < PROJECTS.length; index++){
        const project = PROJECTS[index];
        // console.log(project.name);
        if (project.name === name){
            return project;
        }
    }
    return null;
}



export const ICONS: {[id:string]:string} = {
    "MySQL": "devicon-mysql-plain colored",
    "PostGreSQL":"devicon-postgresql-plain colored",
    "MongoDB": "devicon-mongodb-plain colored",
    "PHP":"devicon-php-plain colored",
    "laravel": "devicon-laravel-original colored",
    "Node Js": "devicon-nodejs-plain colored",
    "Express": "devicon-express-original colored",
    "ReactRouter": "devicon-reactrouter-plain colored",
    "React": "devicon-react-original colored",
    "VueJs": "devicon-vuejs-plain colored",
    "JavaScript": "devicon-javascript-plain colored",
    "TypeScript": "devicon-typescript-plain colored",
    "CSS": "devicon-css3-plain colored",
    "Git": "devicon-git-plain colored",
    "GitHub": "devicon-github-original colored",
    "Java": "devicon-java-plain colored",
    "Python": "devicon-python-plain colored",
    "Bash": "devicon-bash-plain colored",
    "Debian": "devicon-debian-plain colored",
    "Docker": "devicon-docker-plain colored",
    "MarkDown": "devicon-markdown-original colored",
    "Prometheus": "devicon-prometheus-original colored",
    "Grafana": "devicon-grafana-plain colored",
    "Windows Server": "devicon-windows11-original colored",
    "NumPy": "devicon-numpy-plain colored",
    "Apache": "devicon-apache-plain colored",
    "Nginx": "devicon-nginx-original colored",
}
export const getIcon = (name:string):string => ICONS[name]?ICONS[name]:"";