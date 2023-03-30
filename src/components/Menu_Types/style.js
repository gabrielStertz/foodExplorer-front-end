import styled from "styled-components";

export const Container = styled.div`
  
  h1{
    color: var(--fc-strong-dark);

    font-family: "Poppins", sans-serif;
    font-size: clamp(2rem, 0.5rem + 4vw, 3.2rem);
    font-weight: 500;

    margin-bottom: clamp(2rem, 1.5rem + 1vw, 4rem);
  }
  
  .cards-and-buttons {
    width: 100%;
    height: fit-content;
    
    display: flex;
    align-items: center;
    gap: 2.7rem;

    padding-bottom: 1rem;

    position: relative;
    left: 0;
    
    
    overflow-x: scroll;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    
    z-index: 1;
    .front, .back{
      min-width: clamp(1rem, 1rem + 2vw, 11.6rem);
      height: clamp(30rem, 26rem + 14.5vw, 51.2rem);
  
      position: sticky;
  
      color: var(--fc-strong-dark);
  
      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 4;
  
      border: none;
    }
  
    .back {
      background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
      
      top: 0;
      left: 0;

    }
  
    .front {
      background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  
      top: 0;
      right: 0;

    }
  }

  &.light{
    h1{
      color: var(--fc-strong-light);
    }

    .cards-and-buttons{
      .back {
      background: linear-gradient(270deg, var(--bg-cards-dark) 0%, var(--bg-geral-light) 100%);
      color: var(--fc-strong-light);
    }
  
    .front {
      background: linear-gradient(90deg, var(--bg-cards-dark) 0%, var(--bg-geral-light) 100%);
      color: var(--fc-strong-light);
    } 
    }
  }
`;