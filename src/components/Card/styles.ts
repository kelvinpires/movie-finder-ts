import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardLi = styled.li`
  min-height: 35rem;
  width: 25rem;
`;

export const Redirect = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PosterWrapper = styled.div`
  height: 100%;
  width: 25rem;

  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const NotFoundImg = styled.div`
  width: 25rem;
  height: 37rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--gray);
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 700;
  text-align: left;
`;

export const Rate = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  color: var(--white);
`;
