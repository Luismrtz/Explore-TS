import React, { useState, useEffect } from 'react'
import { BtnWrapper, JoinBtn, MobileNavLinks, MobilePageWrapper, NavButton, NavLinks, NavWrapper, TitleWrapper } from './NavbarStyles'
import { Link } from 'react-router-dom'


export const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);
    const [mobileModal, setMobileModal] = useState(false);



    useEffect(() => {
        mobileModal
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "");
      }, [mobileModal]);

    console.log(mobileModal);
    const changeNavbar = () => {
        if (window.scrollY >=10) {
            setNavbar(true);

        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeNavbar);
    return (
        <NavWrapper navbar={navbar}>
            <BtnWrapper>
                <TitleWrapper>
                <Link to="/" onClick={() => setMobileModal(false)}>TITLE</Link>
                </TitleWrapper>
 
                <NavLinks>
                    <Link to="/about">ABOUT</Link>
                    {/* <Link to="/album">Album</Link> */}
                    <Link to="/services">SERVICES</Link>
                    <Link to="/pricing">Pricing</Link>
                </NavLinks>
                <JoinBtn>
                <Link to="/album">Join Now</Link>
                </JoinBtn>
                <NavButton  onClick={() => setMobileModal(prev => !prev)}>+</NavButton>
            </BtnWrapper>

            <MobilePageWrapper mobileModal={mobileModal}>
                <MobileNavLinks>
                    <Link  to="/about" onClick={() => setMobileModal(false)} >ABOUT</Link>
                    {/* <Link to="/album" onClick={() => setMobileModal(false)}>Album</Link> */}
                    <Link to="/services" onClick={() => setMobileModal(false)}>SERVICES</Link>
                    <Link to="/pricing" onClick={() => setMobileModal(false)}>Pricing</Link>
                </MobileNavLinks>
                </MobilePageWrapper>
            {/* <MobilePageWrapper mobileModal={mobileModal}> */}
                {/* <CloseButtonWrapper>
                    <CloseButton onClick={() => setMobileModal(prev => !prev)}>+</CloseButton>
                </CloseButtonWrapper> */}
                 {/* <MobileNavLinks>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/album">album</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/pricing">Pricing</Link>
                </MobileNavLinks>
            </MobilePageWrapper> */}
        </NavWrapper>
    )
}


