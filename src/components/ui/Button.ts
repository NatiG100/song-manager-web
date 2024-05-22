import styled from "styled-components";

export const Button = styled.button`
    margin: 6px 0px;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #0002;
    background-color: #2001;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: #2002;
    }

`;

export const GhostButton = styled.button`
    cursor:pointer ;
    background-color: transparent;
    padding: 5px;
    border-radius:40px;
    border:none;
    transition: all 300ms ease-in-out;
    &:hover{
        background-color: #2002;
    }
`
