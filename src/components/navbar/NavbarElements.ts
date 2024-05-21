import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarMain = styled.nav`
    width: 100%;
    padding: 10px 80px;
    background-color: white;
    box-sizing: border-box;
    border-bottom: #EAEAEA 1px solid;
`;

export const NavbarWrapper = styled.div`
    width:100%;
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    gap: 35px;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
`;

export const NavbarLinkList = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const NavbarLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    transition:all 300ms ease-in-out;
`;
export const Avatar = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 100%;
    object-fit: cover;
    cursor: pointer;
    border: #EAEAEA 1px solid;
    box-sizing: border-box;
`;