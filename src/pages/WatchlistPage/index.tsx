import { Star, StarHalf } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { GlobalContext } from "../../context/GlobalContext";
import { ContentResponse } from "../../types/MoviesType";
import { Container, Subtitle, Wrapper } from "./styles";

export const WatchlistPage = () => {
  const { getDetails, store } = useContext(GlobalContext);
  const [watchlist, setWatchlist] = useState<ContentResponse[]>([]);

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
          return <Card key={content.id} item={content} />;
        })}
      </Wrapper>
    </Container>
  );
};
