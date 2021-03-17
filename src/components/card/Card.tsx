import React from 'react'
import {CardContainer, CardWrapper, Card1, CardInner, Divider, CardButton, Paragraph} from './CardStyles';

const Card = () => {
    return (
        <CardContainer>
            <CardWrapper>
                <Card1>
                    <CardInner>
                        <h1>Bronze Membership</h1>
                        <h2>$30</h2>
                        <Paragraph>Access camping all year long</Paragraph>
                        <CardButton>Select</CardButton>
                    
                    </CardInner>
                    <Divider/>
                    <CardInner>
                        <p>Mountain access</p>
                    
                    </CardInner>
                </Card1>
                <Card1>
                    <CardInner>
                        <h1>Silver Membership</h1>
                        <h2>$40</h2>
<Paragraph>Access to camping and fishing all year long</Paragraph>
                        <CardButton>Select</CardButton>
                    
                    </CardInner>
                    <Divider/>
                    <CardInner>
                        <p>Mountain access</p>
                        <p>Fishing access</p>
                    </CardInner>
                </Card1>
                <Card1>
                    <CardInner>
                        <h1>Gold Membership</h1>
                        <h2>$50</h2>
<Paragraph>Access to camping, fishing, and skiing all year long</Paragraph>
                        <CardButton>Select</CardButton>
                    
                    </CardInner>
                    <Divider/>
                    <CardInner>
                        <p>Mountain access</p>
                        <p>Fishing access</p>
                        <p>Skiing access</p>
                    </CardInner>
                </Card1>
 
            </CardWrapper>
        </CardContainer>
    )
}

export default Card
