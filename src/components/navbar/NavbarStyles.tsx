import { NONAME } from 'node:dns';
import styled, {css} from 'styled-components';
import Theme from '../theme/Theme';

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
        box-shadow:0.00px 0.00px 50px 0px rgba(196,48,107,1);
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

`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.fonts.m};
    width: 17rem;
    height: auto;
    background-color: ${({theme}) => theme.colors.main };
    font-size: 3rem;

    ${sharedLinkStyles};

    a {
        color: ${props => props.theme.colors.dark};
        /* margin: 0 2rem; */
    }

`




















export const MobilePageWrapper = styled.div<Nav>`
    position: absolute;
    top: 7rem;
    bottom: 0;
    left: 100vw;
    right: 0;
    z-index: 300;
    /* background-color: ghostwhite; */
    width: 100%;
    height: 100vh;
    /* display: none; */


  
    a {
        color: ${props => props.theme.colors.dark};
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
    font-size: 2rem;

    a {

        color: ${props => props.theme.colors.dark};
        margin: 0 2rem;
    }

    @media ${({theme}) => theme.mediaQueries.below1000} {
        width: 100%;
        height: calc(100% - 7rem);
        position: relative;
        display: flex;
        font-size: 2rem;
        background-color: ghostwhite;
      
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
            background-color: blue;
        }
     }
    }

`





















export const NavLinks = styled.div`
    font-size: 2rem;
    ${sharedLinkStyles};
    a {

        color: ${props => props.theme.colors.dark};
        margin: 0 2rem;
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
    width: 17rem;
    height: 9rem;
    background-color: ${({theme}) => theme.colors.rose };
    ${sharedLinkStyles};
    a {
        color: ghostwhite;
        /* color: ${props => props.theme.colors.dark}; */
        /* margin: 0 2rem; */
    }

    @media ${({theme}) => theme.mediaQueries.below1000} {
        display: none;
    }

`

export const NavButton = styled.button`
    font-size: 4rem;
    width: 7rem;
    height: 7rem;
    background-color: pink;
    border: 0;
    color: black;
    display: none;
    box-sizing: border-box;
    padding: 1rem;








    @media ${({theme}) => theme.mediaQueries.below1000} {
        display: block;
    }
`



// export const CloseButtonWrapper = styled.div`
//         display: flex;
//     align-items: flex-end;
//     align-content: flex-end;
//     justify-content: flex-end;
// `

// export const CloseButton = styled.button`
//     font-size: 3rem;
//     width: auto;
//     height: 5rem;
//     background-color: pink;
//     border: 0;
//     color: black;
//     display: none;
//     box-sizing: border-box;
//     padding: 1rem;



//     @media ${({theme}) => theme.mediaQueries.below1000} {
//         display: block;
//     }
// `


// export const MobileNavLinks = styled.div`
// width: 100%;
// height: calc(100% - 9rem);
// position: relative;
// display: flex;
// font-size: 2rem;
// background-color: orangered;
      
// flex-direction: column;
//     justify-content: space-evenly;
//     align-items: center;
//     align-content: center;
//     ${sharedLinkStyles};
//      a {
//          display: flex;
//          flex-direction: column;
//          justify-content: center;
//         width: 100%;
//         height: 100%;
//         &:hover {
//             background-color: blue;
//         }
//      }

// `

