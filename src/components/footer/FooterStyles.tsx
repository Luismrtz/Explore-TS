import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
/* width: 100vw; */
height: auto;
background-color: orangered;
bottom: 0;
/* position: absolute; */

/* display: flex; */
display: flex;
overflow: hidden;

/* grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr; */

@media ${({theme}) => theme.mediaQueries.below1500} {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
 /* flex-direction: column; */
 justify-content: center;
 align-content: center;

 align-self: center;
 justify-self: center;
 /* /* align-items: center; */
 /* grid-template-columns: 1fr;
 grid-template-rows: 60rem 60rem 60rem; */
}

`









export const One = styled.div`
flex: 1 2 30rem;

background-color: ghostwhite;
position: relative;
/* height: auto; */
/* min-height: 615px; */
/* max-width: 100%; */
/* display: grid;
grid-template-columns: 1fr;
grid-template-rows: min-content min-content; */
/* grid-template-columns: 100%; */

display: flex;
justify-content: flex-end;
/* flex-direction: column; */
/* flex-direction: column; */
/* justify-content: right;
align-items: flex-end;
align-content: flex-end; */


@media ${({theme}) => theme.mediaQueries.below1500} {
 /* flex-direction: column; */
 /* justify-content: center; */
 /* align-items: center; */
 /* grid-template-columns: 1fr;
 grid-auto-rows: min-content min-content; */
 /* justify-items: center;
 align-items: center;
 text-align: center;
 grid-column: 1 / 2;
      grid-row: 2 / 3; */
  /* align-self: center;
 justify-self: center; */

 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: auto;
}


`

export const OneWrapper = styled.div`
      /* justify-self: flex-end; */
    /* align-self: flex-end; */
  /* width: 100%; */
  width: 20rem;
    display: flex;
flex-direction: column;

@media ${({theme}) => theme.mediaQueries.below1500} {
  width: 100%;
}

`


export const OneContentOne = styled.div`
    position: relative;
    /* right: 57px; */
    /* margin: 56px 0px 13px calc((100% - 294px) * 0); */
    /* grid-area: 1 / 5 / 2 /  6; */
    justify-self: start;
    align-self: flex-start;

    @media ${({theme}) => theme.mediaQueries.below1500} {
      /* right: 0px;
      grid-area: auto;
      justify-items: center;
 align-items: center;
 align-self: center;
 justify-self: center; */
 justify-self: center;
    align-self: center;
  }
` 
export const OneContentMenu = styled.div`
font-size: 2.5rem;
font-weight: bold;
margin: 6rem 0 2rem 0;
` 

export const OneContentTwo = styled.div`
    position: relative;

    /* margin: 0px 0px 10px calc((100% - 294px) * 0); */

    justify-self: start;
    align-self: flex-start;
    line-height: 4rem;
    font-size: 1.2rem;
    @media ${({theme}) => theme.mediaQueries.below1500} {
      /* right: 0px; */
      /* grid-area: auto; */
      /* align-self: center;
 justify-self: center; */
      text-align: center;
 justify-self: center;
    align-self: center;
  }
  @media ${({theme}) => theme.mediaQueries.below500} {
    font-size: 1rem;
  }

    /* width: 180px; */
` 
// export const ThreeContentFive = styled.div`
//     position: relative;
    // right: 57px;
//     /* margin: 0px 0px 10px calc((100% - 294px) * 0); */
//     /* grid-area: 4 / 1 / 5 / 2; */
//     grid-area: 3 / 1 / 4 / 2;
//     /* justify-self: start;
//     align-self: flex-start; */
// ` 
















const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  /* border-radius: 5px; */
  /* border: 1px solid #ddd; */
  border: 0;
  border-bottom: 1px solid black;
  margin: 1rem 0 2rem 0;
  padding: 1rem;
  box-sizing: border-box;

  &:focus {
      outline: none;
      border-bottom: 2px solid black;
  }
`;


export const InputContainer = styled.div`
flex: 1 1 50rem;
background-color: ghostwhite;
position: relative;


display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: center; */


  @media ${({theme}) => theme.mediaQueries.below1500} {
     grid-column: 1 / -1;
     grid-row: 1 / 2;
  }

`

export const FormWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  align-content: center; */
  /* height: 100vh; */
  /* padding: 0 20px; */
  /* width: 65rem; */
  width: 100%;

`

export const StyledForm = styled.form`
    width: 100%;
    /* max-width: 70rem; */
    padding: 4rem;
    /* background-color: lightblue; */
    box-sizing: border-box;

    label {
      font-size: 2rem;
    }

    h1{
      margin-top: 2rem;
      font-size: 2.5rem;
      margin-bottom: 5rem;
    }

`

