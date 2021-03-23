import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  bottom: 0;

  display: flex;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    justify-content: center;
    align-content: center;

    align-self: center;
    justify-self: center;
  }
`;

export const One = styled.div`
  flex: 1 2 30rem;

  background-color: ${({ theme }) => theme.colors.main};
  position: relative;

  display: flex;
  justify-content: flex-end;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const OneWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    width: 100%;
  }
`;

export const OneContentOne = styled.div`
  position: relative;

  justify-self: start;
  align-self: flex-start;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    justify-self: center;
    align-self: center;
  }
`;
export const OneContentMenu = styled.div`
  font-size: ${({ theme }) => theme.fonts.l};
  font-weight: bold;
  margin: 6rem 0 2rem 0;
`;

export const OneContentTwo = styled.div`
  position: relative;

  justify-self: start;
  align-self: flex-start;
  line-height: 4rem;
  font-size: ${({ theme }) => theme.fonts.xxs};
  @media ${({ theme }) => theme.mediaQueries.below1500} {
    text-align: center;
    justify-self: center;
    align-self: center;
  }
`;

const sharedStyles = css`
  background-color: ${({ theme }) => theme.colors.main};
  height: 40px;

  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  margin: 1rem 0 2rem 0;
  padding: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.dark};
  }
`;

export const InputContainer = styled.div`
  flex: 1 1 50rem;
  background-color: ${({ theme }) => theme.colors.main};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;

export const FormWrapper = styled.div``;

export const StyledForm = styled.form`
  width: 100%;

  padding: 4rem;

  box-sizing: border-box;

  label {
    font-size: ${({ theme }) => theme.fonts.m};
  }

  h1 {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fonts.l};
    margin-bottom: 5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below750} {
    padding: 4rem 2rem;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;

  ${sharedStyles}
`;

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const StyledButton = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fonts.m};
  border: 0;
  border-radius: 5rem;
  height: 7rem;
  width: 100%;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;

  transition: all 0.3s ease;

  &:focus {
    outline: 0;
    outline-style: none;
    outline-width: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    max-width: 70rem;
  }
`;

export const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.alert};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.m};
  margin: 0 0 40px 0;
`;

export const Three = styled.div`
  flex: 1 2 30rem;

  background-color: ${({ theme }) => theme.colors.main};
  position: relative;

  display: flex;
  justify-content: flex-start;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    text-align: center;
  }
`;

export const ThreeWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    width: 100%;
  }
`;

export const ThreeContentOne = styled.div`
  position: relative;
  left: 5rem;

  justify-self: end;
  align-self: flex-start;

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    left: 0;
    justify-self: center;
    align-self: center;
  }
`;
export const ThreeContentMenu = styled.div`
  font-size: ${({ theme }) => theme.fonts.l};
  font-weight: bold;
  margin: 6rem 0 2rem 0;
`;
export const StyleLink = styled.p`
  font-weight: bold;
  line-height: 2em;
  font-size: ${({ theme }) => theme.fonts.m};

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const ThreeContentTwo = styled.div`
  position: relative;

  left: 5rem;
  justify-self: start;
  align-self: flex-start;

  a {
    color: ${({ theme }) => theme.colors.font};
    text-decoration: none;
  }

  @media ${({ theme }) => theme.mediaQueries.below1500} {
    left: 0;
    justify-self: center;
    align-self: center;
  }
`;

export const CopyWriteWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

export const CopyWrite = styled.div`
  position: relative;
  white-space: nowrap;

  font-size: ${({ theme }) => theme.fonts.xs};
`;
