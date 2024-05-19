import React from 'react'
import { Avatar, NavbarLink, NavbarLinkList, NavbarMain, NavbarWrapper } from './NavbarElements.ts';

export default function Navbar(){
    return(
        <NavbarMain>
            <NavbarWrapper>
                <NavbarLinkList>
                    <NavbarLink to={'/'} style={({isActive})=>{return {color:isActive?"black":"#5a5a5a"}}}>Dashboard</NavbarLink>
                    <NavbarLink to={'/songs'} style={({isActive})=>{return {color:isActive?"black":"#5a5a5a"}}}>Songs</NavbarLink>
                </NavbarLinkList>
                <div style={{flex:"1"}}/>
                <Avatar src='/avatar.jpg'  width={40}/>
            </NavbarWrapper>
        </NavbarMain>
    );
}