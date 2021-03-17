import styled, {css} from 'styled-components';


export const CardContainer = styled.div`

    width: 100%;
    background-color: ghostwhite;
    /* background: #2C3E50;  
background: -webkit-linear-gradient(to bottom, #4CA1AF, #2C3E50); 
background: linear-gradient(to bottom, #4CA1AF, #2C3E50);  */
height: auto;
`

export const CardWrapper = styled.div`
    max-width: 150rem;
    padding: 0 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12rem;
    position: relative;
    top: -12rem;
    @media ${({theme}) => theme.mediaQueries.below1500} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr 1fr;
      }
    @media ${({theme}) => theme.mediaQueries.below1000} {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 1fr;
      top: 0;
      padding-top: 2rem;
      }
`

export const Card1 = styled.div`
    /* z-index: 250; */
    /* max-width: 40rem; */
    height: 55rem;
    border: 2px solid black;
    background-color: ghostwhite;
    
`

export const Divider = styled.div`
    /* padding-top: 1rem; */
    width: 100%;
    border-top: 2px solid black;
`

export const CardInner = styled.div`
    /* width: 100%; */
    /* height: 100%; */
    margin: 3rem 8rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2rem;
    }
    h2 {
        margin-top: 2rem;
        font-size: 5rem;
    }

    h3 {

    }
    p {
        margin-top: 3rem;
        font-size: 1.6rem;
    }

    @media ${({theme}) => theme.mediaQueries.below500} {
        margin: 3rem 4rem;
      }

`
export const Paragraph = styled.div`
    margin: 3rem 0;
    font-size: 1.6rem;
`



export const CardButton = styled.button`
/* margin: 2rem 0; */
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 2.0rem;
  border: 0;
  /* border-radius: 10px; */
  height: 4rem;
  width: 85%;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;



`