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
  margin: 0 5rem 1rem;
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
  padding: 0 5rem;
  scroll-behavior: smooth;

  @media screen and (max-width: 768px) {
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    padding-right: 1rem;
  }
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
    background: linear-gradient(to top, #00000000 5%, #00000090);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
