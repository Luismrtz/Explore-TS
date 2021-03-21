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
    font-size: ${({theme}) => theme.fonts.mega};

    color: ${({theme}) => theme.colors.main};
    padding: 0 2rem;


    @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: ${({theme}) => theme.fonts.mega};
      }
    @media ${({theme}) => theme.mediaQueries.below1000} {
      font-size: ${({theme}) => theme.fonts.xxxl};
      }
    @media ${({theme}) => theme.mediaQueries.below750} {
      font-size: ${({theme}) => theme.fonts.xxxl};
      }
    @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: ${({theme}) => theme.fonts.xl};
     
      }
 `
export const Headerh2 = styled.h2`
   font-size: ${({theme}) => theme.fonts.xl};
    color: ${({theme}) => theme.colors.main};
    margin-bottom: 4rem;
    padding: 0 2rem;

    @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: ${({theme}) => theme.fonts.xl};
      }
    @media ${({theme}) => theme.mediaQueries.below1000} {
      font-size: ${({theme}) => theme.fonts.l};
      }
    @media ${({theme}) => theme.mediaQueries.below750} {
      font-size: ${({theme}) => theme.fonts.l};
      }
    @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: ${({theme}) => theme.fonts.s};
      }
 `

 export const HeaderBtn = styled.button`
display: block;
  background-color: ${({theme}) => theme.colors.main};
  color: ${({theme}) => theme.colors.font};
  font-size: ${({theme}) => theme.fonts.l};
  border: 0;
  border-radius: 5rem;
  height: 7rem;
  width: 20rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid  ${({theme}) => theme.colors.main};

  transition: all .3s ease;

  &:hover {
    background-color: transparent;
    color: ${({theme}) => theme.colors.main};
  }


  @media ${({theme}) => theme.mediaQueries.below1000} {
    font-size: ${({theme}) => theme.fonts.m};
      height: 5.5rem;
      width: 13.5rem;
      }
  @media ${({theme}) => theme.mediaQueries.below500} {
    font-size: ${({theme}) => theme.fonts.s};
      height: 4rem;
      width: 11.5rem;
      }
 `






