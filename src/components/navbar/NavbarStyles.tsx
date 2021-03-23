import styled, { css } from "styled-components";

import { MdClose, MdMenu } from "react-icons/md";

export type Nav = {
  navbar?: boolean;
  mobileModal?: boolean;
};

const sharedLinkStyles = css`
  a {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const NavWrapper = styled.div<Nav>`
  z-index: 200;
  height: 9rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  position: fixed;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  ${({ navbar }) =>
    navbar
      ? css`
          box-shadow: 0px 0px 50px 0px ${({ theme }) => theme.colors.secondary};
        `
      : css`
          box-shadow: none;
        `}

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    height: 7rem;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.l};

  padding: 0 4rem;
  height: auto;
  background-color: ${({ theme }) => theme.colors.main};

  ${sharedLinkStyles};

  a {
    color: ${(props) => props.theme.colors.font};
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    padding: 0 2rem;
  }
`;

export const MobilePageWrapper = styled.div<Nav>`
  position: absolute;
  top: 7rem;
  bottom: 0;
  left: 100vw;
  right: 0;
  z-index: 300;

  width: 100%;
  height: 100vh;

  a {
    color: ${(props) => props.theme.colors.font};
  }
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    ${({ mobileModal }) =>
      mobileModal === true
        ? css`
            left: 0;
          `
        : css`
            left: 100vw;
          `}
  }
`;

export const MobileNavLinks = styled.div`
  font-size: ${({ theme }) => theme.fonts.m};

  a {
    color: ${(props) => props.theme.colors.font};
    margin: 0 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    width: 100%;
    height: calc(100% - 7rem);
    position: relative;
    display: flex;
    font-size: ${({ theme }) => theme.fonts.m};
    background-color: ${({ theme }) => theme.colors.main};

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    ${sharedLinkStyles};
    a {
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.main};
      }
    }
  }
`;

export const NavLinks = styled.div`
  font-size: ${({ theme }) => theme.fonts.m};
  ${sharedLinkStyles};

  a {
    transition: all 0.3s ease;

    color: ${(props) => props.theme.colors.font};
    margin: 0 2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    display: none;
  }
`;
export const JoinBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.m};

  padding: 0 4rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${sharedLinkStyles};

  text-decoration: none;
  color: ${({ theme }) => theme.colors.main};

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    display: none;
  }
`;

export const CloseNavButton = styled(MdClose)<Nav>`
  transition: all 0.3s linear;

  ${({ mobileModal }) =>
    mobileModal
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;
export const OpenNavButton = styled(MdMenu)<Nav>`
  transition: all 0.3s linear;

  ${({ mobileModal }) =>
    mobileModal
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;

export const NavButtonWrapper = styled.div`
  display: none;

  padding: 0 2rem;
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    display: block;
  }
`;

export const NavButton = styled.button<Nav>`
  width: 3.5rem;
  height: 3.5rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.main};
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 2rem;

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: 0.3rem;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ mobileModal }) =>
        mobileModal ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ mobileModal }) => (mobileModal ? "0" : "1")};
      transform: ${({ mobileModal }) =>
        mobileModal ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ mobileModal }) =>
        mobileModal ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    display: flex;
  }
`;
