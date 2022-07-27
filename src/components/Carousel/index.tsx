import { ArrowLeft, ArrowRight, Star, StarHalf } from "phosphor-react";
import { useRef } from "react";
import { MoviesType } from "../../types/MoviesType";
import {
  ArrowPagination,
  Card,
  Container,
  Content,
  DescriptionWrapper,
  Image,
  PosterWrapper,
  Rate,
  Redirect,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

type Props = {
  content: MoviesType[];
  subtitle: string;
};

export const Carousel = ({ content, subtitle }: Props) => {
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
          <ArrowLeft size={40} weight="bold" />
        </ArrowPagination>
        <Wrapper ref={carouselRef}>
          {content.map((item) => {
            return (
              <Card key={item.id}>
                <Redirect to={`/${item.media_type}/${item.id}`}>
                  <PosterWrapper>
                    <Image
                      src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`}
                    />
                  </PosterWrapper>
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
          <ArrowRight size={40} weight="bold" />
        </ArrowPagination>
      </Content>
    </Container>
  );
};
