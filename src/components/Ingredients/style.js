import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 32px;

  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_GRAY };
  color: ${({theme, isNew}) => isNew ? theme.COLORS.COLOR_LIGHT : theme.COLORS.COLOR_STRONG };

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.COLOR_LIGHT}` : 'none'};

  margin: 8px;
  border-radius: 8px;
  padding-right: 16px;

  > button{
    border: none;
    background: none;

    display: flex;
    align-items: center;
  }

  .button-delete{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG}
  }

  .button-add{
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT}
  }

  > input{
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.COLOR_LIGHT};
    }
  }
`;