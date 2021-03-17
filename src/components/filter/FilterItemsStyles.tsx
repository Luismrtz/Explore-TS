import styled, {css} from 'styled-components';



export type SortType = {
    changeMe?: string,
    // sort?: string
}

const sharedStyles = css`
    border-top: .3rem grey solid;
    color: grey;
    flex: 1 1;
    padding-top: 1rem;
    font-size: 2rem;
`;





export const FilterContainer = styled.div`
width: 100%;
height: auto;
/* margin: 0 8rem; */
/* background: #0F2027;  
background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027); 
background: linear-gradient(to top, #2C5364, #203A43, #0F2027);  */
background-color: ghostwhite;
overflow: hidden;
`


export const FilterWrapper = styled.div`
padding:2rem;
    max-width: 80rem;
    margin: 8rem auto;


    @media ${({theme}) => theme.mediaQueries.below500} {
        /* padding: 0; */
      }
`






export const FilterTabs = styled.div<SortType>`
 display: flex;
    justify-content: space-between;
    /* padding: 2rem; */
    
    /* margin: 0; */
    /* padding-top: 8rem; */


        /* border-top: .3rem black solid;
        color: black; */
        @media ${({theme}) => theme.mediaQueries.below500} {
        padding: 0 2rem;
      }

`

export const Tab1 = styled.div<SortType>`
transition: all .3s ease-in-out;
    ${sharedStyles}

${({changeMe }) => changeMe === 'a' ?  (
css`
border-top: .3rem black solid;
        color: black;
      `
) : (
    css`
        border-top: .3rem grey solid;
        color: grey;
    `
)

        }

    @media ${({theme}) => theme.mediaQueries.below750} {
        font-size: 1.8rem;
    }
    @media ${({theme}) => theme.mediaQueries.below500} {
        font-size: 1.5rem;
    }
`
export const Tab2 = styled.div<SortType>`
transition: all .3s ease-in-out;
 ${sharedStyles}
 ${({changeMe }) => changeMe === 'b' ?  (
css`
border-top: .3rem black solid;
        color: black;
      `
) : (
    css`
        border-top: .3rem grey solid;
        color: grey;
    `
)

        }


@media ${({theme}) => theme.mediaQueries.below750} {
        font-size: 1.8rem;
    }
    @media ${({theme}) => theme.mediaQueries.below500} {
        font-size: 1.5rem;
    }
`


export const Tab3 = styled.div<SortType>`
transition: all .3s ease-in-out;
 ${sharedStyles}
 ${({changeMe }) => changeMe === 'c' ?  (
css`
border-top: .3rem black solid;
        color: black;
      `
) : (
    css`
        border-top: .3rem grey solid;
        color: grey;
    `
)

        }

@media ${({theme}) => theme.mediaQueries.below750} {
        font-size: 1.8rem;
    }
    @media ${({theme}) => theme.mediaQueries.below500} {
        font-size: 1.5rem;
    }
`



export const SelectFilter = styled.select`
    width: 100%;
  height: 3.5rem;
  background: white;
  /* color: gray; */
  padding-left: .5rem;
  font-size: 1.4rem;
  border: none;
  /* margin: 0 2rem; */

    option {
        position: relative;
        /* width: 1rem; */
        color: blue;
    background: white;
    display: flex;
    text-overflow: ellipsis;
    /* white-space: pre; */
    min-height: 2rem;
    /* padding: 0px 2px 1px; */
    }
`










export const TabCard = styled.div`
margin: 10rem auto 0;
    max-width: 80rem;
    height: 35rem;
    background-color: ghostwhite;
    border-radius: 10px;
    /* border: 1px solid pink; */
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);

    overflow: hidden;   
    display: grid;
  grid-template-columns: 1fr 1fr;

  /* @media ${({theme}) => theme.mediaQueries.below1500} {
      font-size: 3.5rem;
      } */
    /* @media ${({theme}) => theme.mediaQueries.below1000} {
      
  
      } */
     @media ${({theme}) => theme.mediaQueries.below750} {
         height: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 35rem 35rem;
      }
    /* @media ${({theme}) => theme.mediaQueries.below500} {
      font-size: 2rem;
      }  */

`
export const TabImg = styled.img`
  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
background-position: center;
background-size: cover;
    overflow: hidden;
`

export const TabContent = styled.div`
    margin: 6rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: left;

    h1 {
        font-size: 2.5rem;
        color: blue;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.8rem;
    }


`

export const TabLine = styled.div`

        width: 100%;
        border-top: 1px solid black;
        margin: 3rem 0 3rem;

`




export const FilterButton = styled.button`
display: block;
background-color: #f7797d;
color: #fff;
font-size: 1.8rem;
border: 0;
border-radius: 5rem;
height: 4rem;
max-width: 10rem;
padding: 0 2rem;
cursor: pointer;
box-sizing: border-box;

margin-top: 3.5rem;

`

