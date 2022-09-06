import { Star, StarHalf } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { GlobalContext } from "../../context/GlobalContext";
import { ContentResponse, Discover } from "../../types/MoviesType";

import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import {
  Button,
  Container,
  ContentWrapper,
  Genre,
  GenresWrapper,
} from "./styles";
import { LoadScreen } from "../../components/LoadScreen";

export const CategoryPage = () => {
  const [genres, setGenres] = useState<Array<{ id: number; name: string }>>([]);
  const [activeGenres, setActiveGenres] = useState<number[]>([]);

  const { getCategory, getGenres, getContentByGenre } =
    useContext(GlobalContext);

  const { type } = useParams();

  const { data: content, isLoading } = useQuery<ContentResponse[]>(
    ["media", type!],
    async () => {
      const contentCategory: ContentResponse[] = await getCategory(
        type!,
        "popular"
      )!;
      const allGenres = await getGenres(type!)!;

      setGenres(allGenres);
      setActiveGenres([]);
      scrollTo({ top: 0 });

      refetch();

      return contentCategory;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const {
    data,
    fetchNextPage,
    isLoading: contentLoading,
    refetch,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<Discover>(
    ["page", activeGenres],
    async ({ pageParam = 1 }) => {
      const content: Discover = await getContentByGenre(
        type!,
        activeGenres,
        pageParam
      )!;

      return content;
    },
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) =>
        lastPage.page != lastPage.total_pages ? lastPage.page + 1 : undefined,
    }
  );

  function handleGenres(genreId: number) {
    if (!activeGenres.includes(genreId)) {
      setActiveGenres((prev) => [...prev, genreId]);
    } else {
      const genresFilter = activeGenres.filter((genre) => genre != genreId);
      setActiveGenres(genresFilter);
    }
  }

  if (isLoading) {
    return <LoadScreen />;
  }

  return (
    <>
      {<Banner content={content!.slice(0, 7)} />}

      <Container>
        <GenresWrapper>
          {genres.map((genre) => {
            const isGenreActive = activeGenres.includes(genre.id);

            return (
              <Genre
                isActive={isGenreActive}
                onClick={() => handleGenres(genre.id)}
                key={genre.id}
              >
                {genre.name}
              </Genre>
            );
          })}
        </GenresWrapper>
        <ContentWrapper>
          {!contentLoading &&
            data?.pages?.map((item, i) => (
              <React.Fragment key={i}>
                {item.results.map((content) => {
                  return <Card key={content.id} item={content} />;
                })}
              </React.Fragment>
            ))}
        </ContentWrapper>
        <Button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Carregar mais
        </Button>
      </Container>
    </>
  );
};
