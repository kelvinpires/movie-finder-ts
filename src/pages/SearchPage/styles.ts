import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;
`;

export const Searchbar = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
  border-radius: 0.8rem;
  background-color: #1e1e26;
  padding: 4rem 0 4rem;
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;
export const SearchIcon = styled.div`
  width: 5rem;
  position: absolute;
  left: 0;
  padding: 0.5rem 1.5rem;
  color: var(--white);
`;

export const Input = styled.input`
  position: absolute;
  right: 0;
  width: calc(100% - 5rem);
  top: 0;
  height: 100%;
  border: 0;
  outline: 0;
  padding: 1rem;
  color: var(--white);
  font-weight: 500;
  font-size: 2.2rem;
  background-color: transparent;

  &::placeholder {
    color: var(--gray);
    font-weight: 500;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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

export const NoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--gray);
  color: var(--white);
  min-height: 37rem;
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
