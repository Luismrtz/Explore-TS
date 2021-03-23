import styled from "styled-components";

export const PaymentContainer = styled.div`
  color: ${({ theme }) => theme.colors.font};

  margin: 0 0 5rem;
  padding: 0 2rem;
  font-size: ${({ theme }) => theme.fonts.l};
`;
export const PaymentWrapper = styled.div`
  margin: 0 auto;
  max-width: 110rem;

  display: grid;
  grid-template-rows: repeat(3, 20rem);
  grid-template-columns: 1fr minmax(20rem, 1fr);
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    font-size: ${({ theme }) => theme.fonts.m};
    grid-template-rows: 10rem 27rem 10rem 10rem;
    grid-template-columns: 1fr;
    padding: 0 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.below750} {
    padding: 0 2rem;
  }
`;

export const CheckoutTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.xl};
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    font-size: ${({ theme }) => theme.fonts.xll};
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`;
export const SignUpTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;
export const PaymentTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`;

export const OrderCard = styled.div`
  margin: 4rem 0 0 4rem;
  padding: 4.5rem 3.5rem;
  font-size: ${({ theme }) => theme.fonts.m};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 23rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin: 0;
    background-color: transparent;

    padding: 1.5rem 0;

    justify-content: space-evenly;
  }
  @media ${({ theme }) => theme.mediaQueries.below1000} {
    font-size: ${({ theme }) => theme.fonts.s};
  }
`;

export const OrderSumTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.xll};

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    display: none;
  }
`;
export const PlanWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    div:first-child {
      display: none;
    }
  }
`;
export const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DivLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    display: none;
  }
`;
export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
