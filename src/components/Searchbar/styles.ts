import styled, { css } from "styled-components";

type ShowbarType = {
  show: boolean;
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-left: 10rem;
  height: 8rem;
  background-color: var(--body);
  z-index: 100;

  transition: all 0.25s ease-in-out;

  ${({ show }: ShowbarType) =>
    show
      ? css`
          transform: translateY(0%);
        `
      : css`
          transform: translateY(-100%);
        `}
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  height: 100%;
  color: var(--white);
  font-size: 1.8rem;
  padding: 1rem 4rem;
  background-color: transparent;

  &::placeholder {
    color: var(--gray);
  }
`;
