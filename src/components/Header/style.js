import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  
 .principal{
    width: 100vw;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 1rem;
    column-gap: 1rem;
    justify-content: space-between;

    padding-top: clamp(0.8rem, 0.6rem + 1vw, 2rem);
    padding-bottom: clamp(0.8rem, 0.6rem + 1vw, 2rem);
    padding-left: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
    padding-right: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);


    .logo {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: nowrap;

      font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem);
      font-weight: 700;

      color: var(--fc-strong-dark);

      >svg{
        width: clamp(1.5rem, 0.5rem + 4vw, 2.6rem);
        height: clamp(2.2rem, 0.5rem + 4vw, 3rem);
      }
    }

    .logOut {
      background: transparent;
      color: var(--fc-strong-dark);
    
      border: none;

      > svg{
        width: clamp(1.7rem, 1rem + 1vw, 2.2rem);
        height: clamp(1.7rem, 1rem + 1vw, 2.2rem);
      }
    }
  }
  

  .isNotAdmin{

    .favorites {
      
      color: var(--fc-strong-dark);
      background: transparent;

      border: none;

      font-size: clamp(1rem, 0.8rem + 1vw, 1.6rem);
    }

    .orders {
      min-width: fit-content;
      width: clamp(11rem, 8rem + 1vw, 20rem);
    }
  }

  .isAdmin{

    .orders, .add-menu {
      min-width: fit-content;
      width: clamp(11rem, 8rem + 1vw, 20rem);
    }
  }

  .dark{
    background-color: var(--bg-elements-dark);

    .logo{
      color: var(--fc-strong-dark);
    }
  }

  .light{
    background-color: var(--bg-elements-light);

    p{
      color: var(--fc-strong-light);
    }


    .logOut{
      color: var(--fc-strong-light);
    }

    .favorites{
      color: var(--fc-strong-light);
    }
  }

  @media(min-width: 700px){
    .principal{
      padding-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
      padding-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    }
  }  
`;