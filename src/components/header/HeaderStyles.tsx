import styled from "styled-components";

import { HeaderTypes } from "./Header";

export const HeaderWrapper = styled.div<HeaderTypes>`
  z-index: -1;
  width: 100%;
  height: 115vh;
  position: relative;

  background-image: url("/images/canyon-1740973_1920.jpg");

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${({ theme }) => theme.mediaQueries.below650} {
    height: 85vh;
    background-image: url("/images/canyon-1740973_640.jpg");
  }
`;

export const HeaderContainer = styled.div`
  z-index: 20;
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding: 2rem; */
`;

export const HeaderTitleWrapper = styled.div``;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.mega};
  letter-spacing: 5px;
  color: ${({ theme }) => theme.colors.main};
  padding: 0 2rem;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    font-size: ${({ theme }) => theme.fonts.mega};
  }
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    font-size: ${({ theme }) => theme.fonts.xxxl};
  }
  @media ${({ theme }) => theme.mediaQueries.below750} {
    font-size: ${({ theme }) => theme.fonts.xxxl};
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: ${({ theme }) => theme.fonts.xl};
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    font-size: ${({ theme }) => theme.fonts.xll};
  }
`;
export const Headerh2 = styled.h2`
  font-size: ${({ theme }) => theme.fonts.xl};
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 4rem;
  padding: 0 2rem;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    font-size: ${({ theme }) => theme.fonts.xl};
  }
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    font-size: ${({ theme }) => theme.fonts.l};
  }
  @media ${({ theme }) => theme.mediaQueries.below750} {
    font-size: ${({ theme }) => theme.fonts.l};
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: ${({ theme }) => theme.fonts.s};
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    font-size: ${({ theme }) => theme.fonts.xs};
  }
`;

export const HeaderBtnWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;
export const HeaderBtn = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.fonts.l};
  border: 0;
  border-radius: 5rem;
  height: 7rem;
  width: 20rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.main};

  transition: all 0.3s ease;

  &:focus {
    outline: 0;
    outline-style: none;
    outline-width: 0;
  }

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    font-size: ${({ theme }) => theme.fonts.m};
    height: 5.5rem;
    width: 13.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: ${({ theme }) => theme.fonts.s};
    height: 4rem;
    width: 11.5rem;
  }
`;
