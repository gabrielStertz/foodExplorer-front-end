import styled from "styled-components";

export const Container = styled.div`
  
  grid-area: footer;

  background: var(--bg-elements-dark);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: clamp(0.8rem, 0.6rem + 1vw, 2rem);
  padding-bottom: clamp(0.8rem, 0.6rem + 1vw, 2rem);
  padding-left: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
  padding-right: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);

  .logo {
    width: fit-content;

    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;

    >p {
      font-size: clamp(1rem, 0.2rem + 3vw, 2.5rem);
      font-weight: 700;
    }  

    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};

    >svg{
      width: clamp(1.5rem, 0.5rem + 4vw, 2.6rem);
      height: clamp(2.2rem, 0.5rem + 4vw, 3rem);
    }

    >svg path{
      fill: ${({theme}) => theme.COLORS.COLOR_LIGHT};
    }
  }

  .registered {
    color: ${({theme}) => theme.COLORS.COLOR_LIGHT};

    font-family: "DM Sans", sans-serif;
    font-size: clamp(0.3rem, 0.3rem + 1vw, 1.4rem);

    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media(min-width: 700px){
    padding-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    padding-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
  }
  
  &.light{
    background-color: var(--bg-elements-light);

    .logo{
      p{
        color: var(--fc-light-dark);
      }
    }
  }
`;