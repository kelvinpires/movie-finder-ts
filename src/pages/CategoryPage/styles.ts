import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 5rem;
  text-align: center;
`;

export const GenresWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
`;

type GenreProps = {
  isActive: boolean;
};

export const Genre = styled.span`
  border: 0.1rem solid #343434;

  color: var(--white);
  border-radius: 3rem;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 3rem;
  text-transform: uppercase;
  cursor: pointer;

  ${({ isActive }: GenreProps) =>
    isActive &&
    css`
      background-color: var(--white);
      color: var(--black);
      border-color: var(--white);
    `}
`;

export const ContentWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
  margin: 10rem 0;
`;

export const Button = styled.button`
  border: 0;
  padding: 1.5rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  background-color: var(--white);
  color: var(--black);
  border-radius: 0.3rem;
  cursor: pointer;
`;
