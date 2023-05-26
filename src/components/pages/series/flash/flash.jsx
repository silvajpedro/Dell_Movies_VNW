import React from "react";
import * as S from "./flash_style.jsx";
import Star from "../../../image/star.png";
import Play from "../../../image/play.png";
import PlayTwo from "../../../image/playtwo.png";
import GenreBarSeries from "../genrebarseries/genrebarseries.jsx";
import CarouselSeries from "../carouselseries/carouselseries.jsx";
import PopularSeries from "../popularseries/popularseries.jsx";
import FooterSeries from "../footerseries/footerseries.jsx";
export default function Flash() {
  return (
    <>
      <S.MovieContainer>
        <section>
          <h1>The Flash</h1>
          <h2> 9ª temporada | Fantasia, Família | 2023</h2>
          <S.Rating>
            <img src={Star} alt="estrela" />
            <h4>8,3</h4>
            <p>/10</p>
            <h3>IMDb</h3>
          </S.Rating>
          <S.Descricao>
            <h3>
              Depois de derrotar o Flash Reverso de uma vez por todas, Barry
              Allen e Iris West-Allen estão se reconectando e ficando mais
              próximos do que nunca. Mas quando um grupo mortal de Rogues chega
              a Central City liderado por uma nova e poderosa ameaça, The Flash
              e sua equipe devem mais uma vez desafiar probabilidades
              impossíveis para salvar o dia. Mas quando os Rogues são
              derrotados, um novo adversário mortal surge para desafiar o legado
              heróico de Barry Allen. E em sua maior batalha até agora, Barry e
              o Time Flash serão levados ao limite, a fim de salvar Central City
              pela última vez.
            </h3>
          </S.Descricao>
          <S.View>
            <S.Assistir>
              <a
                href="https://www.netflix.com/br/"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img src={Play} alt="Ícone play" />
                  Assistir Agora
                </button>
              </a>
            </S.Assistir>
            <S.Trailer>
              <a
                href="https://www.youtube.com/watch?v=HJyan-UDjek"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img src={PlayTwo} alt="Ícone play" />
                  Trailer
                </button>
              </a>
            </S.Trailer>
          </S.View>
        </section>
      </S.MovieContainer>
      <GenreBarSeries />
      <CarouselSeries />
      <PopularSeries />
      <FooterSeries />
    </>
  );
}
