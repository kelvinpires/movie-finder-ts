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
