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
    span{
      margin-left: 10px;
    }
  }

  @media(min-width: 450px){
    td:nth-child(2){
      display: table-cell;
    } 
  }
`;