import styled from "styled-components";
import { MdClose } from "react-icons/md";

export type DemStuff = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  h1?: string;
  paragraph?: string;
  newUrl?: string;
};

export const Background = styled.div`
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

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  height: auto;
  box-shadow: 0 5px 16px ${({ theme }) => theme.colors.boxShadow};

  color: ${({ theme }) => theme.colors.font};

  position: relative;
  z-index: 10;
`;

export const ModalContent = styled.div`
  button {
    padding: 10px 24px;
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.main};
    border: none;
  }

  img {
    width: 100%;
    height: 100%;

    margin: auto;
    overflow: hidden;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
