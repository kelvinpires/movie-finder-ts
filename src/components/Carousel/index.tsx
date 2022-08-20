import { CaretLeft, CaretRight } from "phosphor-react";
import { useRef } from "react";
import {
  ContentResponse,
  Cast,
  ResultRecommendations,
} from "../../types/MoviesType";
import { Card } from "../Card";
import {
  ArrowPagination,
  Container,
  Content,
  Subtitle,
  Wrapper,
} from "./styles";

type Props = {
  content?: ContentResponse[] | ResultRecommendations[];
  cast?: Cast[];
  subtitle: string;
};

export const Carousel = ({ content, cast, subtitle }: Props) => {
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
            return <Card key={item.id} item={item} />;
          })}

          {cast?.map((person) => {
            return <Card key={person.id} cast={person} />;
          })}
        </Wrapper>
        <ArrowPagination side="right" onClick={() => handlePagination("right")}>
          <CaretRight size={40} weight="bold" />
        </ArrowPagination>
      </Content>
    </Container>
  );
};
