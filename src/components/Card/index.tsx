import { ImageSquare, Star, StarHalf } from "phosphor-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  ContentResponse,
  MovieCast,
  TvCast,
  ResultRecommendations,
  SearchResult,
  PersonMovieCastInfo,
  PersonTvCastInfo,
} from "../../types/MoviesType";
import {
  CardLi,
  DescriptionWrapper,
  NotFoundImg,
  PosterWrapper,
  Rate,
  Redirect,
  Title,
} from "./styles";

type CardT = {
  item?:
    | ContentResponse
    | ResultRecommendations
    | PersonMovieCastInfo
    | PersonTvCastInfo;
  cast?: MovieCast & TvCast;
  search?: SearchResult;
};

export const Card = ({ item, cast, search }: CardT) => {
  return (
    <CardLi>
      <Redirect
        to={`/${item?.media_type || search?.media_type || "person"}/${
          item?.id || cast?.id || search?.id
        }`}
      >
        {item?.poster_path ||
        cast?.profile_path ||
        search?.profile_path ||
        search?.poster_path ? (
          <PosterWrapper>
            <LazyLoadImage
              effect="blur"
              src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
                item?.poster_path ||
                cast?.profile_path ||
                search?.profile_path ||
                search?.poster_path
              }`}
              width="100%"
              height="100%"
            />
          </PosterWrapper>
        ) : (
          <NotFoundImg>
            <ImageSquare color="#999" weight="duotone" size={60} />
          </NotFoundImg>
        )}
        <DescriptionWrapper>
          <Title>
            {item?.title ||
              item?.name ||
              cast?.name ||
              search?.title ||
              search?.name}
          </Title>
          {cast?.character && (
            <Title style={{ color: "#999" }} as="span">
              {cast?.character}
            </Title>
          )}
          {item?.vote_average && (
            <Rate>
              {item?.vote_average < 6 ? (
                <StarHalf color="#FFCB47" size={24} weight="fill" />
              ) : (
                <Star color="#FFCB47" size={24} weight="fill" />
              )}

              {item?.vote_average.toFixed(1)}
            </Rate>
          )}

          {search?.vote_average && (
            <Rate>
              {search?.vote_average < 6 ? (
                <StarHalf color="#FFCB47" size={24} weight="fill" />
              ) : (
                <Star color="#FFCB47" size={24} weight="fill" />
              )}

              {search?.vote_average.toFixed(1)}
            </Rate>
          )}
        </DescriptionWrapper>
      </Redirect>
    </CardLi>
  );
};
