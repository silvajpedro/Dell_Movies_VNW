import styled from "styled-components";
import Background from "../../../image/avatar.png";

export const MovieContainer = styled.section`
  background-image: url(${Background});
  height: 105vh;
  background-size: 100%;
  display: flex;
  align-items: flex-end;
  font-family: "Open Sans", sans-serif;
  section {
    width: 100%;
    height: 45vh;
    background: linear-gradient(transparent, rgb(0, 0, 0));
  }
  h1 {
    display: flex;
    justify-content: center;
    width: 50%;
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
export const Description = styled.div`
  display: flex;
  justify-content: center;
  width: 74%;
`;
export const Note = styled.div`
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
    background-color: rgb(255, 255, 0);
    color: rgb(0, 0, 0);
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
export const Watch = styled.div`
  button {
    background-color: rgb(213, 58, 0);
  }
  button:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
export const Trailer = styled.div`
  button {
    background-color: rgb(113, 113, 113);
  }
  button:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
