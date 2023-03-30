import styled from "styled-components";

export const Container = styled.div`
  
  max-width: 52.5rem;
  width: clamp(30rem, 25rem + 20vw, 52.5rem);
  height: clamp(3rem, 2.5rem + 1vw, 4.8rem);
  display: flex;
  align-items: center;
  gap: 14px;

  border-radius: 5px;
  padding: 12px 14px;

  >input{
    width: 100%;

    color: var(--fc-strong-dark);
    background: transparent;
    border: none;

    &::placeholder{
      color: var(-fc-medium-dark);

      font-size: clamp(1rem, 0.8rem + 1vw, 1.4rem);
    }

  }
  > svg{
    margin-left: 1rem;
  }

  &.dark{
    background-color: var(--bg-gray);
    color: var(--fc-strong-dark);
  }

  &.light{
    background-color: var(--bg-geral-light);
    color: var(--fc-strong-light);

    >input{
      color: var(--fc-strong-light);

      &::placeholder{
        color: var(--bg-gray);
      }
    }
  }
`;