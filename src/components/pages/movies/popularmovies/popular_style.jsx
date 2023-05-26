import styled from "styled-components";

export const TopContainer = styled.section`
  font-family: "Open Sans", sans-serif;
  background-color: black;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    text-indent: 5rem;
  }
`;

export const TopCard = styled.div`
  width: 16vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 1rem;
  }
`;
export const BoxButton = styled.div`
  border: solid black;
`;
