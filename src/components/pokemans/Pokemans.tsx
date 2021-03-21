import React, {useRef, useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import {PokemonWrapper, PokeForm, CloseModalButton, PokemonBorder, Powers, Power, PokeTypes, SearchInputButton, PokeImgWrapper, FormWrapper } from './PokemanStyles'


const Pokemans: React.FC<PokeTypes> = ({isOn}) => {
    const modalRef = useRef<HTMLInputElement>(null)
    const [term, setTerm] = useState('');
    // const [showModal, setShowModal] = useState(false);

    const { SearchApi } = useActions();
    const { data, loading } = useTypedSelector(
      (state) => state.apis
    );

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTerm('');
      SearchApi(term.toLowerCase());
    };

    console.log(data)
    

    const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current === e.target) {
          SearchApi('');
        }
      };

    return (
            <>
            {isOn === true ? <>

            <FormWrapper>
            <PokeForm onSubmit={onSubmit}>
             <input placeholder="Pokemon...." value={term}  onChange={(e) => setTerm(e.target.value)} />
              <button><SearchInputButton/></button>
           </PokeForm>
            </FormWrapper>
  
      {loading && <h3>Loading...</h3>}
         {data?.sprites ? (
          <PokemonWrapper onClick={closeModal} ref={modalRef}>
     <PokemonBorder>
       <CloseModalButton  onClick={() => SearchApi('')}/>
          <PokeImgWrapper>
            <img src={data.sprites?.front_default} alt=""/>
          </PokeImgWrapper>
        <Powers>
          {/* {data.sprites ? (
            <> */}
           { data.abilities?.map(ability => {
               return <Power key={ability?.ability.name}>{ability?.ability.name}</Power>
            })}
            {/* </>
          ) : (
            <>
            <div>hello</div>
            </>
          )} */}
     
        </Powers>
    
     </PokemonBorder>
     </PokemonWrapper>
         ) : null}
         </>
         : <div></div>
         }
         </>
    )
}

export default Pokemans
