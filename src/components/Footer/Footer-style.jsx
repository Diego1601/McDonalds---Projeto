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

    @media (max-width: 1437px) {
        width: 16vw;
        img {
        width: 1.7vw;
    }
    }

    @media (max-width: 1155px) {
        width: 20vw;
        img {
        width: 1.9vw;
    }
    }

    @media (max-width: 793px) {
        width: 24vw;
        img {
        width: 2.5vw;
    }
    }

    @media (max-width: 793px) {
        width: 35vw;
        img {
        width: 3vw;
    }
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

    @media (max-width: 1437px) {
        width: 24vw;
        img {
        width: 9vw;
    }
    }

    @media (max-width: 919px) {
        width: 27vw;
        img {
        width: 12vw;
    }
    }

    @media (max-width: 525px) {
        width: 35vw;
        img {
        width: 15vw;
    }
    }
`;