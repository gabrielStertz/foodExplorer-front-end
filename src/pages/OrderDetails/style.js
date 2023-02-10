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

  .order{
    img{
      width: 100px;
      height: 100px;
    }

    .item{
      display: flex;
      align-items: center;

      margin-bottom: 10px;

      >div{
        margin-left: 15px;

        >div{
          display: flex;
          align-items: center;

          >P{
            color: ${({theme}) => theme.COLORS.COLOR_STRONG};

            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 20px;
          }

          >span{
            color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};

            font-size: 12px;

            margin-left: 10px;
          }
        }
        >button{
          color: #ab4d55;  

          background: none;
          border: none;

        }
      }
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
        font-size: 16px;

        display: flex;
        align-items: center;
        gap: 5px;

        margin-top: -50px;
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

        .pix{

          svg{
            width: 70px;
            height: 40px;
          }
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