import type React from 'react';

export type ToolsAndServicesProps = {
  tools: string[];
  services: string[];
};
export type Project = {
  name: string;
  displayName: string;
  image: string;
  presentation: React.ReactNode;
  presentationTechnos: string[];
  webTechnos: WebTechnoProps | null;
  toolsAndServices: ToolsAndServicesProps | null;
  intro: React.ReactNode;
  children: React.ReactNode;
};

export type WebTechnoProps = {
  front: string[];
  back: string[];
};
export type TechnoProps = {
  name: string;
  position: number;
};
