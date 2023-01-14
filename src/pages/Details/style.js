import styled from "styled-components";

export const Container = styled.div`

  overflow: scroll;

  padding: 104px 0 77px;
  
  h1 {
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
  }
  span {
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};
  }
`;

