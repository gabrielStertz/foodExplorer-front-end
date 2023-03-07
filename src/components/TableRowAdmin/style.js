import styled from "styled-components";

export const Container = styled.tr`
  height: 54px;
  
  td{
    
    color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
    border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};

    font-size: 14px;
    text-align: left;

    padding: 0 15px 0 15px;
  }

td:nth-child(1){
  width: 150px;
  white-space: nowrap;
}
td:nth-child(2){
  width: 150px;
  white-space: nowrap;
}
td:nth-child(3){
  overflow: scroll;
  white-space: nowrap;
  text-overflow: ellipsis;
}
td:nth-child(4){
  width: 150px;
  white-space: nowrap;
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

    #select {
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

    select, #select::after, #select::before{
      grid-area: select;
    }

    select::-ms-expand {
      display: none;
    }

    #select::after{
      content: "";
      width: 0.8em;
      height: 0.5em;
      background-color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      justify-self: end;
    }

    #select::before{
      content: "";
      width: 1em;
      height: 1em;
      clip-path: circle(50%);
      justify-self: start;
    }
    
    .Pendente::before{
      background-color: red;
    }

    .Preparando::before{
      background-color: yellow;
    }

    .Entregue::before{
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