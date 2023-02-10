import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .logo{
    display: flex;
    align-items: center;
    gap: 20px;
    >p{
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      font-size: 42px;
      font-weight: 700;
    }
  }
`;

export const Form = styled.form`
  width: 476px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_ELEMENTS};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 64px;
  border-radius: 16px;

  h1, button:last-child{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    font-size: 32px;
  }

  div{
    width: 100%;
  }

  >button:last-child{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
    background: none;
    border: none;

    font-size: 14px;
  }
`;