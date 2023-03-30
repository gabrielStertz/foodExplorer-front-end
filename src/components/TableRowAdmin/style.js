import styled from "styled-components";

export const Container = styled.tr`

td:nth-child(2){
  display: none;
}
td:nth-child(3){
  overflow: scroll;
  white-space: nowrap;
  text-overflow: ellipsis;
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
      padding: 0 1rem 0 0;
      margin: 0 0 0 2rem;
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
      height: 100%;
      padding: 0.25em 0.5em;
      color: var(--fc-medium-dark);
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
      background-color: var(--fc-medium-dark);
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

  &.light{
    #select-standard{
      color: var(--fc-medium-light);
    }
    #select{
      color: var(--fc-medium-light);
    }
    td:first-child #select::after{
      background-color: var(--fc-medium-light);
    }
  }

  @media(min-width: 450px){
    td:nth-child(2){
      display: table-cell;
    } 
  }
`;