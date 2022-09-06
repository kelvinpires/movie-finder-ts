import {
  CaretLeft,
  CaretRight,
  Check,
  Play,
  Plus,
  Star,
  StarHalf,
} from "phosphor-react";
import { useContext, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { ContentResponse } from "../../types/MoviesType";
import {
  ActionWrapper,
  ArrowPagination,
  BackdropWapper,
  Button,
  Certification,
  Container,
  Content,
  DescriptionWrapper,
  Image,
  InfoWrapper,
  LogoTitleWrapper,
  Overview,
  Pagination,
  PaginationContainer,
  Redirect,
  Span,
  TitleText,
  Wrapper,
} from "./styles";

type Props = {
  content: ContentResponse[];
  setShowTrailer?: (state: boolean) => void;
  setVideoKey?: (state: string) => void;
};

export const Banner = ({ content, setShowTrailer, setVideoKey }: Props) => {
  const [position, setPosition] = useState<number>(0);

  const { addToWatchlist, removeFromWatchlist, store } =
    useContext(GlobalContext);

  function handlePagination(index: number) {
    if (index < 0) {
      return setPosition(0);
    }
    if (index > content.length - 1) {
      return setPosition(content.length - 1);
    }

    setPosition(index);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePagination(position + 1),
    onSwipedRight: () => handlePagination(position - 1),
  });

  return (
    <Container>
      {content.length > 1 && position > 0 && (
        <ArrowPagination
          side="left"
          onClick={() => handlePagination(position - 1)}
        >
          <CaretLeft weight="bold" size={40} />
        </ArrowPagination>
      )}

      <Wrapper {...handlers}>
        {content?.map((movie) => {
          const {
            title,
            name,
            backdrop_path,
            id,
            media_type,
            overview,
            images,
            vote_average,
            runtime,
            content_ratings,
            release_dates,
            release_date,
            first_air_date,
            videos,
          } = movie;

          // is stored?
          const isStored = store.watchlist.find((item) => item.id === id);

          // overview
          const newOverview =
            overview.length > 200 ? overview.slice(0, 200) + "..." : overview;

          // certification
          const certification = content_ratings
            ? content_ratings.results[0]?.rating
            : release_dates.results[0]?.release_dates[0].certification;

          // date
          const date = release_date
            ? new Date(release_date).toLocaleDateString()
            : new Date(first_air_date).toLocaleDateString();

          // runtime

          const totalHours = runtime / 60;
          const hour = Math.floor(totalHours);
          const minutes = Math.round((totalHours - hour) * 60);
          let time = `${hour}h ${minutes}min`;

          time = runtime > 0 ? time : "";

          const isButtonDisabled = videos.results.length < 1;

          return (
            <Content
              key={id}
              style={{ transform: `translateX(-${position * 100}%)` }}
            >
              <DescriptionWrapper>
                <Link
                  style={{ textDecoration: "none", maxWidth: "80%" }}
                  to={`/${media_type}/${id}`}
                >
                  {images.logos.length > 0 ? (
                    <LogoTitleWrapper>
                      <LazyLoadImage
                        effect="blur"
                        alt={title || name}
                        title={title || name}
                        src={`https://image.tmdb.org/t/p/w400${images.logos[0]?.file_path}`}
                        width="100%"
                        height="100%"
                        style={{ maxHeight: "20rem" }}
                        className="logo-img"
                      />
                    </LogoTitleWrapper>
                  ) : (
                    <TitleText>{title || name}</TitleText>
                  )}
                </Link>
                <InfoWrapper>
                  <Span>
                    {vote_average < 6 ? (
                      <StarHalf color="#FFCB47" size={20} weight="fill" />
                    ) : (
                      <Star color="#FFCB47" size={20} weight="fill" />
                    )}
                    {`${vote_average.toFixed(1)} • ${date}  ${
                      time ? " • " + time : ""
                    } •`}
                    {certification && (
                      <Certification>{certification}</Certification>
                    )}
                  </Span>
                </InfoWrapper>
                <Overview>{newOverview}</Overview>
                <ActionWrapper>
                  {content.length > 1 ? (
                    <Redirect to={`/${media_type}/${id}`}>Detalhes</Redirect>
                  ) : (
                    <Button
                      disabled={isButtonDisabled}
                      onClick={() => {
                        setVideoKey?.(videos.results[0].key);
                        setShowTrailer?.(true);
                      }}
                      className="trailer-btn"
                    >
                      <Play weight="fill" size={20} />
                      Trailer
                    </Button>
                  )}

                  {!isStored ? (
                    <Button
                      onClick={() => addToWatchlist({ media_type, id })}
                      title="Adicionar à lista"
                      className="watchlist"
                    >
                      <Plus weight="bold" size={20} />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => removeFromWatchlist({ media_type, id })}
                      title="Remover da lista"
                      className="watchlist"
                    >
                      <Check weight="bold" size={20} />
                    </Button>
                  )}
                </ActionWrapper>
              </DescriptionWrapper>
              <BackdropWapper>
                <Image
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                />
              </BackdropWapper>
            </Content>
          );
        })}
      </Wrapper>
      {content.length > 1 && position < 6 && (
        <ArrowPagination
          side="right"
          onClick={() => handlePagination(position + 1)}
        >
          <CaretRight weight="bold" size={40} />
        </ArrowPagination>
      )}

      <PaginationContainer>
        {content.length > 1 && (
          <>
            {content?.map((movie, index) => {
              return (
                <Pagination
                  position={index === position}
                  key={movie.id}
                  onClick={() => handlePagination(index)}
                />
              );
            })}
          </>
        )}
      </PaginationContainer>
    </Container>
  );
};
