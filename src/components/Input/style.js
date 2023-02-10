import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;


  >p{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    font-size: 16px;

    margin-bottom: 8px;
  }

  >input{
    width: 100%;
    height: 48px;

    background: transparent;
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    border: 1px solid ${({theme}) => theme.COLORS.COLOR_MEDIUM};
    border-radius: 5px;

    font-size: 16px;

    padding: 12px 14px;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
    }
  }
`;