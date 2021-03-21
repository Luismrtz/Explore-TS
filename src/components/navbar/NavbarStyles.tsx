import { NONAME } from 'node:dns';
import styled, {css} from 'styled-components';
import Theme from '../theme/Theme';
import { MdClose, MdMenu } from 'react-icons/md';

export type Nav ={
    navbar?: boolean,
    mobileModal?: boolean
}

const sharedLinkStyles = css`
    a {
    text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
    }

`;


export const NavWrapper = styled.div<Nav>`
    z-index: 200;
    height: 9rem;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main };
    position: fixed;
    display: flex;
    text-align: center;
    justify-content:center;
    align-items: center;

    transition: all .3s ease;

    ${({navbar}) => navbar ? css`
        box-shadow:0.00px 0.00px 50px 0px ${({theme}) => theme.colors.secondary};
    ` : 
    css`
        box-shadow: none;
    `}

    @media ${({theme}) => theme.mediaQueries.below1000} {
        height: 7rem;

    }
    
`

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${({theme}) => theme.mediaQueries.below1000} {
        justify-content:space-between;
    }

    a {
        text-decoration: none;
    }

`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.fonts.l};
    /* width: 17rem; */
    padding: 0 4rem;
    height: auto;
    background-color: ${({theme}) => theme.colors.main };
    

    ${sharedLinkStyles};

    a {
        color: ${props => props.theme.colors.font};
        /* margin: 0 2rem; */
    }

    @media ${({theme}) => theme.mediaQueries.below1000} {
        padding: 0 2rem;
    }

`




















export const MobilePageWrapper = styled.div<Nav>`
    position: absolute;
    top: 7rem;
    bottom: 0;
    left: 100vw;
    right: 0;
    z-index: 300;

    width: 100%;
    height: 100vh;
    /* display: none; */


  
    a {
        color: ${props => props.theme.colors.font};
    }
    @media ${({theme}) => theme.mediaQueries.below1000} {
        
        ${({mobileModal}) => mobileModal===true ? css`
        /* display: block; */
        left: 0;

        ` : css`
        /* display: none; */
        left: 100vw;
        `}
    }



`

export const MobileNavLinks = styled.div`
    font-size: ${({theme}) => theme.fonts.m};

    a {

        color: ${props => props.theme.colors.font};
        margin: 0 2rem;
    }

    @media ${({theme}) => theme.mediaQueries.below1000} {
        width: 100%;
        height: calc(100% - 7rem);
        position: relative;
        display: flex;
        font-size: ${({theme}) => theme.fonts.m};
        background-color: ${({theme}) => theme.colors.main};
      
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
    ${sharedLinkStyles};
     a {
         display: flex;
         flex-direction: column;
         justify-content: center;
        width: 100%;
        height: 100%;
        &:hover {
            background-color: ${({theme}) => theme.colors.secondary};
        }
     }
    }

`





















export const NavLinks = styled.div`
    font-size: ${({theme}) => theme.fonts.m};
    ${sharedLinkStyles};
    
    a {
    transition: all .3s ease;

        color: ${props => props.theme.colors.font};
        margin: 0 2rem;

        &:hover {
            color: ${({theme}) => theme.colors.secondary};
        }
    }

    @media ${({theme}) => theme.mediaQueries.below1000} {
        display: none;
    }

`
export const JoinBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.fonts.m};
    /* width: 17rem; */
    padding: 0 4rem;
    height: 9rem;
    background-color: ${({theme}) => theme.colors.secondary };
    ${sharedLinkStyles};
    
    text-decoration: none;
    color: ${({theme}) => theme.colors.main };
    /* color: ${props => props.theme.colors.font}; */
    /* margin: 0 2rem; */
    
    transition: all .3s ease;

    &:hover {
        background-color: ${({theme}) => theme.colors.tertiary };
    }

    @media ${({theme}) => theme.mediaQueries.below1000} {
        display: none;
    }

`


export const CloseNavButton = styled(MdClose)<Nav> `
   
    transition: all .3s linear;
    /* transition: opacity .3s visibility 0s 1s ease-in; */
    /* opacity: 1; */

    ${({mobileModal}) => mobileModal  ? css`
    /* display: show; */
    /* visibility: visible; */
    opacity: 1;
    ` : css`
    /* display: none;  */
    /* visibility: hidden; */
    opacity: 0;
    `}
`
export const OpenNavButton = styled(MdMenu)<Nav> `
 
 transition: all .3s linear;
 /* transition: opacity .3s visibility 0s 1s ease-in; */
 ${({mobileModal}) => mobileModal ? css`
 /* display: none;  */
 /* visibility: hidden; */
 opacity: 0;
 ` : css`
  /* display: show;  */
  /* visibility: visible; */
  opacity: 1;
  `}
`

export const NavButtonWrapper = styled.div`
  display: none;
  /* width: 17rem; */
  padding: 0 2rem;
  @media ${({theme}) => theme.mediaQueries.below1000} {
        display: block;
    }
`

export const NavButton = styled.button<Nav>`
    /* 
    
    width: 7rem;
    height: 7rem;
  
    border: 0;

    display: none;
    box-sizing: border-box;
    padding: 1rem;

    transition: all .3s ease; */

  /* position: absolute; */
  /* top: 5%; */
  /* left: 2rem; */
  /* margin: 1rem; */
  width: 3.5rem;
    height: 3.5rem;
    display: none;
  flex-direction: column;
  justify-content: space-around;
background-color: ${({theme}) => theme.colors.main };
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 2rem;
  /* z-index: 10; */

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: .3rem;
    background: ${({theme}) => theme.colors.dark };
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ mobileModal }) => mobileModal ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ mobileModal }) => mobileModal ? '0' : '1'};
      transform: ${({ mobileModal }) => mobileModal ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ mobileModal }) => mobileModal ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  /* width: 17rem; */
  /* padding: 0 2rem; */
  
  @media ${({theme}) => theme.mediaQueries.below1000} {
        display: flex;
    }


`




