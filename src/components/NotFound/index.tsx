import React from "react";
import { Container, Content, LinkToHome, Text } from "./styles";

interface Props {
  text: string;
}

export const NotFound = ({ text }: Props) => {
  return (
    <Container>
      <Content>
        <Text>
          {text} não encontrado(a). <br /> Retorne à página principal.
        </Text>

        <LinkToHome to="/">Home</LinkToHome>
      </Content>
    </Container>
  );
};
