import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Button2 } from '../button/Button';
import {Modal } from '../modal/Modal'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import React, { useRef } from 'react';
import Footer from '../footer/Footer';
import DispBox from '../displayBox/DispBox';
import Banner from '../banner/Banner';
import Pokemans from '../pokemans/Pokemans';

const Title = styled.h1`
color: red;
font-size: 3rem;
`;

const Powers = styled.div`
  display: flex;
  width: 100%;
  max-width: 20rem;
`;

const Power = styled.div`
  margin: 0;
  padding: 0 2rem 0 0;
`; 


const PokemonWrapper = styled.div`
  position: absolute;
background-color: red;
max-width: 100%;

width: 40rem;
height: 42rem;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
`;

const PokemonBorder = styled.div`
  position: relative;
  background-color: green;
  width: 20rem;
  height: 20rem;
`;




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


// export type demTypes = {
//     showModal: boolean
// }

const S: React.FC = () => {
  const [term, setTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { SearchApi } = useActions();
  const { data, loading } = useTypedSelector(
    (state) => state.apis
  );

   const newSprites = data?.sprites;
   const newAbilities = data?.abilities;


  const modalRef = useRef<HTMLInputElement>(null)
  
  const openModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowModal(show => !show);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm('');
    SearchApi(term.toLowerCase());
  };


  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      SearchApi('');
    }
  };

  return (
    <div>
     <Banner isOn={false} BanH1Title="The Test" BanH2Text="This a a paragraph and I know how to type, but I wont lead you on too long with this mindless babbling.   teehee. "/>
      
     <DispBox swap={1}  box1Img="/images/morning.jpg" box2H1="THE TITLE EXPERIENCE" box2H2="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you"
        box2Btn="Learn More" box3H1="THE TITLE EXPERIENCE" box3H2="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you"
        box3Btn="Learn More" box4Img="/images/morning.jpg"
      />
      <Title>Hello</Title>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      
      </form>
      <Button2 secondary>Hello this is a buttons</Button2>
      <Button2 tertiary>this isnt secondary button</Button2>
     
      {/* {error && <h3>{error}</h3>} */}
      {loading && <h3>Loading...</h3>}
      {newSprites && (
    //     <PokemonWrapper onClick={closeModal} ref={modalRef}>
    //  <PokemonBorder>
    //    <CloseModalButton  onClick={() => SearchApi('')}/>
    //     <img src={data.sprites?.front_default} alt=""/>
    //     <Powers>
    //       {/* {data.sprites ? (
    //         <> */}
    //        { data.abilities?.map(ability => {
    //            return <Power>{ability?.ability.name}</Power>
    //         })}
    //         {/* </>
    //       ) : (
    //         <>
    //         <div>hello</div>
    //         </>
    //       )} */}
     
    //     </Powers>
    
    //  </PokemonBorder>
    //  </PokemonWrapper>
    <Pokemans isOn={false} />
      )}
       <button onClick={openModal}>From App</button>
      <Modal h1="HELLO THERE" paragraph="hello again" showModal={showModal} setShowModal={setShowModal} />
  
   
    {/* <Footer/> */}

    {/* <FilterItems /> */}
    </div>
  );
};

export default S;
