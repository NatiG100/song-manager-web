import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    z-index: 200;
    top:0px;
    left: 0px;
    right: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    background-color: #0003;
`;

export const SurfaceContent = styled.div`
    position: absolute;
    top:0px;
    bottom: 0px;
    right: 0px;
    height: 100%;
    width: 100%;
    max-width: 400px;
    background: #fff;
    border-left: 1px solid #99aacc;
    padding: 20px;
`;