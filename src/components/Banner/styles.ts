import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

export const Content = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  left: 0;
  max-width: 50%;
  top: 0;
  height: 100%;
  padding-left: 8rem;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background: linear-gradient(to right, #000 80%, #1f1f1e00);
`;

export const Title = styled.h1`
  font-size: 4.6rem;
  font-weight: 400;
  color: var(--white);
  max-width: 90%;
`;

export const Overview = styled.p`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;
  line-height: 1.6;
  max-width: 90%;
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
`;

export const Redirect = styled(Link)`
  text-decoration: none;
  padding: 1.5rem 2rem;
  font-size: 2.2rem;
  background-color: var(--body);
  color: var(--white);
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--body);
  &:hover {
    background-color: #1f1f1e60;
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 1.5rem 2rem;
  font-size: 2.2rem;
  background-color: #1f1f1e60;
  border: 0.2rem solid var(--body);
  color: var(--white);
  font-weight: 500;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--body);
  }
`;

export const BackdropWapper = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
    background-color: #1f1f1e60;
  }
`;

// pagination

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  z-index: 6;
`;

export const Pagination = styled.button`
  border: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--white);
`;
