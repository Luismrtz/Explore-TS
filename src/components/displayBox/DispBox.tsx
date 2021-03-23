import React from "react";
import {
  DisplayBoxPage,
  DisplayBox,
  DisplayBoxContainer,
  DisplayImg,
  DisplayBoxTextWrapper,
  DisplayBoxText,
  BoxButton,
  BoxButtonWrapper,
} from "./DispBoxStyles";
import { Link } from "react-router-dom";

export type dispTypes = {
  swap?: number;
  box1Img: string;
  box2H1: string;
  box2H2: string;
  box2Btn: string;
  box3H1: string;
  box3H2: string;
  box3Btn: string;
  box4Img: string;
};

const DispBox: React.FC<dispTypes> = ({
  swap,
  box1Img,
  box2H1,
  box2H2,
  box2Btn,
  box3H1,
  box3H2,
  box3Btn,
  box4Img,
}) => {
  return (
    <div>
      {(() => {
        switch (swap) {
          case 1:
            return (
              <DisplayBoxPage>
                <DisplayBoxContainer>
                  <DisplayBox inputColor="ghostwhite">
                    <DisplayBoxTextWrapper>
                      <DisplayBoxText>
                        <h1>{box3H1}</h1>
                        <h2>{box3H2}</h2>
                        <BoxButtonWrapper>
                          <Link to="/pricing">
                            <BoxButton>{box3Btn}</BoxButton>
                          </Link>
                        </BoxButtonWrapper>
                      </DisplayBoxText>
                    </DisplayBoxTextWrapper>
                  </DisplayBox>
                  <DisplayImg src={box4Img} alt="img"></DisplayImg>
                </DisplayBoxContainer>
              </DisplayBoxPage>
            );

          default:
            return (
              <DisplayBoxPage>
                <DisplayBoxContainer>
                  {/* <DisplayImg src='/images/morning.jpg' alt='img'> */}
                  <DisplayImg src={box1Img} alt="img"></DisplayImg>

                  <DisplayBox inputColor="ghostwhite">
                    <DisplayBoxTextWrapper>
                      <DisplayBoxText>
                        <h1>{box2H1}</h1>
                        <h2>{box2H2}</h2>
                        <BoxButtonWrapper>
                          <Link to="/about">
                            <BoxButton>{box2Btn}</BoxButton>
                          </Link>
                        </BoxButtonWrapper>
                      </DisplayBoxText>
                    </DisplayBoxTextWrapper>
                  </DisplayBox>

                  <DisplayBox inputColor="ghostwhite">
                    <DisplayBoxTextWrapper>
                      <DisplayBoxText>
                        <h1>{box3H1}</h1>
                        <h2>{box3H2}</h2>
                        <BoxButtonWrapper>
                          <Link to="/pricing">
                            <BoxButton>{box3Btn}</BoxButton>
                          </Link>
                        </BoxButtonWrapper>
                      </DisplayBoxText>
                    </DisplayBoxTextWrapper>
                  </DisplayBox>
                  <DisplayImg src={box4Img} alt="img"></DisplayImg>
                </DisplayBoxContainer>
              </DisplayBoxPage>
            );
        }
      })()}
    </div>
  );
};

export default DispBox;
