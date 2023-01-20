import styled from "styled-components";

export const Container = styled.div`
  .wait{
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};
    text-align: center;
    p{
      font-size: 24px;

      margin-top: 49px;
    }
  }

  .credit{
    width: 300px;
  
    .input{
      >p{
        color: ${({theme}) => theme.COLORS.COLOR_STRONG};

        font-size: 16px;

        margin-bottom: 8px;
      }

      >input{
        width: 100%;
        height: 48px;

        color: ${({theme}) => theme.COLORS.COLOR_STRONG};
        background: none;

        font-size: 16px;
        padding: 10px;
        margin-bottom: 16px;

        border-color: ${({theme}) => theme.COLORS.COLOR_LIGHT};

        &::placeholder{
          color: #7c7c8a;
        }
      }
    }
    .val-cvc{
      display: flex;
      gap: 16px;
    }
  }
`;