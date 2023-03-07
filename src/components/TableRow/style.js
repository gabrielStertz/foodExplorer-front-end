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
    span{
      margin-left: 10px;
    }
  }
`;