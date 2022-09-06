import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { GlobalContext } from "../../context/GlobalContext";
import { Person } from "../../types/MoviesType";
import {
  Bio,
  BioContainer,
  Container,
  ItemsContainer,
  Label,
  Name,
  Pagination,
  PaginationContainer,
  PersonInfoLi,
  PersonInfoUl,
  PersonWrapper,
  PhotoWrapper,
  ProfilePhoto,
  Value,
} from "./styles";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card } from "../../components/Card";
import { LoadScreen } from "../../components/LoadScreen";

export const PersonPage = () => {
  const [paginationType, setPaginationType] = useState<string>("movies");
  const { getPersonData } = useContext(GlobalContext);
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<Person>(
    ["person", id],
    () => getPersonData(id!)!
  );

  if (isLoading) {
    return <LoadScreen />;
  }

  if (isError) {
    return <div>Tente novamente mais tarde</div>;
  }

  return (
    <Container>
      <PersonWrapper>
        <ProfilePhoto>
          <LazyLoadImage
            effect="blur"
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${data?.profile_path}`}
            alt={`Foto de ${data?.name}`}
            width="100%"
            height="100%"
          />
        </ProfilePhoto>
        <BioContainer>
          <Name>{data?.name}</Name>
          <Bio>{data?.biography}</Bio>
          <PersonInfoUl>
            <PersonInfoLi>
              <Label>Nascimento</Label>
              <Value>{new Date(data?.birthday!).toLocaleDateString()}</Value>
            </PersonInfoLi>
            <PersonInfoLi>
              <Label>Local de nascimento</Label>
              <Value>{data?.place_of_birth}</Value>
            </PersonInfoLi>
            {data?.deathday && (
              <PersonInfoLi>
                <Label>Falecimento</Label>
                <Value>{new Date(data.deathday).toLocaleDateString()}</Value>
              </PersonInfoLi>
            )}
          </PersonInfoUl>
        </BioContainer>
      </PersonWrapper>
      <PaginationContainer>
        <Pagination
          onClick={() => setPaginationType("movies")}
          to="#"
          clicked={paginationType === "movies" ?? false}
        >
          Filmes
        </Pagination>
        <Pagination
          onClick={() => setPaginationType("tv")}
          to="#"
          clicked={paginationType === "tv" ?? false}
        >
          Séries
        </Pagination>
        <Pagination
          onClick={() => setPaginationType("photos")}
          to="#"
          clicked={paginationType === "photos" ?? false}
        >
          Fotos
        </Pagination>
      </PaginationContainer>
      <ItemsContainer>
        {paginationType === "movies" &&
          data?.movie_credits.cast.map((movie) => {
            return (
              <Card key={movie.id} item={{ ...movie, media_type: "movie" }} />
            );
          })}
        {paginationType === "tv" &&
          data?.tv_credits.cast.map((tv) => {
            return <Card key={tv.id} item={{ ...tv, media_type: "tv" }} />;
          })}

        {paginationType === "photos" &&
          data?.images.profiles.map((image) => {
            return (
              <PhotoWrapper key={image.file_path}>
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${image.file_path}`}
                  effect="blur"
                  width="100%"
                  height="100%"
                  threshold={-100}
                />
              </PhotoWrapper>
            );
          })}
      </ItemsContainer>
    </Container>
  );
};
