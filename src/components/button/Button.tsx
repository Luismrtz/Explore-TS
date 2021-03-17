import React, { useState } from 'react'
import {Btn2, Words, Pp} from './styles'



export const Button2: React.FC<Pp> = ({secondary, tertiary, children}) => {
    const [poop, setPoop] = useState(false);

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setPoop(!poop);
      };

    return (
        <div>
            <Btn2 secondary={secondary}>{children}</Btn2>
            <Words tertiary={tertiary} onClick={onClick} qwop={poop}>{children}</Words>
        </div>
    )
}
