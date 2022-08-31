import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.main`
  padding: 5rem;
`;

export const PersonWrapper = styled.section`
  display: flex;
  gap: 2rem;
`;

export const ProfilePhoto = styled.div`
  background-color: var(--black);
  max-height: 40rem;
  height: 100%;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Name = styled.h1`
  font-size: 2.6rem;
  color: var(--white);
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Bio = styled.p`
  font-size: 1.6rem;
  color: var(--white);
  line-height: 1.5;
`;

export const PersonInfoUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

export const PersonInfoLi = styled.li`
  color: var(--white);
  font-size: 1.8rem;
  display: flex;
`;

export const Label = styled.span`
  flex: 1;
`;

export const Value = styled.span`
  flex: 2;
  margin-left: 1rem;
`;

// pagination

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

type PaginationType = {
  clicked: boolean;
};

export const Pagination = styled(Link)`
  text-decoration: none;
  padding: 2rem;
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  font-size: 2.4rem;
  border-bottom: 0.2rem solid transparent;

  &:hover {
    background-color: #99999920;
  }

  ${({ clicked }: PaginationType) =>
    clicked &&
    css`
      border-color: var(--gray);
    `}
`;

export const ItemsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
`;

export const PhotoWrapper = styled.div`
  max-width: 25rem;
  height: auto;
`;
