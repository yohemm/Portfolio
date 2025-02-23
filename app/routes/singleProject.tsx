import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router"
import { ToolsAndServices } from "~/components/ToolsAndServices";
import { WebTechno } from "~/components/WebTechno";
import { getProjectByName } from '~/data';
import { type Project } from "~/elements/Project";

import "~/style/singleProject.css"
import type { Route } from './+types/singleProject';

export function meta({}:Route.MetaArgs){
    return [
        {title: "Yohem | Projects"},
        {name: 'description', content: 'Portfolio de Yohem VAXELAIRE, programmeur Web Backend & System ayant pour objectif DevOps.'}
    ]
}


// export async function clientLoader() {
//     const projects = await getProjects(){}
// }

export default function SingleProject(){
    const navigate = useNavigate();
    const params = useParams();
    if(!params.project) {navigate('/projects'); return;};
    if(!getProjectByName(params.project)) {navigate('/projects'); return;}
    const [isWebPoject, setIsWebProject] = useState(()=>false);
    const [isToolsAndTServcices, setIsToolsAndTServcices] = useState(false);
    
    const project: Project | null= getProjectByName(params.project);

    useEffect(()=>{
        if(project){
            setIsToolsAndTServcices(project.toolsAndServices?true:false);
            if(project.webTechnos){
                if(project.webTechnos.back.length < 2 || project.webTechnos.front.length < 2)setIsWebProject(false);
                else setIsWebProject(true)
            }
        }
        return ;
    }, [])
    
    return(
        <>
            {
                project?(<>
                    <h2>{project.displayName}</h2>
                    { project.intro }
                    { isWebPoject && project.webTechnos ? (<WebTechno {...project.webTechnos} />):"" }
                    { isToolsAndTServcices && project.toolsAndServices ? (<ToolsAndServices {...project.toolsAndServices}/>):"" }
                    { project.children }
                </>):(
                    <p>Error, empty path</p>
                )
            }
            
        </>
    )
}