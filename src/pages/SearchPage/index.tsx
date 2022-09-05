import { MagnifyingGlass } from "phosphor-react";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SearchResult } from "../../types/MoviesType";

import { Container, Input, Searchbar, SearchIcon, Wrapper } from "./styles";
import { Card } from "../../components/Card";

import { useQuery } from "@tanstack/react-query";

export const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const { getSearch } = useContext(GlobalContext);

  const { data: content } = useQuery<SearchResult[]>(
    ["search", search],
    async () => {
      if (search.length === 0) {
        return [];
      }

      const data = await getSearch(search)!;

      return data;
    }
  );

  return (
    <Container>
      <Searchbar>
        <SearchIcon>
          <MagnifyingGlass size={28} weight="light" />
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
