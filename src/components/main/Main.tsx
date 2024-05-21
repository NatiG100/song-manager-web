import React from 'react'
import { MainSection, MainWrapper } from './MainElements.ts';
export default function Main({children}){
    return(
        <MainSection>
            <MainWrapper>
                {children}
            </MainWrapper>
        </MainSection>
    );
}