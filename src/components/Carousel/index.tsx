import {
  CaretLeft,
  CaretRight,
  ImageSquare,
  Star,
  StarHalf,
} from "phosphor-react";
import { useRef } from "react";
import { MoviesType, PersonType } from "../../types/MoviesType";
import {
  ArrowPagination,
  Card,
  Container,
  Content,
  DescriptionWrapper,
  Image,
  NotFoundImg,
  PosterWrapper,
  Rate,
  Redirect,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

type Props = {
  content?: MoviesType[];
  recommendations?: Array<{
    name: string;
    title: string;
    id: number;
    media_type: string;
    poster_path: string;
    vote_average: number;
  }>;
  persons?: PersonType[];
  subtitle: string;
};

export const Carousel = ({
  content,
  persons,
  recommendations,
  subtitle,
}: Props) => {
  const carouselRef = useRef<HTMLUListElement | null>(null);

  function handlePagination(side: string) {
    const scroll = carouselRef.current!.offsetWidth;

    if (side == "left") {
      carouselRef.current!.scrollLeft =
        carouselRef.current!.scrollLeft - scroll;
    }
    if (side == "right") {
      carouselRef.current!.scrollLeft =
        carouselRef.current!.scrollLeft + scroll;
    }
  }

  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Content>
        <ArrowPagination side="left" onClick={() => handlePagination("left")}>
          <CaretLeft size={40} weight="bold" />
        </ArrowPagination>
        <Wrapper ref={carouselRef}>
          {content?.map((item) => {
            return (
              <Card key={item.id}>
                <Redirect to={`/${item.media_type}/${item.id}`}>
                  {item.poster_path ? (
                    <PosterWrapper>
                      <Image
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`}
                      />
                    </PosterWrapper>
                  ) : (
                    <NotFoundImg>
                      <ImageSquare color="#999" weight="duotone" size={60} />
                    </NotFoundImg>
                  )}
                  <DescriptionWrapper>
                    <Title>{item.title || item.name}</Title>
                    <Rate>
                      {item.vote_average < 6 ? (
                        <StarHalf color="#FFCB47" size={24} weight="fill" />
                      ) : (
                        <Star color="#FFCB47" size={24} weight="fill" />
                      )}

                      {item.vote_average}
                    </Rate>
                  </DescriptionWrapper>
                </Redirect>
              </Card>
            );
          })}
          {persons?.map((person) => {
            return (
              <Card key={person.id}>
                <Redirect to={`/person/${person.id}`}>
                  {person.profile_path ? (
                    <PosterWrapper>
                      <Image
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${person.profile_path}`}
                      />
                    </PosterWrapper>
                  ) : (
                    <NotFoundImg>
                      <ImageSquare color="#999" weight="duotone" size={60} />
                    </NotFoundImg>
                  )}

                  <DescriptionWrapper>
                    <Title as="span">{person.name}</Title>
                    <Title style={{ color: "#999" }} as="span">
                      {person.character}
                    </Title>
                  </DescriptionWrapper>
                </Redirect>
              </Card>
            );
          })}
          {recommendations?.map((item) => {
            return (
              <Card key={item.id}>
                <Redirect to={`/${item.media_type}/${item.id}`}>
                  {item.poster_path ? (
                    <PosterWrapper>
                      <Image
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`}
                      />
                    </PosterWrapper>
                  ) : (
                    <NotFoundImg>
                      <ImageSquare color="#999" weight="duotone" size={60} />
                    </NotFoundImg>
                  )}
                  <DescriptionWrapper>
                    <Title>{item.title || item.name}</Title>
                    <Rate>
                      {item.vote_average < 6 ? (
                        <StarHalf color="#FFCB47" size={24} weight="fill" />
                      ) : (
                        <Star color="#FFCB47" size={24} weight="fill" />
                      )}

                      {item.vote_average}
                    </Rate>
                  </DescriptionWrapper>
                </Redirect>
              </Card>
            );
          })}
        </Wrapper>
        <ArrowPagination side="right" onClick={() => handlePagination("right")}>
          <CaretRight size={40} weight="bold" />
        </ArrowPagination>
      </Content>
    </Container>
  );
};
