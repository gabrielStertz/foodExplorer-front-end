import styled from "styled-components";

export const Container = styled.div`
  
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-areas: "header" "main" "footer";


  main{

    grid-area: main;

    background: var(--bg-geral-dark);

    padding-left: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);
    padding-right: clamp(0.5rem, 0.4rem + 5vw, 12.3rem);

    .buttons-back-orderHistoric{
      width: 100%;

      display: flex;
      justify-content: space-between;

      margin-top: clamp(0.5rem, 0.4rem + 1vw, 2rem);

      >button{
        background: none;
        border: none;

        color: var(--fc-strong-dark);
        font-size: clamp(1.2rem, 0.8rem + 1vw, 2rem);

        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }

  h1{

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2rem, 1.8rem + 1vw, 3.2rem);

    color: var(--fc-strong-dark);

    margin-top: clamp(2rem, 1.8rem + 1vw, 3.4rem);
    margin-bottom: clamp(2rem, 1.8rem + 1vw, 3.2rem);
  }

  .geral{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: clamp(1rem, 0.8rem + 1vw, 3rem);

    margin-bottom: 2rem;

  }


  .order{
    width: 100%;

    .order-title{

      h1{
        margin-top: 5px;
      }
    }

    .order-body{
      height: clamp(21rem, 20rem + 15vw, 44.9rem);

      display: flex;
      flex-direction: column;
      justify-content: space-between;


      .order-items{
        height: clamp(15rem, 13rem + 10vw, 43rem);
      
        overflow-y: auto;
      }

      .total-confirm{
        display: flex;
        align-items: center;
        justify-content: space-between;
      
        margin: 2rem 0;
      
      .total{
        color: var(--fc-strong-dark);

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: clamp(1.3rem, 0.7rem + 1vw, 2rem);

      }

        >button{
          width: clamp(12rem, 11rem + 7vw, 18rem);

          font-size: clamp(1.3rem, 0.7rem + 1vw, 1.6rem);
        }
        >button:disabled{
          opacity: 0.5;
        }
      }
    }
  }


  .pay{
    width: 100%;

    h1{
      margin-top: 5px;
    }
    
    .pay-box{
      display: flex;
      justify-content: center;
    }
  
    .content{
      width: clamp(23rem, 20rem + 15vw, 53rem);
      height: clamp(21rem, 20rem + 15vw, 44.9rem);

      border: 1px solid rgba(255, 255, 255, 0.1);


      .pay-method{ 
        display: flex;
        align-items: center;
        >button{
          width: 50%;
          height: clamp(5rem, 4.6rem + 2vw, 8.1rem);

          color: var(--fc-strong-dark);

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          font-size: clamp(1.3rem, 1.1rem + 1vw, 1.6rem);

          background: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

      }

      .pay-info{
        height: 80%;


        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &.light{
    main{
      background: var(--bg-geral-light);

      .buttons-back-orderHistoric{
        button{
          color: var(--fc-strong-light);
        }
      }

      h1{
        color: var(--fc-strong-light);
      }

      .geral{
        .order{
          .total{
            color: var(--fc-strong-light);
          }
        }

        .pay{
          .content{
            border: 1px solid var(--fc-medium-dark);

            .pay-method{
              button{
                border: 1px solid var(--fc-medium-dark);

                color: var(--fc-strong-light);
              }
            }
          }
        }
      }
    }
  }

  @media(min-width: 700px){
    main{
      overflow-y: scroll;
      padding-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
      padding-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    }

    .geral{
      flex-wrap: nowrap;

      .order{
        margin-top: clamp(2rem, 1.8rem + 1vw, 5rem);
      }

      .pay{
        margin-top: clamp(2rem, 1.8rem + 1vw, 5rem);
      }
    }
  }
`;