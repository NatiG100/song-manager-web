import React, { MouseEventHandler, ReactNode, useCallback } from 'react';
import Portal from '../Portal/index.tsx';
import { SurfaceContent, Backdrop } from './PortalElements.ts';

export interface SurfaceProps{
    children:ReactNode,
    onClose?:()=>void,
    isOpen:boolean
} 

export default function Surface({children,onClose=()=>{},isOpen}:SurfaceProps){
    if(!isOpen) return null;
    return(
        <Portal>
            <Backdrop onClick={onClose}>
                <SurfaceContent onClick={(event)=>{event.stopPropagation()}}>
                    {children}
                </SurfaceContent>
            </Backdrop>
        </Portal>
    );
}