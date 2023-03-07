import styled from "styled-components";

export const Container = styled.div`
  
  padding: 107px 123px 77px;

  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .back{
    background: none;
    border: none;

    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
    font-family: 'Poppins', sans-serif;
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 5px;
  }

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
    table-layout: fixed;
    border-collapse: collapse;
  }
  
  tr{
    height: 54px;
  }
  th{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};
    padding-left: 15px;

    font-size: 14px;
    text-align: left;
  }

td{
  
  color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};

  font-size: 14px;
  text-align: left;

  padding-left: 15px;
}

th:nth-child(1){
  width: 150px;
  white-space: nowrap;
}
th:nth-child(2){
  width: 150px;
  white-space: nowrap;
}
th:nth-child(3){
  white-space: nowrap;
}
th:nth-child(4){
  width: 150px;
  white-space: nowrap;
}
`;