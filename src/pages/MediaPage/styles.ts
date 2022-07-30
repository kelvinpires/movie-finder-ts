import styled from "styled-components";

export const Container = styled.div``;

export const Details = styled.section`
  padding: 10rem 5rem 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

export const PosterWrapper = styled.div`
  min-width: 37rem;
  min-height: 55.6rem;
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
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  color: var(--white);
`;

export const Subtitle = styled.span`
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--white);
  margin-top: 3rem;
`;

export const Overview = styled.p`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;
  line-height: 1.6;
`;

export const InfoUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  list-style: none;
  gap: 2rem;
`;

export const InfoLi = styled.li`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.span`
  color: var(--white);
  flex: 1;
  margin-right: 1rem;
`;

export const InfoValue = styled.span`
  color: var(--white);
  flex: 4;
  display: flex;
  gap: 1rem;
`;
