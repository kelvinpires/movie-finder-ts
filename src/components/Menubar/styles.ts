import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 10rem;
  height: 100%;
  background-color: var(--black);
  border-right: 0.1rem solid var(--body);
`;

export const NavigationUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-top: 10rem;
`;

export const NavigationLi = styled.li`
  gap: 1rem;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: var(--white);
  padding-left: 0.1rem;
`;
