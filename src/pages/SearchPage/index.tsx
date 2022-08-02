import { ImageSquare, MagnifyingGlass, Star, StarHalf } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { MultiType } from "../../types/MoviesType";
import {
  Card,
  Container,
  Input,
  NoImage,
  PosterImg,
  PosterWrapper,
  Redirect,
  Searchbar,
  SearchIcon,
  Span,
  Wrapper,
} from "./styles";

export const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const [content, setContent] = useState<MultiType[]>([]);
  const { getSearch } = useContext(GlobalContext);

  useEffect(() => {
    search.length > 0 && getSearch(search, setContent);
  }, [search]);

  return (
    <Container>
      <Searchbar>
        <SearchIcon>
          <MagnifyingGlass size={34} weight="bold" />
        </SearchIcon>
        <Input
          autoFocus={true}
          type="text"
          placeholder="O que você procura?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Searchbar>

      <Wrapper>
        {content?.map((item) => {
          const {
            title,
            name,
            poster_path,
            profile_path,
            id,
            media_type,
            vote_average,
          } = item;

          return (
            <Card key={id}>
              <Redirect to={`/${media_type}/${id}`}>
                {poster_path || profile_path ? (
                  <PosterWrapper>
                    <PosterImg
                      loading="lazy"
                      src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
                        poster_path || profile_path
                      }`}
                      alt={title || name}
                    />
                  </PosterWrapper>
                ) : (
                  <NoImage>
                    <ImageSquare size={40} weight="duotone" />
                  </NoImage>
                )}

                <Span>{title || name}</Span>
                <Span>
                  {vote_average < 6 ? (
                    <StarHalf color="#FFCB47" size={24} weight="fill" />
                  ) : (
                    <Star color="#FFCB47" size={24} weight="fill" />
                  )}
                  {vote_average?.toFixed(1)}
                </Span>
              </Redirect>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};
