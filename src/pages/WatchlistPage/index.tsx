import { Star, StarHalf } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MoviesType } from "../../types/MoviesType";
import {
  Card,
  Container,
  PosterImg,
  PosterWrapper,
  Redirect,
  Span,
  Subtitle,
  Wrapper,
} from "./styles";

export const WatchlistPage = () => {
  const { getDetails, store } = useContext(GlobalContext);
  const [watchlist, setWatchlist] = useState<MoviesType[]>([]);

  useEffect(() => {
    store.watchlist?.map(async (content) => {
      const data = await getDetails(content.media_type, content.id);
      setWatchlist((prev) => [...prev, data!]);
    });
  }, []);

  return (
    <Container>
      <Subtitle>Minha lista</Subtitle>
      <Wrapper>
        {watchlist?.map((content) => {
          const { title, name, poster_path, vote_average, media_type, id } =
            content;
          return (
            <Card key={content.id}>
              <Redirect to={`/${media_type}/${id}`}>
                <PosterWrapper>
                  <PosterImg
                    src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`}
                    alt={title || name}
                  />
                </PosterWrapper>
                <Span>{title || name}</Span>
                <Span>
                  {vote_average < 6 ? (
                    <StarHalf color="#FFCB47" size={24} weight="fill" />
                  ) : (
                    <Star color="#FFCB47" size={24} weight="fill" />
                  )}
                  {vote_average?.toFixed(1)}
                </Span>
              </Redirect>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};
