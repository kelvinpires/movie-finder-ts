import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--body);
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Text = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--white);
`;

export const LinkToHome = styled(Link)`
  padding: 1rem 2rem;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--black);
  background: var(--yellow);
  text-decoration: none;
  border-radius: 0.4rem;
`;
