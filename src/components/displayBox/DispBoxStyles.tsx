import styled from "styled-components";

export type DTypes = {
  inputColor?: string;
  swap?: number;
};

export const DisplayBoxPage = styled.div`
  width: 100%;

  max-height: auto;
  background-color: ${({ theme }) => theme.colors.main};
  position: relative;
`;

//? grid of 4 container

export const DisplayImg = styled.img`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const DisplayBox = styled.div<DTypes>`
  padding: 4rem;

  background-color: ${({ inputColor }) =>
    inputColor ? inputColor : "orangered"};
`;

export const DisplayBoxTextWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DisplayBoxText = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  h1 {
    font-size: ${({ theme }) => theme.fonts.xl};
    margin-bottom: 2rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.m};
    margin-bottom: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below750} {
    width: auto;
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    text-align: center;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: ${({ theme }) => theme.fonts.l};
    }
    h2 {
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }
`;

export const BoxButtonWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;
export const BoxButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.fonts.m};

  border-radius: 5rem;
  height: 7rem;
  width: 20rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.dark};
  transition: all 0.3s ease;

  &:focus {
    outline: 0;
    outline-style: none;
    outline-width: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.below500} {
    height: 5.5rem;
    width: 17rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.main};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const DisplayBoxContainer = styled.div`
  display: grid;
  z-index: 150;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80rem 80rem;
  padding: 0 6rem;
  overflow: hidden;

  margin: 0 auto;
  top: -14rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    grid-template-columns: 1fr;
    grid-auto-rows: 80rem 80rem 80rem 80rem;

    ${DisplayBox}:nth-child(3) {
      grid-row: 4 / 5;
    }

    ${DisplayImg}:nth-child(4) {
      grid-row: 3 / 4;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.below1500} {
  }
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    top: 0;
    padding: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.below750} {
    grid-auto-rows: 1fr;
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
  }
`;
