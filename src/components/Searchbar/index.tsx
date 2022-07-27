import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Container, Input } from "./styles";

export const Searchbar = () => {
  const { showSearchbar } = useContext(GlobalContext);

  return (
    <Container show={showSearchbar}>
      <Input type="search" placeholder="O que você procura?" />
    </Container>
  );
};
