import styled from "styled-components";

export const SongList = styled.div`
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

export const SongMain = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    border:#Eaeaea 1px solid;
    background-color: white;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover{
        border: #4086cd 1px solid;
        box-shadow: 0 0 8px #0002;
    }
`;
export const SongHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;  

export const SongTitle = styled.h1`
    color: #4086cd;
    font-size: 1.2rem;
    font-weight: 500;
`;
export const SongContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0px;
`;
export const SongInfoWithIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0;
    margin:0;
    height: max-content;
`;
export const SongInfoIcon = styled.img`
    height: 28px;
    width: 28px;
`;
export const SongInfo = styled.div`
    display:flex;
    flex-direction: column;
`;
export const SongInfoTitle = styled.p`
    font-weight: bold;
`
export const SongInfoValue = styled.p`
    color:#6a6a6a;
`;

