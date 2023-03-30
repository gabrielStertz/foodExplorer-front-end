import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-areas: "header" "main" "footer";

  main{
    grid-area: main;
    overflow-y: scroll;

    background: var(--bg-geral-dark);

    padding-top: clamp(0.8rem, 0.6rem + 1vw, 2rem);
    padding-bottom: clamp(0.8rem, 0.6rem + 1vw, 2rem);
    padding-left: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
    padding-right: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
  }

  p{
    color: var(--fc-strong-dark);
  }
  
  button#back{
    background: none;
    color: var(--fc-strong-dark);

    border: none;
    margin-top: clamp(1.3rem, 1.1rem + 1vw, 3.2rem);
    margin-bottom: clamp(1rem, 0.8rem + 1vw, 2.4rem);

    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(1.4rem, 1.2rem + 1vw, 2.4rem);
  }

  h1{
    color: var(--fc-strong-dark);

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.3rem, 2rem + 1vw, 3.2rem);

    margin-bottom: clamp(2rem, 1.8rem + 1vw, 3.2rem);
  }

  .form-item{
    width: 100%;

    p{
      font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

      margin-bottom: 8px;
    }

    >label{
      color: var(--fc-strong-dark);

      font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

    }

    input, select, textarea{
      width: 100%;
    }
    input{
      max-height: clamp(3rem, 2.8rem + 2vw, 4.8rem);

      background: none;
      color: var(--fc-strong-dark);

      border: 1px solid var(--fc-light-dark);
      border-radius: 5px;

      font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);
    }
  }

  .picture-name-type{
    width: 100%;
    height: fit-content;

    display: flex;
    flex-wrap: wrap;
    gap: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

    margin-bottom: clamp(1.9rem, 1.1rem + 1vw, 2.9rem);

    .name{
      width: 100%;

      margin-top: 2.5rem;
    }

    .picture-item{
      min-width: 18rem;
      height: clamp(3rem, 2.7rem + 1vw, 4.8rem);

      >p{
        font-size: clamp(1.4rem, 1rem + 1vw, 1.6rem);

        margin-bottom: 8px;
      }
    }

    .select-item{
      width: fit-content;

      align-self: flex-end;
    }

    .inputPicture {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    .inputPicture + label {
      width: 100%;
      height: clamp(3rem, 2.7rem + 1vw, 4.8rem);

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      padding: clamp(1rem, 0.8rem + 1vw, 1.5rem);
      font-size: clamp(1rem, 0.7rem + 1vw, 1.3rem);
      font-weight: 400;
      color: var(--fc-strong-dark);
      background-color: transparent;
      border: 1px solid var(--fc-light-dark);
      border-radius: 5px;
      cursor: pointer;

      >span{
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
      }
  }
  
  .inputPicture:focus + label,
  .inputPicture + label:hover {
      background-color: var(--bg-gray);
  }

    *, *::before, *::after{
      box-sizing: border-box;
    }

    select {
      appearance: none;

      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin-left: 1.5rem;
      width: 100%;
      height: inherit;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      color: inherit;
      outline: none;
    }

    .select {
      width: clamp(15rem, 13rem + 2vw, 17rem);
      height: clamp(3rem, 2.7rem + 1vw, 4.8rem);
      padding-right: clamp(1.4rem, 1.2rem + 1vw, 1.5rem);
      border: 1px solid var(--fc-light-dark);
      border-radius: 5px;
      font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);
      color: var(--fc-medium-dark);
      cursor: pointer;
      line-height: 1.1;
      background-color: transparent;
      display: grid;
      grid-template-areas: "select";
      align-items: center;
      position: relative;
    }

    select, .select::after{
      grid-area: select;
    }

    select::-ms-expand {
      display: none;
    }

    .select::after{
      content: "";
      width: 0.8em;
      height: 0.5em;
      background-color: var(--fc-medium-dark);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      justify-self: end;
    }

    select:focus + .focus {
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border: 2px solid var(--fc-strong-dark);
    }
  }

  .ingredients-price{
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);

    margin-bottom: clamp(1.9rem, 1.1rem + 1vw, 2.9rem);

    .p-ingredients{
      width: 100%;

      p{
        font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);
      
        margin-bottom: 8px;
      }
    }
    .ingredients-item{
      width: 100%;
      max-width: 50rem;
      height: clamp(3rem, 2.7rem + 1vw, 4.8rem);

      display: flex;
      align-items: center;
      overflow-x: scroll;

      border: 1px solid var(--fc-light-dark);
      border-radius: 5px;
    }
    .price-item{
      max-width: 12rem;
    }
  }

  .description{
    margin-bottom: clamp(1.9rem, 1.1rem + 1vw, 2.9rem);
  }

  .button{
    width: 100%;

    display: flex;
    gap: 1rem;
    justify-content: ${({isAdd}) => isAdd ? "flex-end" : "space-between"};

    button{
      width: clamp(25rem, 23rem + 5vw, 35.7rem);
      height: clamp(3rem, 2.8rem + 2vw, 4.8rem);

      background: var(--bg-gray);
      color: var(--fc-strong-dark);

      border: 1px solid var(--fc-strong-dark);
      border-radius: 5px;
      justify-self: end;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: clamp(1.4rem, 1.2rem + 1vw, 1.6rem);
    }
  }

  &.light{
    main{ 
      background: var(--bg-geral-light);

      button#back{
        color: var(--fc-strong-light);
      }

      h1{
        color: var(--fc-strong-light);
      }

      p{
        color: var(--fc-strong-light);
      }

      .form-item{
        label, input, textarea, select{
          color: var(--fc-strong-light);
        }
      }
      .inputPicture + label {
        color: var(--fc-strong-light);
        span{
          color: var(--fc-strong-light);
        }
      }

      .inputPicture:focus + label,
      .inputPicture + label:hover {
        background-color: var(--bg-elements-light);
      }

      .select::after{
        background-color: var(--fc-strong-light);
      }

      .button button{
        background: var(--bg-cards-light);
        color: var(--fc-strong-light);
      }
    }  
  }

  @media(min-width: 550px){
    .ingredients-price{
      flex-wrap: nowrap;

      .ingredients-item{
        max-width: 100%;
      }
    }
  }

  @media(min-width: 585px){
    .picture-name-type{
      .name{
        width: clamp(30rem, 25rem + 12vw, 60rem);
        margin-top: 0;
      }
    }
  }
  
  @media(min-width: 700px){
    main{
      padding-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
      padding-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    }
  }

  @media(min-width: 900px){
    .picture-name-type{
      flex-wrap: nowrap;

      .name{
        width: 100%;
      }
    }
  }
`;