import { useState, useEffect } from "react";
import * as S from "./carouselseries_style";
import axios from "axios";
import Carousel from "react-elastic-carousel";

export default function CarouselComponent() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries();
  }, [series]);

  const getSeries = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=e433b470a7ecb593204d816511462773&language=pt-br&page=3"
      )
      .then((response) => {
        const Api = response.data.results?.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setSeries(Api);
        console.log(Api);
      })
      .catch((error) => {
        alert(`${error}`);
      });
  };

  const breakPoints = [];

  return (
    <S.LasterContainer>
      <h2>Últimos lançamentos</h2>
      <Carousel breakPoints={breakPoints} itemsToScroll={5} itemsToShow={5}>
        {series?.map((item) => (
          <S.Card>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <span>{item.release_date}</span>
          </S.Card>
        ))}
      </Carousel>
    </S.LasterContainer>
  );
}
