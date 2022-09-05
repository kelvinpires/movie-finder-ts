import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  left: 0;

  background-color: var(--black);
  border-right: 0.1rem solid var(--body);

  @media screen and (max-width: 1000px) {
    bottom: 0;
    width: 100%;
    z-index: 999;
  }
  @media screen and (min-width: 1001px) {
    top: 0;
    width: 10rem;
    height: 100%;
  }
`;

export const NavigationUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-top: 10rem;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    padding: 2rem 0;
  }
`;

export const NavigationLi = styled.li`
  gap: 1rem;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  padding-left: 0.1rem;
`;
