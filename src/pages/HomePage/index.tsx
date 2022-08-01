import { useContext, useEffect, useState } from "react";

import { Banner } from "../../components/Banner";
import { Carousel } from "../../components/Carousel";
import { GlobalContext } from "../../context/GlobalContext";
import { MoviesType } from "../../types/MoviesType";

export const HomePage = () => {
  const { getCategory, getTrending } = useContext(GlobalContext);

  const [trending, setTrending] = useState<MoviesType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MoviesType[]>([]);
  const [popularSeries, setPopularSeries] = useState<MoviesType[]>([]);

  useEffect(() => {
    getCategory("movie", "popular", setPopularMovies);
    getCategory("tv", "popular", setPopularSeries);
    getTrending(setTrending);
  }, []);

  return (
    <>
      <Banner content={trending} />
      {popularMovies && (
        <Carousel content={popularMovies} subtitle="Filmes populares" />
      )}
      {popularSeries && (
        <Carousel content={popularSeries} subtitle="Séries populares" />
      )}
    </>
  );
};
