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
    table-layout: fixed;
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
    width: 150px;
  }

  
`;