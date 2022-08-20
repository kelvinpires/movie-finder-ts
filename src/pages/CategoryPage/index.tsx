import { Star, StarHalf } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { GlobalContext } from "../../context/GlobalContext";
import { ContentResponse } from "../../types/MoviesType";
import {
  Button,
  Container,
  ContentWrapper,
  Genre,
  GenresWrapper,
} from "./styles";

export const CategoryPage = () => {
  const [content, setContent] = useState<ContentResponse[]>([]);
  const [contentByGenre, setContentByGenre] = useState<ContentResponse[]>([]);
  const [genres, setGenres] = useState<Array<{ id: number; name: string }>>([]);
  const [activeGenres, setActiveGenres] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);

  const { getCategory, getGenres, getContentByGenre } =
    useContext(GlobalContext);

  const { type } = useParams();

  useEffect(() => {
    setContent([]);
    setActiveGenres([]);
    setPage(1);
    setContentByGenre([]);

    getCategory(type!, "popular", setContent);
    getContentByGenre(type!, activeGenres, page, setContentByGenre);

    getGenres(type!, setGenres);
  }, [type]);

  useEffect(() => {
    setPage(1);
    getContentByGenre(type!, activeGenres, 1, setContentByGenre);
  }, [activeGenres]);

  useEffect(() => {
    if (page > 1) {
      getContentByGenre(type!, activeGenres, page, setContentByGenre);
    }
  }, [page]);

  function handleGenres(genreId: number) {
    if (!activeGenres.includes(genreId)) {
      setActiveGenres((prev) => [...prev, genreId]);
    } else {
      const genresFilter = activeGenres.filter((genre) => genre != genreId);
      setActiveGenres(genresFilter);
    }
  }

  return (
    <>
      <Banner content={content.slice(0, 7)} />
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
          {contentByGenre.map((content) => {
            return <Card key={content.id} item={content} />;
          })}
        </ContentWrapper>
        <Button onClick={() => setPage((prev) => prev + 1)}>
          Carregar mais
        </Button>
      </Container>
    </>
  );
};
