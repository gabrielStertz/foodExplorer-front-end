import styled from "styled-components";

export const Container = styled.div`
  padding: 107px 123px 77px;
  button#back{
    background: none;
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    border: none;
    margin: 32px 0 24px;

    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }

  h1{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;

    margin-bottom: 32px;
  }

  .form-item{
    width: 100%;

    p{
      margin-bottom: 8px;
    }

    >label{
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      font-size: 16px;

    }

    input, select, textarea{
      width: 100%;
    }
    input{
      height: 48px;

      background: none;
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};
      border-radius: 5px;
      padding: 16px;

      font-size: 16px;
    }
  }

  .picture-name-type{
    width: 100%;

    display: flex;
    gap: 16px;

    margin-bottom: 29px;

    .picture-item{
      width: 400px;
      height: 48px;

      >p{
        margin-bottom: 8px;
      }
    }

    .select-item{
      width: 400px;

    }

    .inputPicture {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    .inputPicture + label {
      width: 100%;
      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      padding: 15px;
      font-size: 16px;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
      background-color: transparent;
      border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};
      border-radius: 5px;
      cursor: pointer;
  }
  
  .inputPicture:focus + label,
  .inputPicture + label:hover {
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
  }

    *, *::before, *::after{
      box-sizing: border-box;
    }

    select {
      appearance: none;

      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0 0 0 15px;
      width: 100%;
      height: inherit;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      color: inherit;
      outline: none;
    }

    .select {
      width: 100%;
      height: 48px;
      padding-right: 15px;
      border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};
      border-radius: 5px;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
      cursor: pointer;
      line-height: 1.1;
      background-color: transparent;
      display: grid;
      grid-template-areas: "select";
      align-items: center;
      position: relative;
    }

    select, .select::after{
      grid-area: select;
    }

    select::-ms-expand {
      display: none;
    }

    .select::after{
      content: "";
      width: 0.8em;
      height: 0.5em;
      background-color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      justify-self: end;
    }

    select:focus + .focus {
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border: 2px solid ${({theme}) => theme.COLORS.COLOR_STRONG};
    }
  }

  .ingredients-price{
    width: 100%;

    display: flex;
    gap: 16px;

    margin-bottom: 29px;

    .p-ingredients{
      width: 100%;

      p{
        margin-bottom: 8px;
      }
    }
    .ingredients-item{
      width: 100%;
      height: 48px;

      display: flex;
      border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};
      border-radius: 5px;
    }
    .price-item{
      width: 200px;
    }
  }

  .description{
    margin-bottom: 29px;
  }

  .button{
    width: 100%;

    display: flex;
    justify-content: ${({isAdd}) => isAdd ? "flex-end" : "space-between"};

    button{
      width: 357px;
      height: 48px;

      background: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      border: 1px solid ${({theme}) => theme.COLORS.COLOR_STRONG};
      border-radius: 5px;justify-self: end;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 16px;
    }
  }  
`;