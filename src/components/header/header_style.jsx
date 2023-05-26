import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: white;
}
`;
export const Navigation = styled.section`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: rgba(108, 122, 137 /1);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
`;
export const BoxNavigation = styled.section`
  width: 98%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BoxMovies = styled.section`
  ul {
    width: 40vh;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    :hover {
      background-color: #747474;
      transition: 0.5s;
    }
  }
  li {
    width: 20vh;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    border-radius: 20px;
  }
`;
export const BoxSearch = styled.section`
  display: flex;
  width: 45vh;
  align-items: center;
  ul {
    width: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    :hover {
      background-color: #747474;
      transition: 0.5s;
    }
  }
  li {
    width: 20vh;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    border-radius: 20px;
  }
`;
