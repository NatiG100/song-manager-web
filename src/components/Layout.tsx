import React from 'react';
import Navbar from './navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import Main from './main/Main.tsx';
export default function Layout(){
    return(
        <div>
            <Navbar/>
            <Main>
                <Outlet/>
            </Main>
        </div>
    );
}