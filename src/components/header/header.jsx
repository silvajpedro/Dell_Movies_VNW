import React from "react";
import { Link } from "react-router-dom";
import * as S from "./header_style";
import Logo from "../image/dellmovies.png";
import Search from "../image/search.png";
export default function Header() {
  return (
    <>
      <S.Navigation>
        <S.BoxNavigation>
          <div>
            <img src={Logo} alt="" />
          </div>
          <S.BoxMovies>
            <ul>
              <li>
                <Link to="/Series">Séries</Link>
              </li>
              <li>
                <Link to="/">Filmes</Link>
              </li>
            </ul>
          </S.BoxMovies>
          <S.BoxSearch>
            <img src={Search} alt="" />
            <ul>
              <li>
                <a href="#Inicio"> Filtro</a>
              </li>
              <li>
                <a href="#Filtro"> Login </a>
              </li>
            </ul>
          </S.BoxSearch>
        </S.BoxNavigation>
      </S.Navigation>
    </>
  );
}
