import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

`;

export const header = styled.header`
width: 100%;
height: 10vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
position: fixed;

@media (max-width: 1090px) {
    height: 8vh;
}

@media (max-width: 724px) {
    height: 7vh;
}

@media (max-width: 533px) {
    height: 6vh;
}
`;

export const section = styled.section`
width: 95%;
height: 75%;
display: flex;
justify-content: center;
justify-content: space-between;
`;

export const divLogo = styled.div`
width: 120px;
height: 100%;
display: flex;
justify-content: center;
img {
    width: 5vw;
}

@media (max-width: 809px) {
    img {
        width: 10vw;
    }
}
`;

export const divPaiDireita = styled.div`
width: 30%;
display: flex;
justify-content: center;
justify-content: space-evenly;
`;

export const divFilho1 = styled.div`
width: 25%;
height: 100%;
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
img {
    width: 35%;
}

a, h2 {
    font-size: 0.6vw;
    text-decoration: none;
}

@media (max-width: 1090px) {
    width: 50%;

    img {
        width: 30%;
    }

    a, h2 {
        font-size: 1vw;
        text-decoration: none;
    }
}

`;

export const divFilho2 = styled.div`
background-color: #FFC72C;
width: 45%;
height: 90%;
display: flex;
justify-content: center;
justify-content: space-evenly;
align-items: center;
border-radius: 10px;
img {
    width: 15%;
}

a, h2 {
    font-size: 0.9vw;
    text-decoration: none;
    color: black;
    
}

@media (max-width: 1090px) {
    width: 50%;

    img {
        width: 15%;
    }

    a, h2 {
        font-size: 1.2vw;
        text-decoration: none;
    }
}
`;








