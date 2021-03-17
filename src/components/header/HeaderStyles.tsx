import styled, {css} from 'styled-components';

import {HeaderTypes} from './Header'
// export type HeaderTypes = {
//   offset?: number
// }

export const HeaderWrapper = styled.div<HeaderTypes>`
z-index: -1;
 width: 100%;
 height: 115vh;
position: relative;

background-image: url("/images/morning.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
/* transform: translateY(${({offset}) => offset && offset * 0.6}px); */
/* transform: translateY(${({newTest}) => newTest && newTest}px); */
/* transform: translateY({offset * 0.6}px); */

/* overflow: hidden; */

@media ${({theme}) => theme.mediaQueries.below650} {
   height: 85vh;
}
 `

 export const HeaderContainer = styled.div`
    z-index: 20;
 width: 100%;
 height: 100vh;
 position: absolute;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 /* padding: 2rem; */
 `


export const HeaderTitleWrapper = styled.div`

`

export const HeaderTitle = styled.h1`
    font-size: 12rem;
    /* color: ghostwhite; */
    color: rgba(196,48,107,1);
    padding: 0 2rem;


    @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: 10rem;
      }
    @media ${({theme}) => theme.mediaQueries.below1000} {
      font-size: 8rem;
      }
    @media ${({theme}) => theme.mediaQueries.below750} {
      font-size: 6.5rem;
      }
    @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: 4rem;
     
      }
 `
export const Headerh2 = styled.h2`
    font-size: 4rem;
    color: rgba(196,48,107,1);
    margin-bottom: 4rem;
    padding: 0 2rem;

    @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: 3.5rem;
      }
    @media ${({theme}) => theme.mediaQueries.below1000} {
      font-size: 3rem;
      }
    @media ${({theme}) => theme.mediaQueries.below750} {
      font-size: 2.3rem;
      }
    @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: 1.8rem;
      }
 `

 export const HeaderBtn = styled.button`
display: block;
  background-color: ghostwhite;
  color: black;
  font-size: 2.2rem;
  border: 0;
  border-radius: 5rem;
  height: 7rem;
  width: 20rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;


  @media ${({theme}) => theme.mediaQueries.below1000} {
      font-size: 2.2rem;
      height: 5.5rem;
      width: 16.5rem;
      }
  @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: 1.9rem;
      height: 4rem;
      width: 11.5rem;
      }
 `









//  export const DisplayBoxPage = styled.div`
//     width: 100%;
//     height: 170rem;
//     background-color: ghostwhite;
//     position: relative;
    
//  `


// ///! DELETE? 
//  //? grid of 4 container
//  export const DisplayBoxContainer = styled.div`
//     display: grid;
//     z-index: 150;
//     grid-template-columns: 1fr 1fr;
//     grid-template-rows:80rem 80rem;
//     padding: 0 6rem;
//     /* width: auto; */
//     /* height: auto; */
//     /* max-width: 180rem; */
//     /* height: 120rem; */
//     margin: 0 auto;
//     top: -14rem;
//     position: relative;
//  `

//  export const DisplayImg = styled.img`
//     /* width: 12.6rem;
//     height: 6.4rem; */
    
//     //background-color: {({inputColor}) => inputColor || 'orangered'}; */
//    width:100%;
//    height: 100%;
//     background-repeat: no-repeat;
// background-position: center;
// background-size: cover;
//  `
//  export const DisplayBox = styled.div<Htypes>`
//     /* width: 12.6rem;
//     height: 6.4rem; */
    
//     background-color: ${({inputColor}) => inputColor || 'orangered'};

//  `

// export const DisplayBoxTextWrapper = styled.div`
// /* width: 12.6rem;
// height: 6.4rem; */
// width:100%;
// height: 100%;
// /* position: relative; */
// display: flex;
// flex-direction: column;
//    align-items: center;
//    justify-content: center;

// `

// export const DisplayBoxText = styled.div`
//    width: 60rem;
//    display: flex;
// flex-direction: column;
//    align-items: left;
//    justify-content: center;

//    h1{
//       font-size: 4rem;
//       margin-bottom: 2rem;
//    }

   
//    h2 {
//       font-size: 2rem;
//       margin-bottom: 4rem;
//    }
// `

// export const BoxButton = styled.button`
//   display: block;
//   background-color: ghostwhite;
//   color: black;
//   font-size: 2.2rem;
//   /* border: 0; */
//   border-radius: 5rem;
//   height: 7rem;
//   width: 20rem;
//   padding: 0 2rem;
//   cursor: pointer;
//   box-sizing: border-box;
//   border: 2px solid black;

// `