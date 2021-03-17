import styled from 'styled-components';
import { MdClose } from 'react-icons/md';



export type DemStuff = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    h1?: string;
    paragraph?: string;
    newUrl?: string
    
   }

export const Background = styled.div `
    position: fixed;
    /* top: 7rem; */
    bottom: 0;
    left: 0;
    right: 0;
    /* z-index: 300; */
    /* background-color: ghostwhite; */
    width: 100%;
    height: 100vh;

/* 
    width: 100%;
    height: 100rem;
    position: absolute; */
    z-index: 2000;
    background: rgba(0,0,0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ModalWrapper = styled.div`
  width: 80rem;
  height: 60rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


export const ModalContent = styled.div` 
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: blue;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
` 


export const CloseModalButton = styled(MdClose) `
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`