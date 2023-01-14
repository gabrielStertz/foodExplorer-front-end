import styled from "styled-components";

export const Container = styled`
  display: flex;
  align-items: center;
  gap: 20px;

  h1{
    color:${({theme}) => theme.COLORS.COLOR_STRONG}

    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;

    margin-bottom: 40px;
  }
`;