import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 8rem 4rem 2rem;
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

export const Card = styled.li`
  width: 25rem;
  min-height: 35rem;
  margin-bottom: 1rem;
`;

export const Redirect = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
`;

export const PosterWrapper = styled.div`
  width: 100%;
  height: 100%;
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
