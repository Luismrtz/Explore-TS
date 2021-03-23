import styled, { css } from "styled-components";

export type SortType = {
  changeMe?: string;
};

const sharedStyles = css`
  color: ${({ theme }) => theme.colors.font};
  flex: 1 1;
  padding-top: 1rem;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colors.main};
  overflow: hidden;
`;

export const FilterWrapper = styled.div`
  padding: 2rem;
  max-width: 80rem;
  margin: 8rem auto;

  @media ${({ theme }) => theme.mediaQueries.below500} {
  }
`;

export const FilterTabs = styled.div<SortType>`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.below500} {
    padding: 0 2rem;
  }
`;

export const Tab1 = styled.div<SortType>`
  transition: all 0.3s ease-in-out;

  ${sharedStyles}

  ${({ changeMe }) =>
    changeMe === "a"
      ? css`
          border-top: 0.3rem solid ${({ theme }) => theme.colors.tertiary};
        `
      : css`
          border-top: 0.3rem solid ${({ theme }) => theme.colors.filterLine};
        `}

    @media ${({ theme }) => theme.mediaQueries.below750} {
    font-size: ${({ theme }) => theme.fonts.s};
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: ${({ theme }) => theme.fonts.xs};
  }
`;
export const Tab2 = styled.div<SortType>`
  transition: all 0.3s ease-in-out;
  ${sharedStyles}
  ${({ changeMe }) =>
    changeMe === "b"
      ? css`
          border-top: 0.3rem solid ${({ theme }) => theme.colors.tertiary};
        `
      : css`
          border-top: 0.3rem solid ${({ theme }) => theme.colors.filterLine};
        `}


@media ${({ theme }) => theme.mediaQueries.below750} {
    font-size: ${({ theme }) => theme.fonts.s};
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: ${({ theme }) => theme.fonts.xs};
  }
`;

export const Tab3 = styled.div<SortType>`
  transition: all 0.3s ease-in-out;
  ${sharedStyles}
  ${({ changeMe }) =>
    changeMe === "c"
      ? css`
          border-top: 0.3rem solid ${({ theme }) => theme.colors.tertiary};
        `
      : css`
          border-top: 0.3rem solid ${({ theme }) => theme.colors.filterLine};
        `}

@media ${({ theme }) => theme.mediaQueries.below750} {
    font-size: ${({ theme }) => theme.fonts.s};
  }
  @media ${({ theme }) => theme.mediaQueries.below500} {
    font-size: ${({ theme }) => theme.fonts.xs};
  }
`;

export const SelectFilter = styled.select`
  width: 100%;
  height: 3.5rem;
  background: ${({ theme }) => theme.colors.main};
  padding-left: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.xs};
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  option {
    position: relative;

    color: ${({ theme }) => theme.colors.font};
    background: ${({ theme }) => theme.colors.main};
    display: flex;
    text-overflow: ellipsis;

    min-height: 2rem;
  }
`;

export const TabCard = styled.div`
  margin: 10rem auto 0;
  max-width: 80rem;
  height: 35rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 10px;

  box-shadow: 0 5px 16px ${({ theme }) => theme.colors.boxShadow};

  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${({ theme }) => theme.mediaQueries.below750} {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 35rem 35rem;
  }
`;
export const TabImg = styled.img`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const TabContent = styled.div`
  margin: 6rem;
  display: flex;
  flex-direction: column;

  align-items: left;

  h1 {
    font-size: ${({ theme }) => theme.fonts.l};
    color: ${({ theme }) => theme.colors.font};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.s};
  }
`;

export const TabLine = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  margin: 3rem 0 3rem;
`;

export const FilterButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fonts.s};
  border: 0;
  border-radius: 5rem;
  height: 4rem;
  max-width: 10rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;

  margin-top: 3.5rem;

  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
