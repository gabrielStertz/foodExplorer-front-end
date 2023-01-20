import styled from "styled-components";

export const Container = styled.div`
  
  padding: 107px 123px 77px;


  h1{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;

    margin: 35px 0;
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
    >select{
      width: 100%;
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};

      background: none;
      border: none;

      font-size: 14px;
    }
 
  }
`;