import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;
  border-radius: 0.5rem;
  background-color: var(--body);
  color: var(--white);
  cursor: pointer;
  padding: 0.5rem;
`;
