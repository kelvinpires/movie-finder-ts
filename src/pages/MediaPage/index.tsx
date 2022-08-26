import { Play } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { Carousel } from "../../components/Carousel";
import { Trailer } from "../../components/Trailer";
import { GlobalContext } from "../../context/GlobalContext";
import { Season, ContentResponse } from "../../types/MoviesType";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Container,
  DescriptionWrapper,
  Details,
  EpisodeContent,
  EpisodeImageContent,
  EpisodeName,
  EpisodeOverview,
  EpisodesContainer,
  EpisodesWrapper,
  InfoLabel,
  InfoLi,
  InfoUl,
  InfoValue,
  Option,
  Overview,
  Pagination,
  PaginationContainer,
  PhotoLi,
  PhotosContainer,
  PhotosContent,
  PhotosLengthText,
  PhotosWrapper,
  Player,
  PlayerContent,
  PosterWrapper,
  Select,
  Subtitle,
  Title,
  VideoName,
  VideoPosterWrapper,
  VideosContainer,
  VideoType,
  VideoWrapper,
} from "./styles";

import { useQuery } from "@tanstack/react-query";

export const MediaPage = () => {
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const [pagination, setPagination] = useState<string>("details");
  const [videoKey, setVideoKey] = useState<string>("");
  const [episodes, setEpisodes] = useState<Season>();

  const { getDetails, getEpisodes } = useContext(GlobalContext);

  const { media_type, id } = useParams();

  const { data: content, isLoading } = useQuery<ContentResponse[]>(
    ["content", id],
    async () => {
      const details: ContentResponse = await getDetails(
        media_type!,
        Number(id!)
      )!;
      if (media_type === "tv") {
        getSeason(1);
      }
      return [details];
    }
  );

  function getSeason(season_number: number) {
    getEpisodes(id!, season_number, setEpisodes);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {content && (
        <Banner
          setShowTrailer={setShowTrailer}
          setVideoKey={setVideoKey}
          content={content}
        />
      )}

      <PaginationContainer>
        <Pagination
          isclicked={pagination === "details"}
          onClick={() => setPagination("details")}
          to="#"
        >
          Detalhes
        </Pagination>
        {media_type === "tv" && (
          <Pagination
            isclicked={pagination === "episodes"}
            onClick={() => setPagination("episodes")}
            to="#"
          >
            Episódios
          </Pagination>
        )}
        <Pagination
          isclicked={pagination === "videos"}
          onClick={() => setPagination("videos")}
          to="#"
        >
          Vídeos
        </Pagination>
        <Pagination
          isclicked={pagination === "photos"}
          onClick={() => setPagination("photos")}
          to="#"
        >
          Fotos
        </Pagination>
      </PaginationContainer>
      {content!.length > 0 && (
        <>
          {!isLoading &&
            content?.map((item) => {
              const {
                title,
                name,
                overview,
                release_date,
                poster_path,
                runtime,
                id,
                budget,
                revenue,
                production_companies,
                first_air_date,
                genres,
                created_by,
                "watch/providers": providers,
                credits,
                recommendations,
                videos,
                images,
                seasons,
              } = item;

              // date
              const date = release_date
                ? new Date(release_date).toLocaleDateString()
                : new Date(first_air_date).toLocaleDateString();

              // runtime
              const totalHours = runtime / 60;
              const hour = Math.floor(totalHours);
              const minutes = Math.round((totalHours - hour) * 60);
              const time = `${hour}h ${minutes}min`;

              return (
                <Container key={id}>
                  {pagination === "details" && (
                    <>
                      <Details>
                        <PosterWrapper>
                          <LazyLoadImage
                            effect="blur"
                            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`}
                            alt={`Pôster de ${title || name}`}
                            width="100%"
                            height="100%"
                          />
                        </PosterWrapper>
                        <DescriptionWrapper>
                          <Title>{title || name}</Title>

                          <Subtitle>Sinopse</Subtitle>
                          <Overview>{overview}</Overview>
                          <InfoUl>
                            <InfoLi>
                              <InfoLabel>Data de lançamento</InfoLabel>
                              <InfoValue>{date}</InfoValue>
                            </InfoLi>
                            {created_by && (
                              <InfoLi>
                                <InfoLabel>Criado por</InfoLabel>
                                <InfoValue>
                                  {created_by.map((person) => (
                                    <Link
                                      key={person.id}
                                      style={{ color: "#fff" }}
                                      to={`/person/${person.id}`}
                                    >
                                      {person.name}
                                    </Link>
                                  ))}
                                </InfoValue>
                              </InfoLi>
                            )}
                            {runtime && (
                              <InfoLi>
                                <InfoLabel>Duração</InfoLabel>
                                <InfoValue>{time}</InfoValue>
                              </InfoLi>
                            )}
                            {budget > 0 && (
                              <InfoLi>
                                <InfoLabel>Orçamento</InfoLabel>
                                <InfoValue>
                                  {budget.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "usd",
                                  })}
                                </InfoValue>
                              </InfoLi>
                            )}
                            {revenue > 0 && (
                              <InfoLi>
                                <InfoLabel>Receita</InfoLabel>
                                <InfoValue>
                                  {revenue.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "usd",
                                  })}
                                </InfoValue>
                              </InfoLi>
                            )}
                            {genres.length > 0 && (
                              <InfoLi>
                                <InfoLabel>Gêneros</InfoLabel>
                                <InfoValue>
                                  {genres.map((genre) => (
                                    <Link
                                      key={genre.id}
                                      style={{ color: "#fff" }}
                                      to={`/category/${genre.id}`}
                                    >
                                      {genre.name}
                                    </Link>
                                  ))}
                                </InfoValue>
                              </InfoLi>
                            )}
                            {production_companies.length > 0 && (
                              <InfoLi>
                                <InfoLabel>Produções</InfoLabel>
                                <InfoValue>
                                  {production_companies.map((production) => (
                                    <Link
                                      key={production.id}
                                      style={{ color: "#999" }}
                                      to="#"
                                    >
                                      {production.name}
                                    </Link>
                                  ))}
                                </InfoValue>
                              </InfoLi>
                            )}
                            {providers.results.BR?.flatrate?.length > 0 && (
                              <InfoLi>
                                <InfoLabel>Disponível</InfoLabel>
                                <InfoValue>
                                  {providers.results.BR.flatrate?.map(
                                    ({
                                      logo_path,
                                      provider_id,
                                      provider_name,
                                    }) => (
                                      <LazyLoadImage
                                        effect="blur"
                                        src={`https://image.tmdb.org/t/p/w45${logo_path}`}
                                        title={provider_name}
                                        alt={provider_name}
                                        key={provider_id}
                                      />
                                    )
                                  )}
                                </InfoValue>
                              </InfoLi>
                            )}
                          </InfoUl>
                        </DescriptionWrapper>
                      </Details>
                      <Carousel
                        key={title}
                        subtitle="Elenco"
                        cast={credits.cast}
                      />
                      {recommendations.results.length > 0 && (
                        <Carousel
                          key="recommendations"
                          subtitle="Conteúdos recomendados"
                          content={recommendations.results}
                        />
                      )}
                    </>
                  )}
                  {pagination === "episodes" && (
                    <EpisodesContainer>
                      <Select
                        onChange={(e) => getSeason(Number(e.target.value))}
                      >
                        {seasons.map((season) => {
                          if (season.season_number > 0) {
                            return (
                              <Option
                                key={season.season_number}
                                value={season.season_number}
                              >
                                Temporada {season.season_number}
                              </Option>
                            );
                          }
                        })}
                      </Select>
                      <EpisodesWrapper>
                        {episodes?.episodes.map((episode) => {
                          return (
                            <EpisodeContent key={episode.episode_number}>
                              <EpisodeImageContent>
                                {episode.still_path && (
                                  <LazyLoadImage
                                    effect="blur"
                                    src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${episode.still_path}`}
                                    alt={episode.name}
                                    width="100%"
                                    height="100%"
                                  />
                                )}
                              </EpisodeImageContent>
                              <EpisodeName>
                                {`${episode.episode_number}. ${episode.name} ${
                                  episode.runtime != null &&
                                  `(${episode.runtime} min)`
                                }`}
                              </EpisodeName>
                              <EpisodeOverview>
                                {episode.overview}
                              </EpisodeOverview>
                            </EpisodeContent>
                          );
                        })}
                      </EpisodesWrapper>
                    </EpisodesContainer>
                  )}
                  {pagination === "videos" && (
                    <VideosContainer>
                      {videos.results.map((video) => {
                        return (
                          <VideoWrapper
                            key={video.id}
                            onClick={() => {
                              setVideoKey(video.key);
                              setShowTrailer(true);
                            }}
                          >
                            <VideoPosterWrapper>
                              <LazyLoadImage
                                effect="blur"
                                src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
                                alt={video.name}
                                width="100%"
                                height="100%"
                                style={{ objectFit: "cover" }}
                              />
                              <Player>
                                <PlayerContent>
                                  <Play
                                    size={40}
                                    color="#fff"
                                    weight="regular"
                                  />
                                </PlayerContent>
                              </Player>
                            </VideoPosterWrapper>
                            <VideoName>{video.name}</VideoName>
                            <VideoType>{video.type}</VideoType>
                          </VideoWrapper>
                        );
                      })}
                    </VideosContainer>
                  )}
                  {pagination === "photos" && (
                    <PhotosContainer>
                      {images.backdrops && (
                        <PhotosWrapper>
                          <PhotosLengthText>
                            {images.backdrops.length} Papéis de parede
                          </PhotosLengthText>
                          <PhotosContent>
                            {images.backdrops.map((backdrop) => (
                              <PhotoLi key={backdrop.file_path}>
                                <LazyLoadImage
                                  effect="blur"
                                  src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${backdrop.file_path}`}
                                  alt={name || title}
                                  width="100%"
                                  height="100%"
                                  delayMethod="debounce"
                                />
                              </PhotoLi>
                            ))}
                          </PhotosContent>
                        </PhotosWrapper>
                      )}
                      {images.posters && (
                        <PhotosWrapper>
                          <PhotosLengthText>
                            {images.posters.length} Pôsteres
                          </PhotosLengthText>
                          <PhotosContent>
                            {images.posters.map((poster) => (
                              <PhotoLi
                                key={poster.file_path}
                                style={{ maxWidth: "25rem" }}
                              >
                                <LazyLoadImage
                                  effect="blur"
                                  src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster.file_path}`}
                                  alt={name || title}
                                  width="100%"
                                  height="100%"
                                />
                              </PhotoLi>
                            ))}
                          </PhotosContent>
                        </PhotosWrapper>
                      )}
                    </PhotosContainer>
                  )}
                </Container>
              );
            })}
        </>
      )}
      {showTrailer && (
        <Trailer setShowTrailer={setShowTrailer} videoId={videoKey} />
      )}
    </>
  );
};
