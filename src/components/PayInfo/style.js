import styled from "styled-components";

export const Container = styled.div`
  .wait{
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};
    text-align: center;

    >svg{
      width: clamp(9rem, 8.7rem + 2vw, 15rem);
      height: clamp(9rem, 8.7rem + 2vw, 15rem);
    }

    p{
      font-size: clamp(1.6rem, 1.4rem + 1vw, 2.4rem);

      margin-top: clamp(2rem, 1.7rem + 1vw, 4.9rem);
    }
  }

  .pix{
    >svg{
      width: clamp(15rem, 12rem + 10vw, 30rem);
      height: clamp(15rem, 12rem + 10vw, 30rem);
    }
  }

  .credit{
    width: clamp(15rem, 13rem + 6vw, 30rem);
  
    .input{
      >p{
        color: var(--fc-strong-dark);

        font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

        margin-bottom: 8px;
      }

      >input{
        width: 100%;
        height: clamp(3rem, 2.7rem + 1vw, 4.8rem);

        color: var(--fc-strong-dark);
        background: none;

        font-size: 16px;
        padding: 10px;
        margin-bottom: 16px;

        border: 1px solid ${({theme}) => theme.COLORS.COLOR_LIGHT};

        &::placeholder{
          color: #7c7c8a;
        }
      }
    }
    .val-cvc{
      display: flex;
      gap: clamp(1.3rem, 1.1rem + 1vw, 1.6rem);

    }
    button{
      margin: 0 auto;
    }
  }

  &.light{

    .credit{
      p{
        color: var(--fc-strong-light);
      }
      .input{

        input{
          color: var(--fc-strong-light);
        }
      }
    }
  }
`;