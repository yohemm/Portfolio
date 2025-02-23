import React from 'react';
import type { Route } from './+types/skills';

export function meta({}:Route.MetaArgs){
    return [
        {title: "Yohem | Compétances"},
        {name: 'description', content: 'Portfolio de Yohem VAXELAIRE, programmeur Web Backend & System ayant pour objectif DevOps.'}
    ]
}

export default function Skills() {
    return <div> Test Skills </div>;
}