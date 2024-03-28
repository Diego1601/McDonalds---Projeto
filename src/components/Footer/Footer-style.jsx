import styled from "styled-components";

export const footer = styled.footer`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const sectionInferior = styled.section`
    max-width: 1921px;
    width: 98%;
    background-color: white;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    border: solid black 2px;
`;

export const DivEsquerdaSectionInferior = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    border: solid black 2px;
    img {
        width: 3vw;
    }

    p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 3vw;
    }
`;

export const DivDireitaSectionInferior = styled.div`
    width: 30vw;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    border: solid black 2px;
    img {
        width: 12vw;
        height: 18px;
    }
`;