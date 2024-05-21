import styled from "styled-components";

export const TableMain = styled.table`
    padding: 0px;
    background-color: white;
    border:1px solid #0252;
    box-shadow: 0px 2px 3px #0001;
`;
export const Tr = styled.tr`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    margin: 0px;
`;
export const Th = styled.th`
    padding: 15px 15px;
    background-color:#0002;
    text-align: start;
`;
export const Td = styled.td`
    padding: 15px 15px;
    border-bottom: 1px solid #00000020;
`;
