import styled from "styled-components";

export const Container = styled.div`
  .isNotAdmin{
    width: 100%;
    height: 104px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_ELEMENTS};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;


    padding: 24px 123px;

    .logo {
      width: 190px;

      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: nowrap;

      font-size: 25px;
      font-weight: 700;

      color: #ffffff;
    }

    .favorites {
      width: 110px;
      height: 26px;

      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
      background: transparent;

      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 16px;
    }

    .orders {
      width: 216px;
    }

    .logOut {
      background: transparent;
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      border: none;
    }
  }

  .isAdmin{
    width: 100%;
    height: 104px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_ELEMENTS};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;


    padding: 24px 123px;

    .logo {
      width: 250px;

      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: nowrap;

      font-size: 25px;
      font-weight: 700;

      color: #ffffff;
    }

    .orders, .add-menu {
      width: 200px;
    }

    .logOut {
      background: transparent;
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      border: none;
    }
  }
`;