import styled from "styled-components"

export const main = styled.main`
width: 100%;
height: 300vh;
background-color: #ffc72c;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
`;

export const section = styled.section`
width: 100%;
height: 22%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
margin-top: 100px;
`;


export const divSuperior = styled.div`
width: 100%;
height: 70%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
img {
    width: 25%;
    height: 400px;
}

h1 {
    width: 60%;
    font-size: 5vw;
    color: white;
    margin: 0 25px 0 25px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
}
`;

export const ColorH1 = styled.span`
    color: #DB0007;
`;


export const divInferior = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
img {
    width: 6vw;
}
`;

export const sectionCards = styled.section`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background-color: #feb706;

        h2 {
        color: white;
        text-align: center;
        font-size: 3vw;
        width: 100%;
    }
`;


/**ESTILO DOS CARDS DA MAIN "PROMOÇÃO" */

export const Card = styled.div`
    width: 20vw;
    height: 45vh;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        
    }

    img:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;

export const DivInternaCard = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-around;

    h3 {
        margin: 20px;
        text-align: center;
    }
    
    button {
        width: 50%;
        height: 22%;
        border: none;
        border-radius: 10px;
        background-color: #FFBC0D;
        font-size: 1vw;
        font-weight: 600;
    }
`;

export const sectionCardPedido = styled.section`
    width: 100%;
    height: 47%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    .TitleEscolhaPedido {
        font-size: 2.5vw;
        color: white;
    }
`;

export const divCardPedido = styled.div`
    width: 80%;
    height: 32%;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    h2 {
        width: 97%;
        font-size: 1.5vw;
    }
`;