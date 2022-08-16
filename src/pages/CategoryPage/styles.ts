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
  border: 0.2rem solid var(--gray);
  color: var(--gray);
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 2rem;
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

export const Card = styled.li`
  width: 25rem;
  min-height: 35rem;
  margin-bottom: 1rem;

  @keyframes animate {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    50% {
      opacity: 0.5;
      visibility: visible;
    }
    100% {
      opacity: 1;
    }
  }

  animation: animate 0.25s ease-in;
`;

export const Redirect = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
`;

export const PosterWrapper = styled.div`
  width: 100%;
  height: 35rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  border: 0;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  background-color: var(--white);
  color: var(--black);
  border-radius: 0.3rem;
  cursor: pointer;
`;
