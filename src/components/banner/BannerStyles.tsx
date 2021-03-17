import styled, {css} from 'styled-components';

export const BannerBackground = styled.div`
width: 100%;
height: 60rem;
background: #2C3E50;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
/* position:relative; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;

    /* @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: 3.5rem;
      } */
    @media ${({theme}) => theme.mediaQueries.below1000} {
        min-height: 50rem;
        height: 100%;
      }
    /* @media ${({theme}) => theme.mediaQueries.below750} {
      font-size: 2.3rem;
      }
    @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: 2rem;
      } */
`



export const BannerTextWrapper = styled.div`
    max-width: 70rem;
    margin-top: -12rem;

    /* @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: 3.5rem;
      } */
    @media ${({theme}) => theme.mediaQueries.below1000} {
      margin-top: 0;
      }
    /* @media ${({theme}) => theme.mediaQueries.below750} {
      font-size: 2.3rem;
      }
    @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: 2rem;
      } */
    h1 {
        font-size: 6rem;
        padding: 0 2rem;
    }
    h2 {
        font-size: 2.7rem;
        padding: 0 2rem;
    }
`