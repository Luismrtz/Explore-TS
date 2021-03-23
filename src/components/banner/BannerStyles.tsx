import styled, { css } from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  height: 60rem;
  /* background: #2C3E50;  
background: -webkit-linear-gradient(to bottom, #4CA1AF, #2C3E50);  
background: linear-gradient(to bottom, #4CA1AF, #2C3E50);  */

  /* background: #1f4037;  
background: -webkit-linear-gradient(to bottom, #99f2c8, #1f4037); 
background: linear-gradient(to bottom, #99f2c8, #1f4037);  */

  /* background: #5A3F37;  
background: -webkit-linear-gradient(to bottom, #2C7744, #5A3F37);  
background: linear-gradient(to bottom, #2C7744, #5A3F37); */

  background: #1f4037;
  background: -webkit-linear-gradient(to bottom, #1f4037, #2c7744);
  background: linear-gradient(to bottom, #1f4037, #2c7744);

  /* position:relative; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    min-height: 50rem;
    height: 100%;
  }
`;

export const BannerTextWrapper = styled.div`
  max-width: 70rem;
  margin-top: -10rem;
  color: ${({ theme }) => theme.colors.main};

  @media ${({ theme }) => theme.mediaQueries.below1000} {
    margin-top: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.xxl};
    padding: 0 2rem;
    @media ${({ theme }) => theme.mediaQueries.below500} {
      font-size: ${({ theme }) => theme.fonts.xl};
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.fonts.l};
    padding: 0 2rem;
  }
`;
