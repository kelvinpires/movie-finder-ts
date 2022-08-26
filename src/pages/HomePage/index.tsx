import { useContext } from "react";

import { Banner } from "../../components/Banner";
import { Carousel } from "../../components/Carousel";
import { GlobalContext } from "../../context/GlobalContext";
import { ContentResponse } from "../../types/MoviesType";

import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {
  const { getCategory, getTrending } = useContext(GlobalContext);

  const { data: trending, isLoading } = useQuery<ContentResponse[]>(
    ["trending"],
    async () => {
      const trendingContent: ContentResponse[] = await getTrending()!;

      return trendingContent;
    }
  );

  const { data: popularMovies } = useQuery<ContentResponse[]>(
    ["movies"],
    () => {
      const category = getCategory("movie", "popular")!;

      return category;
    }
  );
  const { data: popularSeries } = useQuery<ContentResponse[]>(["tv"], () => {
    const category = getCategory("tv", "popular")!;

    return category;
  });

  return (
    <>
      {!isLoading && <Banner content={trending!} />}

      {popularMovies && (
        <Carousel content={popularMovies} subtitle="Filmes populares" />
      )}
      {popularSeries && (
        <Carousel content={popularSeries} subtitle="Séries populares" />
      )}
    </>
  );
};
