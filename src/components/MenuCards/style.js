import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-cards-dark);

  min-width: clamp(26rem, 23rem + 6vw, 30rem);
  max-width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;


  img {
    width: clamp(10rem, 10rem + 8vw, 20rem);
    height: clamp(10rem, 10rem + 8vw, 20rem);

    margin-top: clamp(1rem, 0.7rem + 1vw, 2rem);
  }

  .details {
    width: 100%;
    height: 4rem;

    background: none;
    color: var(--fc-strong-dark);

    display: flex;
    align-items: center;
    
    border: none;
    margin: 1rem 0 1.8rem 0;
    padding: 0 1.6rem;

    .menuName{
      width: 100%;
      height: clamp(3rem, 2.6rem + 1vw, 4rem);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    h1{
      color: var(--fc-strong-dark);
  
      font-family: 'Poppins', sans-serif;
      font-size: clamp(1.8rem, 1.5rem + 1vw, 2.4rem);

      margin: 0;

      display: inline-block;
      white-space: nowrap;
      transition-timing-function: linear;

    }
    }
  }

  p{
    height: clamp(2.4rem, 2.4rem + 1vw, 3.2rem);
    width: 100%;

    color: var(--fc-medium-dark);

    font-size: clamp(1rem, 0.7rem + 1vw, 1.4rem);
    line-height: clamp(1.2rem, 1rem + 1vw, 1.6rem);

    display: flex;
    justify-content: center;

    flex-wrap: nowrap;
    text-align: center;

    margin-bottom: clamp(0.8rem, 0.05rem + 3vw, 1.6rem);
    padding: 0 1.6rem;
  }

  span{
    color: var(--color-light-blue);

    font-size: clamp(1.6rem, 1.3rem + 1vw, 3.2rem);

    text-align: center;
    margin-bottom: clamp(0.8rem, 0.05rem + 3vw, 1.6rem);
  }

  .buttons{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.9rem;

    padding-bottom: clamp(1rem, 0.7rem + 1vw, 2rem);

    .quantity{
      color: var(--fc-strong-dark);
      
      display: flex;
      align-items: center;
      gap: 1.7rem;
      
      button{
        background: transparent;
        color: var(--fc-strong-dark);

        border: none;
      }
    }

    .incluir{
      min-width: fit-content;
      width: clamp(4rem, 3.5rem + 5vw, 9.2rem);
      min-height: fit-content;
      height: clamp(3rem, 2.5rem + 1vw, 4.8rem);

      font-size: clamp(1rem, 0.7rem + 1vw,1.4rem);
    }
  }
  
  .favorites{
    background: none;
    color: var(--fc-strong-dark);

    border: none;

    position: absolute;
    top: clamp(0.5rem, 0.5rem + 3vw, 2rem);
    right: clamp(0.5rem, 0.5rem + 3vw, 2rem);
  }

  &.light{
    .details{
      h1{
        color: var(--fc-strong-light);
      }

      svg{
        color: var(--fc-strong-light);
      }
    }

    p{
      color: var(--fc-medium-light);
    }

    span{
      color: var(--color-dark-blue);
    }

    .quantity{
      color: var(--fc-strong-light);

      button{
        color: var(--fc-strong-light);
      }
    }
  }
`;