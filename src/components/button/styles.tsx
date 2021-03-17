import styled, {css} from 'styled-components';

export type Pp = {
    secondary?: boolean;
    // qwop?: 'green' | 'orange' | 'yellow'
    qwop?: boolean; 
    tertiary?: boolean;
}

export const Btn2 = styled.button<Pp>`
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    color: ${({secondary}) => secondary ? 'red' : 'blue'};
    outline: none;
    border: none;
    background-color: #333;
`

export const Words = styled.div<Pp>`
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    background-color: ${({qwop}) => qwop ? 'orange' : 'rgb(189, 39, 39)'};
        ${({tertiary}) => tertiary ? 
        css`
            color: pink;
            box-shadow: 0 0.5rem 1.5rem rgba(0,0,0.2);
        ` : 
        css`
            color: green;

        `}
    outline: none;
    border: none;
    /* color: ${({qwop}) => qwop ? 'rgb(189, 39, 39)': 'purple'}; */
    /* color: purple; */
`