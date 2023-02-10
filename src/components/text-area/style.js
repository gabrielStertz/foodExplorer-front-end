import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 100px;

  background: none;
  color: ${({theme}) => theme.COLORS.COLOR_STRONG};

  border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};
  border-radius: 5px;
  padding: 16px;
  resize: none;

  font-size: 16px;

  &::placeholder{
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};
  }
`;