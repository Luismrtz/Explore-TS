import React from 'react'
import {DisplayBoxPage, DisplayBox, DisplayBoxContainer, DisplayImg, DisplayBoxTextWrapper, DisplayBoxText, BoxButton,} from './DispBoxStyles'


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
}

const DispBox: React.FC<dispTypes> = ({swap, box1Img, box2H1, box2H2, box2Btn, box3H1, box3H2, box3Btn, box4Img}) => {
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
                                    <BoxButton>{box3Btn}</BoxButton>
                                    </DisplayBoxText>
                                    
                                </DisplayBoxTextWrapper>
                            </DisplayBox>
                            <DisplayImg src={box4Img} alt='img'>
                            </DisplayImg>
                        </DisplayBoxContainer>
                        </DisplayBoxPage>
                    )
                // case 2:
                //     return(
                //         <DisplayBoxPage>
                //         <DisplayBoxContainer>
                //             {/* <DisplayImg src='/images/morning.jpg' alt='img'> */}
 
                //             {/* <DisplayBox inputColor="rgba(196,48,107,1)"> */}
                //             <DisplayBox inputColor="ghostwhite">
                //             <DisplayBoxTextWrapper>
                //                     <DisplayBoxText>
                
                                    
                //                     <h1>{box3H1}</h1>
                //                     <h2>{box3H2}</h2>
                //                     <BoxButton>{box3Btn}</BoxButton>
                //                     </DisplayBoxText>
                                    
                //                 </DisplayBoxTextWrapper>
                //             </DisplayBox>
                //             <DisplayImg src={box4Img} alt='img'>
                //             </DisplayImg>

                //             <DisplayImg src={box1Img} alt='img'>
                //             </DisplayImg>
                            
                //             <DisplayBox inputColor="ghostwhite" >
                //                 <DisplayBoxTextWrapper>
                //                     <DisplayBoxText>
                
                                    
                //                     <h1>{box2H1}</h1>
                //                     <h2>{box2H2}</h2>
                //                     <BoxButton>{box2Btn}</BoxButton>
                //                     </DisplayBoxText>
                                    
                //                 </DisplayBoxTextWrapper>
                //             </DisplayBox>
                    
                //         </DisplayBoxContainer>
                //         </DisplayBoxPage>
                //     )
                default:
                    return(
                        <DisplayBoxPage>
                        <DisplayBoxContainer>
                            {/* <DisplayImg src='/images/morning.jpg' alt='img'> */}
                            <DisplayImg src={box1Img} alt='img'>
                            </DisplayImg>
                            
                            <DisplayBox inputColor="ghostwhite" >
                                <DisplayBoxTextWrapper>
                                    <DisplayBoxText>
                
                                    
                                    <h1>{box2H1}</h1>
                                    <h2>{box2H2}</h2>
                                    <BoxButton>{box2Btn}</BoxButton>
                                    </DisplayBoxText>
                                    
                                </DisplayBoxTextWrapper>
                            </DisplayBox>
                    
                            {/* <DisplayBox inputColor="rgba(196,48,107,1)"> */}
                            <DisplayBox inputColor="ghostwhite">
                            <DisplayBoxTextWrapper>
                                    <DisplayBoxText>
                
                                    
                                    <h1>{box3H1}</h1>
                                    <h2>{box3H2}</h2>
                                    <BoxButton>{box3Btn}</BoxButton>
                                    </DisplayBoxText>
                                    
                                </DisplayBoxTextWrapper>
                            </DisplayBox>
                            <DisplayImg src={box4Img} alt='img'>
                            </DisplayImg>
                        </DisplayBoxContainer>
                        </DisplayBoxPage>
                    )
            }
})()}


  
        </div>
    )
}

export default DispBox
