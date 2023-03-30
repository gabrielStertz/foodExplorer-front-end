import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: var(--bg-geral-dark);

  .logo{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1.6rem 0;
    >p{
      color: var(--fc-strong-dark);

      font-size: clamp(1.5rem, 0.5rem + 6vw, 4.2rem);
      font-weight: 700;
    }
  }
  @media(min-width:700px){
    flex-direction: row;
    
  }

  &.light{
    background: var(--bg-geral-light);

    .logo{
      >p{
        color: var(--fc-strong-light);
      }
    }

    form{
      background: var(--bg-elements-light);

      h1{
        color: var(--fc-strong-light);
      }

      >button:last-child{
        color: var(--fc-strong-light);
      }
    }
  }
`;

export const Form = styled.form`
  width: clamp(27rem, 20rem + 20vw, 47.6rem);

  background: var(--bg-elements-dark);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 1.7rem + 1vw, 3.2rem);

  padding: 7%;
  border-radius: 16px;

  h1, button:last-child{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1{
    color: var(--fc-strong-dark);

    font-size: clamp(2rem, 1.5rem + 3vw, 3.2rem);
  }

  div{
    width: 100%;
  }

  >button{
    width: 80%;
    font-size: 1.4rem;
  }

  >button:last-child{
    color: var(--fc-strong-dark);
    background: none;
    border: none;

  }
`;