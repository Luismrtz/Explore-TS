import styled, {css} from 'styled-components';


export type DTypes = {
    inputColor?: string,
    swap?: number
}



export const DisplayBoxPage = styled.div`
width: 100%;
/* height: 170rem; */
/* height: auto; */
max-height: auto;
background-color: ${({theme}) => theme.colors.main};
position: relative;



`


 //? grid of 4 container


 export const DisplayImg = styled.img`
    /* width: 12.6rem;
    height: 6.4rem; */
    
   width:100%;
   height: 100%;
    background-repeat: no-repeat;
background-position: center;
background-size: cover;
 `
 export const DisplayBox = styled.div<DTypes>`
    /* width: 12.6rem;
    height: 6.4rem; */
    padding: 4rem;
    
   background-color: ${({inputColor}) => inputColor? inputColor : "orangered"};



 `

export const DisplayBoxTextWrapper = styled.div`
/* width: 12.6rem;
height: 6.4rem; */
width:100%;
height: 100%;
/* position: relative; */
/* padding:0 2rem; */
display: flex;
flex-direction: column;
   align-items: center;
   justify-content: center;

   

`

export const DisplayBoxText = styled.div`
   width: 60rem;
   display: flex;
flex-direction: column;
   align-items: left;
   justify-content: center;

   h1{
      font-size: ${({theme}) => theme.fonts.xl};
      margin-bottom: 2rem;
   }

   
   h2 {
      font-size: ${({theme}) => theme.fonts.m};
      margin-bottom: 4rem;
   }

   @media ${({theme}) => theme.mediaQueries.below750} {
      width: auto;
      /* max-width: 45rem; */
      /* width: 100%; */
  }
   @media ${({theme}) => theme.mediaQueries.below500} {
      text-align: center;
      align-items: center;
   justify-content: center;
      h1{
      font-size: ${({theme}) => theme.fonts.l};
      /* margin-bottom: 2rem; */
   }
   h2 {
      font-size: ${({theme}) => theme.fonts.s};
   }
      /* max-width: 30rem; */
      /* width: 100%; */
  }
`

export const BoxButton = styled.button`
  display: block;
  background-color: ${({theme}) => theme.colors.main};
  color: ${({theme}) => theme.colors.font};
  font-size: ${({theme}) => theme.fonts.m};
  /* border: 0; */
  border-radius: 5rem;
  height: 7rem;
  width: 20rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid ${({theme}) => theme.colors.dark};
  transition: all .3s ease;

  @media ${({theme}) => theme.mediaQueries.below500} {
   height: 5.5rem;
   width: 17rem;
  }
  &:hover {
     background-color: ${({theme}) => theme.colors.secondary};
     color: ${({theme}) => theme.colors.main};
     border-color: ${({theme}) => theme.colors.secondary};
  }
`


export const DisplayBoxContainer = styled.div`
display: grid;
z-index: 150;
grid-template-columns: 1fr 1fr;
grid-auto-rows:80rem 80rem;
padding: 0 6rem;
overflow: hidden;
/* width: auto; */
/* height: auto; */
/* max-width: 180rem; */
/* height: 120rem; */
margin: 0 auto;
top: -14rem;
position: relative;

@media ${({theme}) => theme.mediaQueries.below1500} {
   grid-template-columns: 1fr;
   grid-auto-rows:80rem 80rem 80rem 80rem;
   /* grid-auto-flow: dense; */



 ${DisplayBox}:nth-child(3) {
      grid-row: 4 / 5;
   }
/* ${DisplayImg}{
      grid-auto-rows: 3 / 4;
   } */

   ${DisplayImg}:nth-child(4) {
      grid-row: 3 / 4;
   }
   

}

@media ${({theme}) => theme.mediaQueries.below1500} {
   /* top: 0; */
   /* padding: 0; */
}
@media ${({theme}) => theme.mediaQueries.below1000} {
   top: 0;
   padding: 0;
}


@media ${({theme}) => theme.mediaQueries.below750} {
   /* grid-template-columns: 1fr 1fr; */
grid-auto-rows:1fr;
}
@media ${({theme}) => theme.mediaQueries.below500} {
   /* grid-template-columns: 1fr 1fr; */
/* grid-auto-rows: 20rem; */
}

`