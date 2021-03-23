import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};

  height: auto;
`;

export const CardWrapper = styled.div`
  max-width: 150rem;
  padding: 0 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12rem;
  position: relative;
  top: -12rem;
  @media ${({ theme }) => theme.mediaQueries.below1500} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    top: 0;
    padding-top: 2rem;
  }
`;

export const Card1 = styled.div`
  height: 55rem;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.dark};
`;

export const CardInner = styled.div`
  margin: 3rem 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.fonts.m};
  }
  h2 {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.xxl};
  }

  h3 {
  }
  p {
    margin-top: 3rem;
    font-size: ${({ theme }) => theme.fonts.s};
  }

  @media ${({ theme }) => theme.mediaQueries.below500} {
    margin: 3rem 4rem;
  }
`;
export const Paragraph = styled.div`
  margin: 3rem 0;
  font-size: ${({ theme }) => theme.fonts.s};
`;

export const CardButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fonts.m};
  border: 0;

  height: 4rem;
  width: 85%;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;

  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
