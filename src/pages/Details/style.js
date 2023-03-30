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

    padding: 0 1rem 1rem 1rem;
  }

  .back-button{
    background: none;
    color: var(--fc-strong-dark);

    display: flex;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(1.6rem, 1.3rem + 1vw, 2.4rem);

    border: none;
    margin-top: clamp(1.6rem, 1.3rem + 1vw, 2.4rem);

    >svg{
      width: clamp(1.8rem, 1.3 + 1vw, 2.4rem);
      height: clamp(1.8rem, 1.3 + 1vw, 2.4rem);
    }
  }
  .geral {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: clamp(2rem, 1.8rem + 3vw, 6rem);

    >img{
      width: clamp(10rem, 8rem + 25vw, 50rem);
      height: clamp(10rem, 8rem + 25vw, 50rem);
    }

    .information{
      >h1{
        color: var(--fc-strong-dark);

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: clamp(2rem, 1.8rem + 2vw, 4rem);
        text-align: center;

        margin-bottom: 0.8rem;
      }
      >p{
        color: var(--fc-strong-dark);

        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: clamp(1.4rem, 1rem + 1vw, 2.4rem);
        line-height: 140%;
        text-align: center;

        margin-bottom: clamp(1.4rem, 1rem + 1vw, 2.4rem);
      }
      .ingredients{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: clamp(1rem, 0.8rem + 1vw, 1.6rem);

        margin-bottom: clamp(2rem, 1.8rem + 1vw, 4.5rem);

        >div{
          display: flex;
          flex-direction: column;
          align-items: center;
          >img{
            width: clamp(2.5rem, 2.2rem + 2vw, 5rem);
            height: clamp(2.5rem, 2.2rem + 2vw, 5rem);
          }

          >p{
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: clamp(1.2rem, 0.8rem + 1vw, 1.8rem);
          }
        }  
      }

      .price-and-buttons{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        >p{
          color: var(--color-light-blue);

          font-size: clamp(1.6rem, 1.3rem + 1vw, 3.2rem);

          margin-right: clamp(3rem, 2.6rem + 1vw, 5.7rem);
        }

        >div{
          color: var(--fc-strong-dark);

          font-size: clamp(1.4rem, 1rem + 1vw, 2rem);

          display: flex;
          align-items: center;
          gap: clamp(1rem, 0.8rem + 1vw, 1.7rem);

          margin-right: clamp(1.4rem, 1rem + 1vw, 2.7rem);
          >button{
            background: none;
            color: var(--fc-strong-dark);

            border: none;
            >svg{
              width: clamp(1.4rem, 1rem + 1vw, 2rem);
              height: clamp(1.4rem, 1rem + 1vw, 2rem);
            }
          }
        }
        >button{
          min-width: fit-content;
          width: clamp(6rem, 5.7rem + 1vw, 9.2rem);

          font-size: clamp(1rem, 0.8rem + 1vw, 1.4rem);

          >svg{
              width: clamp(1.4rem, 1rem + 1vw, 2rem);
              height: clamp(1.4rem, 1rem + 1vw, 2rem);
          }
        }
      }
    }

  }

  &.light{
    main{
      background: var(--bg-geral-light);

      .back-button{
        color: var(--fc-strong-light);
      }

      .information{
        h1{
          color: var(--fc-strong-light);
        }
        p{
          color: var(--fc-strong-light);
        }

        .price-and-buttons{
          p{
            color: var(--color-dark-blue);
          }

          div{
            color: var(--fc-strong-light);

            button{
              color: var(--fc-strong-light);
            }
          }
        }
      }
    }
  }

  @media(min-width: 700px){
    .geral{
      flex-wrap: nowrap;

      margin-top: clamp(3rem, 2.3rem + 3vw, 10rem);

      .information{
        >h1{
          text-align: left;
        }

        >p{
          text-align: justify;
        }

        .ingredients{
          justify-content: flex-start;
        }
      }
    }
  }
`;