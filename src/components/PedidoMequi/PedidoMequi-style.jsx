import styled from "styled-components";

export const CardPedido = styled.div`
    width: 23%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    border: solid white 0.5px;
    box-shadow: 3px 1px 1px black;

   
    img {
        width: 80%;
        height: 80%;
    }

    img:hover {
        opacity: 0.5;
        transition: 0.5s;
    }

    p {
    margin: 0 20px 0 20px;
    font-size: 1vw;
    }

`;

