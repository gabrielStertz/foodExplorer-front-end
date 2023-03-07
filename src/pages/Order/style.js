import styled from "styled-components";

export const Container = styled.div`
  
  padding: 107px 187px 77px 123px;

  h1{

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;

    margin: 34px 0 32px;
  }

  .geral{
    display: flex;
    justify-content: space-between;
  }

  .total{
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
  }

  .order-items{
    height: 430px;

    /* padding-right: 100px; */

    overflow-y: auto;
  }

  .order{
    width: 100%;

    padding-right: 30px;

    h1{
      margin-top: 5px;
    }
    >button{
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.COLOR_STRONG};
        font-size: 20px;

        display: flex;
        align-items: center;
        gap: 5px;

        margin-top: 5px;
      }
    
  }

  .total-confirm{
    display: flex;
    align-items: center;
    justify-content: space-between;

    >button{
      width: 180px;

      font-size: 16px;
    }
    >button:disabled{
      opacity: 0.5;
    }
  }

  .pay{

    .pay-title{
      display: flex;
      align-items: center;
      justify-content: space-between;

      >button{
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.COLOR_STRONG};
        font-size: 20px;

        display: flex;
        align-items: center;
        gap: 5px;

        margin-top: -80px;
      }
    }
  
    .content{
      width: 530px;
      height: 449px;

      border: 1px solid rgba(255, 255, 255, 0.1);

      .pay-metod{ 
        display: flex;
        align-items: center;
        >button{
          width: 50%;
          height: 81px;

          color: ${({theme}) => theme.COLORS.COLOR_STRONG};

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          font-size: 16px;

          background: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

      }

      .pay-info{
        height: 80%;


        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;