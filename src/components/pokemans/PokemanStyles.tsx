import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { PokemonAbility, PokemonSprites } from '../../state/actions';


export type PokeTypes = {
    // showModal?: boolean;
    // setShowModal?: (show: boolean) => void;
    isOn: boolean

}

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


export const Powers = styled.div`
display: flex;
width: 100%;
max-width: 20rem;
`;

export const Power = styled.div`
margin: 0;
padding: 0 2rem 0 0;
`; 


export const PokemonWrapper = styled.div`
/* position: absolute;
background-color: red;
max-width: 100%;

width: 40rem;
height: 42rem;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center; */

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

export const PokemonBorder = styled.div`
/* position: relative;
background-color: green;
width: 20rem;
height: 20rem; */

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

