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

@media (max-width: 1371px) {
    height: 280vh;
}

@media (max-width: 1161px) {
    height: 250vh;
}

@media (max-width: 1091px) {
    height: 230vh;
}

@media (max-width: 913px) {
    height: 210vh;
}

@media (max-width: 801px) {
    height: 200vh;
}

@media (max-width: 555px) {
    height: 180vh;
}
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

@media (max-width: 1090px) {
    img {
        width: 30%;
    }

    h1 {
        font-size: 5.5vw;
    }
}

@media (max-width: 937px) {
   img {
        width: 35%;
        height: 290px;
    }

    h1 {
        width: 80%;
        font-size: 6vw;
        text-align: center;
    }
}

@media (max-width: 797px) {

   img {
        width: 30%;
        height: 220px;
    }

    h1 {
        width: 70%;
        font-size: 6.5vw;
        text-align: center;
    }
}

@media (max-width: 555px) {
   display: flex;
   justify-content: center;
   align-items: center;
   justify-content: space-around;
   flex-direction: column-reverse;
   margin-top: 0px;

   img {
        width: 30%;
        height: 260px;
    }

    h1 {
        width: 90%;
        font-size: 7.5vw;
        text-align: center;
    }
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

@media (max-width: 1090px) {
    img {
        width: 7vw;
    }
}

@media (max-width: 787px) {
    img {
        width: 9vw;
    }
}

@media (max-width: 543px) {
    img {
        width: 11vw;
    }
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

    @media (max-width: 1090px) {
    
    h2  {
        font-size: 4vw;
    }
    }

    @media (max-width: 909px) {
    height: 20%;
    }

    @media (max-width: 731px) {
    height: 20%;
    }

    @media (max-width: 577px) {
   height: 15%; 
    }

    @media (max-width: 515px) {
        height: 15%;
    h2  {
        font-size: 6vw;
    }
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
        
    }

    img:hover {
        opacity: 0.5;
        transition: 0.5s;
    }

    @media (max-width: 1293px) {
        height: 40vh;
    }

    @media (max-width: 1095px) {
        height: 35vh;
    }

    @media (max-width: 909px) {
        height: 30vh;
    }

    @media (max-width: 723px) {
        height: 25vh;
    }

    @media (max-width: 575px) {
        height: 17vh;
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

    @media (max-width: 1091px) {
        height: 60%;
        button {
            width: 55%;
            height: 24%;

        }

        h3 {
            font-size: 1.5vw;
        }
    }

    @media (max-width: 575px) {
            h3 {
                margin: 5px;
            }
      
            

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

    @media (max-width: 1200px) {
    .TitleEscolhaPedido  {
        font-size: 3vw;
    }
    }

    @media (max-width: 1090px) {
    .TitleEscolhaPedido  {
        font-size: 3.5vw;
    }
    }


    @media (max-width: 850px) {
    .TitleEscolhaPedido  {
        font-size: 4vw;
    }
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

    @media (max-width: 1200px) {
    h2  {
        font-size: 1.8vw;
    }
    }

    @media (max-width: 1090px) {
    h2  {
        font-size: 2.2vw;
    }
    }


    @media (max-width: 850px) {
    h2  {
        font-size: 2.8vw;
    }
    }

    @media (max-width: 820px) {
    height: 28%;
    }

    @media (max-width: 653px) {
    height: 25%;
    }


`;