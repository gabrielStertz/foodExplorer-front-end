import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;


  >p{
    color: var(--fc-strong-dark);

    font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

    margin-bottom: 8px;
  }

  >input{
    width: 100%;
    height: clamp(3rem, 2.7rem + 1vw, 4.8rem);

    background: transparent;
    color: var(--fc-strong-dark);

    border: 1px solid var(--fc-medium-dark);
    border-radius: 5px;

    font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

    padding: 1.2rem 1.4rem;

    &::placeholder{
      color: var(--fc-medium-dark);
    }
  }

  &.light{
    >p{
      color: var(--fc-strong-light);
    }

    >input{
      color: var(--fc-strong-light);

      border: 1px solid var(--fc-medium-light);

      &::placeholder{
        color: var(--fc-medium-light);
      }
    }
  }
`;