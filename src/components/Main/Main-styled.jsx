import styled from "styled-components"

export const main = styled.main`
width: 100%;
padding: 20px;
background-color: #ffc72c;
display: flex;
align-items: center;
flex-direction: column;
`;

export const section = styled.section`
width: 95%;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
border: solid black 2px;
margin-top: 50px;
`;

export const divSuperior = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
flex-direction: column-reverse;
border: solid black 2px;
img {
    height: 150px;
    border: solid black 2px;
}

h1 {
    width: 90%;
    font-size: 5.8vw;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    border: solid black 2px;
    text-align: start;
}
`;

export const ColorH1 = styled.span`
    color: #DB0007;
`;


export const divInferior = styled.div`
width: 60%;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
border: solid black 2px;
img {
    width: 10vw;
}
`;

export const sectionCards = styled.section`
    width: 95%;
    padding: 20px;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    background-color: #feb706;
    border: solid black 2px;
        h2 {
        color: white;
        text-align: center;
        font-size: 5vw;
        width: 100%;
    }
`;


/**ESTILO DOS CARDS DA MAIN "PROMOÇÃO" */

export const Card = styled.div`
    width: 20vw;
    height: 25vw;
    margin-top: 20px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        
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
    border: solid black 2px;

    h3 {
        margin: 5px;
        text-align: center;
        font-size: 1.5vw;
        border: solid black 2px;
        width: 100%;
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
    width: 95%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border: solid black 2px;

    .TitleEscolhaPedido {
        font-size: 5vw;
        color: white;
        width: 100%;
        text-align: center;
    }
`;

export const divCardPedido = styled.div`
    width: 95%;
    margin: 10px;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border: solid black 2px;

    h2 {
        width: 97%;
        font-size: 3vw;
    }
`;