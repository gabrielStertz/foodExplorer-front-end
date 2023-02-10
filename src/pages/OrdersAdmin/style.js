import styled from "styled-components";

export const Container = styled.div`
  
  padding: 107px 123px 77px;

  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 32px;

      margin: 35px 0;
    }
    >button{
      background: none;
      border: none;

      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
      font-size: 16px;

      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  table, th, td{

    border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};

  }
  table{
    width: 100%;
    
    border-collapse: collapse;
  }
  
  tr{
    height: 54px;
  }
  th{
    padding-left: 15px;

    font-size: 14px;
  }
  th{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    text-align: left;
  }

  td{
    color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
    
    
    font-size: 14px;
    padding-left: 15px;
    
  }

  th:nth-child(1){
    width: 150px;
  }
  th:nth-child(2){
    width: 150px;
  }
  th:nth-child(4){
    width: 130px;
  }

  td:first-child{
    
    padding: 0;

    *, *::before, *::after{
      box-sizing: border-box;
    }

    select {
      appearance: none;

      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0 0 0 20px;
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
      height: 52px;
      padding: 0.25em 0.5em;
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
      cursor: pointer;
      line-height: 1.1;
      background-color: transparent;
      display: grid;
      grid-template-areas: "select";
      align-items: center;
      position: relative;
    }

    select, .select::after, .select::before{
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

    .select::before{
      content: "";
      width: 1em;
      height: 1em;
      background-color: red;
      clip-path: circle(50%);
      justify-self: start;
    }

    .pendente::before{
      background-color: red;
    }

    .preparando::before{
      background-color: yellow;
    }

    .entregue::before{
      background-color: green;
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
`;