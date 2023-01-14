import styled from "styled-components";

export const Container = styled.div`
  width: 525px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 14px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
  color: ${({theme}) => theme.COLORS.COLOR_STRONG};

  border-radius: 5px;
  padding: 12px 14px;

  > input{
    width: 100%;

    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
    background: transparent;
    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
    }

  }
  > svg{
    margin-left: 16px;
  }
`;