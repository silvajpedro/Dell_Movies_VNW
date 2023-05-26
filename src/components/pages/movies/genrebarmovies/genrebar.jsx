import React from "react-router-dom";
import * as S from "./genrebar_style";
import Search from "../../../image/search.png";
export default function Generos() {
  return (
    <>
      <S.GenresContainer>
        <section>
          <h3>Popular</h3>
          <h3>Drama</h3>
          <h3>Ação</h3>
          <h3>Aventura</h3>
          <h3>Comédia</h3>
          <h3>Crime</h3>
          <h3>Fantasia</h3>
          <h3>Família</h3>
          <img src={Search} alt="" />
        </section>
      </S.GenresContainer>
    </>
  );
}
