import styled from "styled-components";
import Background from "../../../image/flash.png";

export const MovieContainer = styled.section`
  background-image: url(${Background});
  height: 110vh;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: flex-end;
  font-family: "Open Sans", sans-serif;
  section {
    width: 100%;
    height: 60vh;
    background: linear-gradient(transparent, black);
  }
  h1 {
    display: flex;
    justify-content: center;
    width: 27%;
    font-size: 35px;
  }
  h2 {
    font-size: 12px;
    display: flex;
    justify-content: center;
    width: 32%;
  }
  h3 {
    font-weight: lighter;
    font-size: 20px;
    width: 120vh;
    font-weight: 120;
  }
  h4 {
    font-size: 25px;
  }
`;
export const Informationbox = styled.section``;
export const Descricao = styled.div`
  display: flex;
  justify-content: center;
  width: 74%;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27%;
  gap: 1vh;
  p {
    font-size: 13px;
  }
  h3 {
    font-weight: bold;
    background-color: yellow;
    color: black;
    width: 9vh;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }
`;
export const View = styled.div`
  width: 47%;
  height: 10vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  button {
    width: 15vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 20px;
    transition: 0.3s;
  }
`;
export const Assistir = styled.div`
  button {
    background-color: #d53a00;
  }
  button:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
export const Trailer = styled.div`
  button {
    background-color: #717171;
  }
  button:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
