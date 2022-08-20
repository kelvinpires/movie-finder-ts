import { MagnifyingGlass } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SearchResult } from "../../types/MoviesType";

import { Container, Input, Searchbar, SearchIcon, Wrapper } from "./styles";
import { Card } from "../../components/Card";

export const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const [content, setContent] = useState<SearchResult[]>([]);
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
          const { id } = item;

          return <Card key={id} search={item} />;
        })}
      </Wrapper>
    </Container>
  );
};
