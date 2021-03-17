import React, { useEffect, useState } from 'react'
import { HeaderTitle, HeaderContainer, Headerh2, HeaderWrapper, HeaderBtn,  } from './HeaderStyles'

export type HeaderTypes = {
    offset?: number
    newTest?: number
  }



const Header: React.FC<HeaderTypes> = () => {
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 650;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        const handleScroll = () => {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    let newTest = offset * 0.6;

    return (
        <div>

            <HeaderContainer>
                <HeaderTitle>
                    OUTDOORS
                </HeaderTitle>
                <Headerh2>
                    This is the place for all the things
                </Headerh2>
                <HeaderBtn>
                    Explore
                </HeaderBtn>
            </HeaderContainer>

            {width > breakpoint ? 
            
        <HeaderWrapper style={{transform: `translateY(${newTest}px)`}}>
        {/* <HeaderWrapper newTest={newTest}> */}
        </HeaderWrapper>
            : 
            <HeaderWrapper></HeaderWrapper>
        
        }

        </div>
    )
}

export default Header
