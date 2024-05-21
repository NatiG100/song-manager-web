import styled from "styled-components";

export const Button = styled.button`

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
