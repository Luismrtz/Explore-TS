import React, { useEffect } from "react";
import {
  PaymentContainer,
  PaymentWrapper,
  DurationWrapper,
  OrderCard,
  SignUpTitle,
  CheckoutTitle,
  PaymentTitle,
  OrderSumTitle,
  PlanWrapper,
  DivLine,
  PriceWrapper,
} from "./PaymentStyles";
import { RouteComponentProps, withRouter } from "react-router";

import { cardMembership } from "../card/Card";

const Payment: React.FC<RouteComponentProps<any>> = (props) => {
  const PaymentId = props.match.params.id;

  useEffect(() => {
    return () => {};
  }, []);

  const filtMember = cardMembership.filter((member) => {
    return member.id.toString() === PaymentId;
  });
  return (
    <>
      {filtMember.map((member2) => {
        return (
          <PaymentContainer key={member2.id}>
            <PaymentWrapper>
              <CheckoutTitle>Checkout</CheckoutTitle>
              <SignUpTitle>Sign Up</SignUpTitle>
              <PaymentTitle>Payment</PaymentTitle>

              <OrderCard>
                <OrderSumTitle>Order Summary</OrderSumTitle>
                <PlanWrapper>
                  <div>Plan</div>
                  <div>{member2.name}</div>
                </PlanWrapper>
                <DurationWrapper>
                  <div>Duration</div>
                  <div>1 Month</div>
                </DurationWrapper>
                <DivLine></DivLine>
                <PriceWrapper>
                  <div>Total</div>
                  <div>${member2.price}</div>
                </PriceWrapper>
              </OrderCard>
            </PaymentWrapper>
          </PaymentContainer>
        );
      })}
    </>
  );
};

export default withRouter(Payment);
