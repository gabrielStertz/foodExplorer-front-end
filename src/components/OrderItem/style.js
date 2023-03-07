import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;

  margin-bottom: 10px;

  img{
    width: 90px;
    height: 90px;
  }
  
  >div{
    margin-left: 15px;

    div{
      display: flex;
      align-items: center;

      P{
        color: ${({theme}) => theme.COLORS.COLOR_STRONG};

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
      }

      span{
        color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};

        font-size: 12px;

        margin-left: 10px;
      }
    }
    button{
      color: #ab4d55;  

      background: none;
      border: none;

    }
  }
`;