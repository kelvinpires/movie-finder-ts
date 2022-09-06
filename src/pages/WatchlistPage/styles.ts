import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 8rem 4rem 2rem;

  @media screen and (max-width: 500px) {
    padding: 4rem 1rem 2rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 3.6rem;
  color: var(--white);
`;

export const Wrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 5rem;
`;
