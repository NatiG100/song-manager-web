import React from 'react'
import { Avatar, NavbarLink, NavbarLinkList, NavbarMain, NavbarWrapper } from './NavbarElements.ts';

export default function Navbar(){
    return(
        <NavbarMain>
            <NavbarWrapper>
                <img src='/logo.svg'  width={40}/>
                <NavbarLinkList>
                    <NavbarLink to={'/'} style={({isActive})=>{return {color:isActive?"black":"#4a4a4a"}}}>Dashboard</NavbarLink>
                    <NavbarLink to={'/songs'} style={({isActive})=>{return {color:isActive?"black":"#888888"}}}>Songs</NavbarLink>
                </NavbarLinkList>
                <div style={{flex:"1",backgroundColor:"#FFFF"}}/>
                <Avatar src='/avatar.jpg'  width={40}/>
            </NavbarWrapper>
        </NavbarMain>
    );
}