export const StyledInput = styled.input`
  display: block;
width: 100%;
  /* width: 65rem; */
  ${sharedStyles}

`

export const TextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  /* width: 65rem; */
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;


export const StyledButtonWrapper = styled.div`
  width: 100%;
  /* width: 65rem; */
  display: flex;
  justify-content: center;
  align-items: center;
    margin-top: 2rem;

`


export const StyledButton = styled.button`
/* text-align: center; */
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 2.2rem;
  border: 0;
  border-radius: 5rem;
  height: 7rem;
  width: 100%;
  padding: 0 2rem;
  cursor: pointer;
  box-sizing: border-box;
  /* position: relative; */

  @media ${({theme}) => theme.mediaQueries.below1500} {
    max-width: 70rem;
  }
`;

// export const StyledFieldset = styled.fieldset`
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 20px 0;
//   legend {
//     padding: 0 10px;
//   }
//   label {
//     padding-right: 20px;
//   }
//   input {
//     margin-right: 10px;
//   }
// `;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  font-size: 2rem;
  margin: 0 0 40px 0;
`;













export const Three = styled.div`
flex: 1 2 30rem;
/* background-color: #428caa; */
background-color: ghostwhite;
position: relative;
/* height: auto; */
/* min-height: 615px; */
/* display: grid;
grid-template-rows: min-content min-content; */
/* grid-template-columns: 100%; */

display: flex;
justify-content: flex-start;

@media ${({theme}) => theme.mediaQueries.below1500} {
      /* grid-column: 2 / 3;
      grid-row: 2 / 3; */

       flex-direction: column;
 justify-content: center;
 align-items: center;
 height: auto;
 text-align: center;
  }

`


export const ThreeWrapper = styled.div`
  width: 20rem;
    display: flex;
flex-direction: column;


@media ${({theme}) => theme.mediaQueries.below1500} {
      /* grid-area: auto; */
      width: 100%;

      
  }
`



export const ThreeContentOne = styled.div`
    position: relative;
    left: 5rem;
    /* margin: 56px 0px 13px calc((100% - 294px) * 0); */
    /* grid-area: 1 / 1 / 2 / span 2; */
    /* justify-self: start;
    align-self: flex-start; */

    justify-self: end;
    align-self: flex-start;

    @media ${({theme}) => theme.mediaQueries.below1500} {
      /* grid-area: auto; */
       left: 0;
       justify-self: center;
    align-self: center;
  }
` 
export const ThreeContentMenu = styled.div`
font-size: 2.5rem;
font-weight: bold;
margin: 6rem 0 2rem 0;
` 
export const Link = styled.p`
font-weight: bold;
line-height: 2em;
font-size: 2rem;
/* border: 0;
outline: 0; */

/* display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0 px; */

` 
export const ThreeContentTwo = styled.div`
    position: relative;
    /* left: 57px; */
    /* margin: 0px 0px 10px calc((100% - 294px) * 0); */
    /* grid-area: 2 / 1 / 3 / span 2; */
    /* justify-self: start;
    align-self: flex-start; */
    /* width: 180px; */

    
    left: 5rem;
    justify-self: start;
    align-self: flex-start;
    

    @media ${({theme}) => theme.mediaQueries.below1500} {
      /* grid-area: auto; */
      left: 0;
      justify-self: center;
    align-self: center;
  }
` 
// export const ThreeContentFive = styled.div`
//     position: relative;
//     left: 57px;
//     /* margin: 0px 0px 10px calc((100% - 294px) * 0); */
//     /* grid-area: 4 / 1 / 5 / 2; */
//     grid-area: 3 / 1 / 4 / 2;
//     /* justify-self: start;
//     align-self: flex-start; */
// ` 

// export const ThreeContentThree = styled.div`
//     position: relative;
//     left: 57px;

//     grid-area:4 / 1 / 5 / span 2;

//     font-size: 1.5rem;
//     text-decoration: underline;
// ` 












export const CopyWriteWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ghostwhite;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`




export const CopyWrite = styled.div`
    position: relative;
    white-space: nowrap;
    /* right: 57px; */
    /* margin: 0px 0px 10px calc((100% - 294px) * 0); */
    /* grid-area: 4 / 1 / 5 / 2; */
    /* grid-area:4 / 5 / 6 /  6; */
    /* justify-self: start;
    align-self: flex-start; */
    font-size: 1.5rem;

    /* @media ${({theme}) => theme.mediaQueries.below1500} {
      grid-area: auto;
      align-self: center;
 justify-self: center;
  } */
` 