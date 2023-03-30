import styled from "styled-components";

export const Container = styled.div`
  
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-areas: "header" "main" "footer";

  main{
    grid-area: main;
    overflow-y: scroll;
    position: relative;

    .mode{
    
        position: absolute;
        top: 2rem;
        right: 2rem;

        display: flex;
        align-items: center;
        gap: 5px;
        z-index: 10;

        padding: 0.5rem;
    
        background: none;
        border: none;
    
      }
  }


  .title {
    height: clamp(5rem, 10rem + 10vw, 26rem);

    display: flex;

    margin: 7rem 0 4rem;
    margin-left: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
    margin-right: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);

    .imagem{
      width: 50%;
      position: relative;
    }
    img {
      width: clamp(7rem, 18rem + 18vw, 63.3rem);
      height: clamp(4rem, 15rem + 15vw, 40.7rem);
      
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .title-half{
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 30;

      margin-left:50px;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: clamp(1.5rem, 1rem + 4vw, 4rem);
        line-height: 140%;

        margin-bottom: 8px;
      }

      p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: clamp(1rem, 0.5rem + 2vw, 1.6rem);
        line-height: 140%;
      }
    }
  }
  
  .menu {
    overflow: scroll;

    padding-left: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
    padding-right: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
  }


  .main-dark{
    background-color: var(--bg-geral-dark);
    color: var(--fc-strong-dark);

    .mode{
      color: var(--fc-medium-dark);
    }

    .title{
      background-color: var(--bg-gray);
      color: var(--fc-strong-dark);
    }
  }

  .main-light{
    background-color: var(--bg-geral-light);
    color: var(--fc-strong-light);

    .mode{
      color: var(--fc-medium-light);
    }

    .title{
      background-color: var(--bg-cards-light);
      color: var(--fc-strong-dark);
    }
  }

  @media(min-width: 700px){
    .title{
      margin-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
      margin-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    }

    .menu{
      padding-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
      padding-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    }
  }
`;
