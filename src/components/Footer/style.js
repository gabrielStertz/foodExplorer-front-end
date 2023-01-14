import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 77px;

  background: ${({theme}) => theme.COLORS.BACKGROUND_ELEMENTS};

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;

  padding: 24px 123px;

  .logo {
    width: 190px;

    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;

    >p {
      font-size: 25px;
      font-weight: 700;
    }  

    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};

    >svg path{
      fill: ${({theme}) => theme.COLORS.COLOR_LIGHT};
    }
  }

  .registered {
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};

    font-family: "DM Sans", sans-serif;
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;