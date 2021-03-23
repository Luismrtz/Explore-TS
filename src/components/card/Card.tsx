import React, { useState } from "react";
import {
  CardContainer,
  CardWrapper,
  Card1,
  CardInner,
  Divider,
  CardButton,
  Paragraph,
} from "./CardStyles";
import { useHistory } from "react-router-dom";

export const cardMembership = [
  {
    id: 10,
    name: "Bronze Membership",
    description: "Access camping all year long",
    price: 30,
    access: [
      {
        id: 20,
        option: "Mountain access",
      },
    ],
  },
  {
    id: 11,
    name: "Silver Membership",
    description: "Access to camping and fishing all year long",
    price: 40,
    access: [
      {
        id: 21,
        option: "Mountain access",
      },
      {
        id: 22,
        option: "Fishing access",
      },
    ],
  },

  {
    id: 12,
    name: "Gold Membership",
    description: "Access to all we have to offer",
    price: 50,
    access: [
      {
        id: 23,
        option: "Mountain access",
      },
      {
        id: 24,
        option: "Fishing access",
      },
      {
        id: 25,
        option: "Skiiing access",
      },
    ],
  },
];

export type cardMembType = {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  access?: accessType[];
  onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
};

export type accessType = {
  id?: number;
  option?: string;
};

const Card: React.FC<cardMembType> = () => {
  const history = useHistory();

  const purchaseMembership = (cardId: number) => {
    history.push(`/purchase/${cardId}`);
  };

  return (
    <CardContainer>
      <CardWrapper>
        {cardMembership?.map((filter) => {
          let cardId = filter.id;
          let cardName = filter.name;
          let cardPrice = filter.price;
          return (
            <Card1 key={filter.id}>
              <CardInner>
                <h1>{cardName}</h1>
                <h2>${cardPrice}</h2>

                <Paragraph>{filter.description}</Paragraph>
                <CardButton onClick={() => purchaseMembership(cardId)}>
                  Select
                </CardButton>
              </CardInner>
              <Divider />
              <CardInner>
                {filter.access.map((amenities) => {
                  return <p key={amenities.id}>{amenities.option}</p>;
                })}
              </CardInner>
            </Card1>
          );
        })}
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
