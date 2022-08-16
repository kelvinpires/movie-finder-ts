import { Star, StarHalf } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { GlobalContext } from "../../context/GlobalContext";
import { MoviesType } from "../../types/MoviesType";
import {
  Button,
  Card,
  Container,
  ContentWrapper,
  Genre,
  GenresWrapper,
  PosterImg,
  PosterWrapper,
  Redirect,
  Span,
} from "./styles";

export const CategoryPage = () => {
  const [content, setContent] = useState<MoviesType[]>([]);
  const [contentByGenre, setContentByGenre] = useState<MoviesType[]>([]);
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
            const { id, media_type, poster_path, title, name, vote_average } =
              content;

            return (
              <Card key={id}>
                <Redirect to={`/${media_type}/${id}`}>
                  <PosterWrapper>
                    <PosterImg
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                      alt={title || name}
                    />
                  </PosterWrapper>
                  <Span>{title || name}</Span>
                  {vote_average && (
                    <Span>
                      {vote_average < 6 ? (
                        <StarHalf color="#FFCB47" size={24} weight="fill" />
                      ) : (
                        <Star color="#FFCB47" size={24} weight="fill" />
                      )}
                      {vote_average?.toFixed(1)}
                    </Span>
                  )}
                </Redirect>
              </Card>
            );
          })}
        </ContentWrapper>
        <Button onClick={() => setPage((prev) => prev + 1)}>
          Carregar mais
        </Button>
      </Container>
    </>
  );
};
