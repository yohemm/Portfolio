
import type React from "react";
import type { ToolsAndServices } from "~/components/ToolsAndServices";
import { WebTechno } from "~/components/WebTechno";

// const mergeArrayString = (arrays:string[][]): string[] => {
//     const res:string[] = [];
//     for (const arrayId in arrays) {
//         if (Object.prototype.hasOwnProperty.call(arrays, arrayId)) {
//             const array = arrays[arrayId];
            
//             for (const elementId in array) {
//                 if (Object.prototype.hasOwnProperty.call(array, elementId)) {
//                     const element = array[elementId];
                    
//                     res.push(element);

//                 }
//             }

//         }
//     }
//     return res;
    
// }

// export interface IProject {
//     name:string;
//     displayName:string;
//     image:string;
//     presentation: React.ReactNode;
//     intro: React.ReactNode;
//     mainContent: React.ReactNode;
//     getTechnos(): string[];
// }
export interface Project {
    name:string;
    displayName:string;
    image:string;
    presentation: React.ReactNode;
    presentationTechnos:string[];
    webTechnos:WebTechno | null;
    toolsAndServices: ToolsAndServices | null;
    intro: React.ReactNode;
    children: React.ReactNode;
}

// export class WebProject implements IProject{
//     name: string;
//     displayName: string;
//     image: string;
//     mainContent: ReactNode;
//     webTechnos : WebTechno;
//     presentation: React.ReactNode;
//     intro: React.ReactNode;

//     constructor(name:string, displayName:string, image:string, presentation: React.ReactNode, intro: React.ReactNode, mainContent:ReactNode, webTechnos:WebTechno) {
//         this.name = name;
//         this.displayName = displayName;
//         this.image= image;
//         this.mainContent = mainContent;
//         this.intro = intro;
//         this.presentation = presentation;
//         this.webTechnos = webTechnos;
//     }
//     getTechnos(): string[] {
//         return mergeArrayString([this.webTechnos.back, this.webTechnos.front]);
//     }
// }
// export class Project implements IProject{
//     name: string;
//     displayName: string;
//     image: string;
//     presentation: ReactNode;
//     mainContent: ReactNode;
//     intro: React.ReactNode;
//     toolsAndServices : ToolsAndServices;
    
//     constructor(name:string, displayName:string, image:string, presentation: React.ReactNode, intro: React.ReactNode, mainContent:ReactNode, toolsAndServices:ToolsAndServices) {
//         this.name = name;
//         this.displayName = displayName;
//         this.image= image;
//         this.mainContent = mainContent;
//         this.intro = intro;
//         this.presentation = presentation;
//         this.toolsAndServices = toolsAndServices;
//     }
//     getTechnos(): string[] {
//         return mergeArrayString([this.toolsAndServices.tools, this.toolsAndServices.services]);
//     }
// }

// export function isAnProject(obj: any): obj is Project {
    //     return 'name' in obj && 'mainContent' in obj && 'toolsAndServices' in obj;
    // }
    
    // export function isAnWebProject(obj: any): obj is Project {
//     return 'name' in obj && 'mainContent' in obj && 'webTechno' in obj;
// }

// name:string;
// image:string;
// displayName:string;
// presentation: React.ReactNode;
// intro: React.ReactNode;
// mainContent: React.ReactNode;