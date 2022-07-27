import { ArrowLeft, ArrowRight, Plus } from "phosphor-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesType } from "../../types/MoviesType";
import {
  ActionWrapper,
  ArrowPagination,
  BackdropWapper,
  Button,
  Container,
  Content,
  DescriptionWrapper,
  Image,
  Overview,
  Pagination,
  PaginationContainer,
  Redirect,
  Title,
  Wrapper,
} from "./styles";

type Props = {
  content: MoviesType[];
};

export const Banner = ({ content }: Props) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function handlePagination(side: string, index?: number) {
    const scroll = carouselRef.current!.offsetWidth;

    if (side == "left") {
      carouselRef.current!.scrollLeft =
        carouselRef.current!.scrollLeft - scroll;
    }
    if (side == "right") {
      carouselRef.current!.scrollLeft =
        carouselRef.current!.scrollLeft + scroll;
    }

    if (side == "pagination") {
      carouselRef.current!.scrollLeft = Math.round(
        carouselRef.current!.offsetWidth * index!
      );
    }
  }

  return (
    <Container>
      <ArrowPagination side="left" onClick={() => handlePagination("left")}>
        <ArrowLeft weight="bold" size={40} />
      </ArrowPagination>
      <Wrapper ref={carouselRef}>
        {content?.map((movie) => {
          const { title, name, backdrop_path, id, media_type, overview } =
            movie;
          const newOverview =
            overview.length > 250 ? overview.slice(0, 250) + "..." : overview;

          return (
            <Content key={id}>
              <DescriptionWrapper>
                <Link
                  style={{ textDecoration: "none", width: "100%" }}
                  to={`/${media_type}/${id}`}
                >
                  <Title>{title || name}</Title>
                </Link>
                <Overview>{newOverview}</Overview>
                <ActionWrapper>
                  <Redirect to={`/${media_type}/${id}`}>Detalhes</Redirect>
                  <Button>
                    <Plus size={20} />
                    Adicionar à lista
                  </Button>
                </ActionWrapper>
              </DescriptionWrapper>
              <BackdropWapper>
                <Image
                  loading="lazy"
                  src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
                />
              </BackdropWapper>
            </Content>
          );
        })}
      </Wrapper>
      <ArrowPagination side="right" onClick={() => handlePagination("right")}>
        <ArrowRight weight="bold" size={40} />
      </ArrowPagination>
      <PaginationContainer>
        {content.length > 1 && (
          <>
            {content?.map((movie, index) => {
              return (
                <Pagination
                  key={movie.id}
                  onClick={() => handlePagination("pagination", index)}
                />
              );
            })}
          </>
        )}
      </PaginationContainer>
    </Container>
  );
};
