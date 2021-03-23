import React, { useState, useEffect } from "react";
import {
  BtnWrapper,
  JoinBtn,
  MobileNavLinks,
  MobilePageWrapper,
  NavButton,
  NavLinks,
  NavWrapper,
  TitleWrapper,
} from "./NavbarStyles";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);

  useEffect(() => {
    mobileModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [mobileModal]);

  const changeNavbar = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);
  return (
    <NavWrapper navbar={navbar}>
      <BtnWrapper>
        <TitleWrapper>
          <Link to="/" onClick={() => setMobileModal(false)}>
            EXPLORE
          </Link>
        </TitleWrapper>

        <NavLinks>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/pricing">Pricing</Link>
        </NavLinks>
        <Link to="/pricing">
          <JoinBtn>Join Now</JoinBtn>
        </Link>

        <NavButton
          mobileModal={mobileModal}
          onClick={() => setMobileModal((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </NavButton>
      </BtnWrapper>

      <MobilePageWrapper mobileModal={mobileModal}>
        <MobileNavLinks>
          <Link to="/about" onClick={() => setMobileModal(false)}>
            ABOUT
          </Link>
          <Link to="/services" onClick={() => setMobileModal(false)}>
            SERVICES
          </Link>
          <Link to="/pricing" onClick={() => setMobileModal(false)}>
            Pricing
          </Link>
        </MobileNavLinks>
      </MobilePageWrapper>
    </NavWrapper>
  );
};
