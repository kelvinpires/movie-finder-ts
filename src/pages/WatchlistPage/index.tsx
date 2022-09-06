import React, { useContext } from "react";
import { Card } from "../../components/Card";
import { GlobalContext } from "../../context/GlobalContext";
import { ContentResponse } from "../../types/MoviesType";

import { useQuery } from "@tanstack/react-query";

import { Container, Subtitle, Wrapper } from "./styles";
import { LoadScreen } from "../../components/LoadScreen";

export const WatchlistPage = () => {
  const { getDetails, store } = useContext(GlobalContext);

  const { data: watchlist, isLoading } = useQuery<ContentResponse[]>(
    ["watchlist"],
    async () => {
      let content: ContentResponse[] = [];

      for (let i = 0; i < store.watchlist.length; i++) {
        const details = await getDetails(
          store.watchlist[i].media_type,
          store.watchlist[i].id
        )!;
        content.push(details);
      }

      return content;
    }
  );

  if (isLoading) {
    return <LoadScreen />;
  }

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
