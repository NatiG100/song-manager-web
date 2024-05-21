import React from 'react'
import { StatBoxDescription, StatBoxMain, StatBoxTitle } from './StatBoxElements.ts';

export interface StatBoxProps{
    title:string,
    description:string,
}

export default function StatBox({title,description}:StatBoxProps){
    return(
        <StatBoxMain>
            <StatBoxTitle>{title}</StatBoxTitle>
            <StatBoxDescription>{description}</StatBoxDescription>
        </StatBoxMain>
    );
}