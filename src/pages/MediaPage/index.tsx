import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { GlobalContext } from "../../context/GlobalContext";
import { MoviesType } from "../../types/MoviesType";
import {
  DescriptionWrapper,
  Details,
  Image,
  InfoLabel,
  InfoLi,
  InfoUl,
  InfoValue,
  Overview,
  PosterWrapper,
  Subtitle,
  Title,
} from "./styles";

export const MediaPage = () => {
  const [content, setContent] = useState<MoviesType[]>([]);
  const { getDetails } = useContext(GlobalContext);

  const { media_type, id } = useParams();

  useEffect(() => {
    getDetails(media_type!, Number(id)!, setContent);
  }, []);

  return (
    <>
      <Banner content={content} />
      {content.length > 0 && (
        <>
          {content.map((item) => {
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
              <Details key={id}>
                <PosterWrapper>
                  <Image
                    src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`}
                    alt={`Pôster de ${title || name}`}
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
                            ({ logo_path, provider_id, provider_name }) => (
                              <img
                                key={provider_id}
                                src={`https://image.tmdb.org/t/p/w45${logo_path}`}
                                title={provider_name}
                                alt={provider_name}
                              />
                            )
                          )}
                        </InfoValue>
                      </InfoLi>
                    )}
                  </InfoUl>
                </DescriptionWrapper>
              </Details>
            );
          })}
        </>
      )}
    </>
  );
};
