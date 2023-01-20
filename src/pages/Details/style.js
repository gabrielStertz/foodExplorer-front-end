import styled from "styled-components";

export const Container = styled.div`
  padding: 104px 123px 77px;

  .back-button{
    background: none;
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    display: flex;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;

    border: none;
    margin-top: 24px;
  }
  .geral {
    display: flex;
    align-items: center;
    gap: 60px;

    >img{
      width: 500px;
      height: 500px;
    }

    .information{
      >h1{
        color: ${({theme}) => theme.COLORS.COLOR_STRONG};

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 40px;

        margin-bottom: 8px;
      }
      >p{
        color: ${({theme}) => theme.COLORS.COLOR_STRONG};

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;

        margin-bottom: 25px;
      }
      >.ingredients{
        display: flex;
        align-items: center;
        gap: 16px;

        margin-bottom: 45px;

        >div{
          display: flex;
          flex-direction: column;
          align-items: center;
          >img{
            width: 50px;
            height: 50px;
          }

          >p{
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 18px;
          }
        }  
      }

      .price-and-buttons{
        display: flex;
        align-items: center;

        >p{
          color: ${({theme}) => theme.COLORS.LIGHT_BLUE};

          font-size: 32px;

          margin-right: 57px;
        }

        >div{
          color: ${({theme}) => theme.COLORS.COLOR_STRONG};

          font-size: 20px;

          display: flex;
          align-items: center;
          gap: 17px;

          margin-right: 27px;
          >button{
            background: none;
            color: ${({theme}) => theme.COLORS.COLOR_STRONG};

            border: none;
          }
        }
        >button{
          width: 92px;
        }
      }
    }

  }
`;