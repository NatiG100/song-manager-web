import styled from "styled-components";

export const StatList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media only screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr ;
    }
    @media only screen and (min-width: 1224px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    gap:15px;
`;

export const StatBoxMain = styled.div`
    padding: 30px 20px;
    border:1px solid #0252;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 2px 3px #0001;
`;

export const StatBoxTitle = styled.p`
    font-size: 16px;
`;
export const StatBoxDescription = styled.h1`
    font-weight: bold;
    color: #667788;
`;