import styled, {css} from 'styled-components';

export type TextInfo = {
  inputH1?: string,
  inputH2?: string,
  type?: boolean,
  showModal?: boolean;
  newUrl?: string
  // setShowModal?: (show: boolean) => void;
}


export const CarouselContainer = styled.div`
z-index: 300;
    padding: 0 2rem;
    background-color: ${({theme}) => theme.colors.secondary};
    max-width: 100%;
    height: auto;
    /* margin-bottom: 20rem; */
   /* margin: auto; */
   overflow: hidden;
  /* margin-bottom: 4rem; */

   /* @media ${({theme}) => theme.mediaQueries.below1000} {
        height: auto;
    } */


`



export const Head1 = styled.h1<TextInfo>`
  color: ${({theme}) => theme.colors.main};
   margin: 4rem 0 2rem 0;
  text-align: center;
  font-size: ${({theme}) => theme.fonts.xxl};
   
`

export const Head2 = styled.h2<TextInfo>`
color: ${({theme}) => theme.colors.main};
  margin: 2rem 0 4rem 0;
  text-align: center;
  font-size: ${({theme}) => theme.fonts.l};
   
`


export const ImgModalWrapper = styled.div<TextInfo>`

/* ${({showModal}) => showModal === true ? css` */
    /* position: absolute; */
      z-index: 1000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    height: 100%;
    position: absolute;
    /* z-index: 200; */
    background: ${({theme}) => theme.colors.modalWrapper};
    display: flex;
    justify-content: center;
    align-items: center;
      background-color: ${({theme}) => theme.colors.main};
  /* ` : css`

  `} */
`
export const ImgModal = styled.img<TextInfo>`
  /* position: absolute; */
  position: relative;
/* ${({showModal}) => showModal === true ? css` */

  /* ` : css`

  `} */
`



export const ImgOverlay = styled.div`

   
`
export const Img = styled.img`

      height: 55rem;
      width: 100%;
      cursor: pointer;
        margin: auto;
      overflow: hidden;

      @media ${({theme}) => theme.mediaQueries.below1000} {
        height: 40rem;
    }
      @media ${({theme}) => theme.mediaQueries.below750} {
        height: 30rem;
    }
`

export const CarouselButtonWrapper = styled.div`
margin-top: 4rem;
margin-bottom: 4rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;


a {
  text-decoration: none;
}

`
export const CarouselButton = styled.button`
  display: block;
  background-color: ${({theme}) => theme.colors.tertiary};
  color: ${({theme}) => theme.colors.main};
  font-size: ${({theme}) => theme.fonts.m};
  border: 1px solid ${({theme}) => theme.colors.tertiary};
  border-radius: 5rem;
  height: 7rem;
  width: 20rem;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  transition: all .3s ease;
  
    &:hover {
      background-color: ${({theme}) => theme.colors.secondary};
    }

`


export const ArrowLeft = styled.div`
width: 2rem;
height: 2rem;
left: 0;
top: 25rem;
cursor: pointer;
  border: 0;
  position: absolute;
  /* top: 50%; */
  z-index: 20;
  margin-left: 4rem;

  @media ${({theme}) => theme.mediaQueries.below1000} {
        top: 20rem;
    }
    @media ${({theme}) => theme.mediaQueries.below750} {
        top: 15rem;
    }

  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  border: solid ${({theme}) => theme.colors.dark};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  &:hover {

    color: ${({theme}) => theme.colors.secondary};
  }
`
export const ArrowRight = styled.div`
width: 2rem;
height: 2rem;
right: 0;
top: 25rem;
cursor: pointer;
  border: 0;
  position: absolute;
  /* top: 50%; */
  margin-right: 4rem;
  z-index: 20;

  @media ${({theme}) => theme.mediaQueries.below1000} {
        top: 20rem;
    }
    @media ${({theme}) => theme.mediaQueries.below750} {
        top: 15rem;
    }

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  border: solid ${({theme}) => theme.colors.dark};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

`