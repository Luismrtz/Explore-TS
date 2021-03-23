import styled from "styled-components";
import { MdClose, MdSearch } from "react-icons/md";

export type PokeTypes = {
  isOn: boolean;
};

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0;
  z-index: 10;
`;
export const SearchInputButton = styled(MdSearch)``;

export const FormWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
`;

export const PokeForm = styled.form`
  display: flex;

  background-color: ${({ theme }) => theme.colors.main};
  /* padding: 2rem 0; */
  min-height: 4rem;
  width: 100%;
  max-width: 40rem;

  border: 1px solid transparent;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    box-shadow: inset 0px 0px 5px ${({ theme }) => theme.colors.inputShadow};
  }

  input {
    width: 100%;
    /* height: 3rem; */
    padding: 0 0.5rem;
    font-size: ${({ theme }) => theme.fonts.m};

    background-color: ${({ theme }) => theme.colors.main};
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    overflow: hidden;
    background: none;
    border: none;
    padding: 0 1.5rem;
    cursor: pointer;
    outline: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-size: ${({ theme }) => theme.fonts.m};
    cursor: pointer;
  }
`;

export const Powers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: ${({ theme }) => theme.fonts.m};
  width: 100%;
  margin: 1rem;
`;

export const Power = styled.div`
  flex: 1 1 0;
  margin: 0;
`;

export const PokemonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100vh;

  z-index: 2000;
  background: ${({ theme }) => theme.colors.modalWrapper};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonBorder = styled.div`
  width: 100%;
  max-width: 80rem;
  height: 40rem;
  box-shadow: 0 5px 16px ${({ theme }) => theme.colors.boxShadow};
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.font};
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const PokeImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 20rem;
  }
`;
