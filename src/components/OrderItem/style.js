import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  img{
    width: clamp(7rem, 6.7rem + 1vw, 9rem);
    height: clamp(7rem, 6.7rem + 1vw, 9rem);
  }
  
  >div{
    margin-left: clamp(1rem, 0.8rem + 1vw, 1.5rem);

    div{
      display: flex;
      align-items: center;

      P{
        color: var(--fc-strong-dark);

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: clamp(1.4rem, 1.2rem + 1vw, 2rem);
      }

      span{
        color: var(--fc-medium-dark);

        font-size: clamp(0.8rem, 0.8rem + 1vw, 1.2rem);

        margin-left: clamp(0.5rem, 0.3rem + 0.5vw, 1rem);
      }
    }
    button{
      color: #ab4d55;  

      background: none;
      border: none;

    }
  }

  &.light{
    p{
      color: var(--fc-strong-light);
    }

    span{
      color: var(--fc-medium-light);
    }
  }
`;