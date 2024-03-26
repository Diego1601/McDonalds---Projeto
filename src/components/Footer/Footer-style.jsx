import styled from "styled-components";

export const footer = styled.footer`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const sectionInferior = styled.section`
    width: 95%;
    background-color: white;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
`;

export const DivEsquerdaSectionInferior = styled.div`
    width: 12vw;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    img {
        width: 1.5vw;
    }

    p {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export const DivDireitaSectionInferior = styled.div`
    width: 18vw;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    img {
        width: 6vw;
    }
`;