import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 5rem 0 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 2.8rem;
  color: var(--white);
  font-weight: 400;
  margin: 0 2rem 1rem;
`;

export const Content = styled.div`
  position: relative;
`;

export const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  align-items: flex-start;
  gap: 1rem;
  overflow-y: hidden;
  overflow: hidden;
  padding: 0 1rem;
  scroll-behavior: smooth;
`;

export const Card = styled.li`
  min-height: 35rem;
  min-width: 25rem;
`;

export const Redirect = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PosterWrapper = styled.div`
  width: 100%;
  height: 100%;

  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`;

export const Rate = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
  color: var(--white);
`;

// arrows

type SideType = {
  side: string;
};

export const ArrowPagination = styled.div`
  position: absolute;
  color: var(--white);
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0;
  cursor: pointer;

  z-index: 3;
  ${({ side }: SideType) =>
    side == "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  &:hover {
    background-color: #00000090;
  }
`;
