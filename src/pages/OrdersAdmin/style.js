import styled from "styled-components";

export const Container = styled.div`
  
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  grid-template-areas: "header" "main" "footer";

  main{
    grid-area: main;
    overflow-y: scroll;

    padding: 0 1rem 1rem 1rem;

    background: var(--bg-geral-dark);
  }

  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;

    >button{
      background: none;
      border: none;

      color: var(--fc-strong-dark);
      font-size: clamp(1.3rem, 1.1rem + 1vw, 1.6rem);

      display: flex;
      align-items: center;
      align-self: flex-start;
      gap: 0.5rem;

      margin-top: 1rem;

      svg{
        width: clamp(1.4rem, 1.2rem + 1vw, 2rem);
        height: clamp(1.4rem, 1.2rem + 1vw, 2rem);
      }
    }
  }
  .back{
    background: none;
    border: none;

    color: var(--fc-strong-dark);
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.3rem, 1rem + 1vw, 1.6rem);

    display: flex;
    align-items: center;
    gap: 5px;

    margin-top: -4rem;
  }

  h1{
    color: var(--fc-strong-dark);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: clamp(2.2rem, 1.9rem + 1vw, 3.2rem);

    margin-top: clamp(2rem, 1.8rem + 1vw, 3.5rem);
    margin-bottom: clamp(2rem, 1.8rem + 1vw, 3.5rem);
  }
  table, th, td{

    border: 1px solid var(--fc-light-dark);

  }
  table{
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }
  
  tr{
    height: clamp(2.5rem, 1.4rem + 2vw, 5.4rem);
  }
  th{
    color: var(--fc-strong-dark);
    padding-left: clamp(1rem, 0.8rem + 1vw, 1.4rem);

    font-size: clamp(1rem, 0.8rem + 1vw, 1.4rem);
    text-align: left;
  }

td{
  
  color: var(--fc-medium-dark);

  font-size: clamp(1rem, 0.5rem + 1vw, 1.4rem);
  text-align: left;

  padding-left: clamp(1rem, 0.8rem + 1vw, 1.5rem);
}

th:nth-child(1){
  width: clamp(8rem, 7.5rem + 4vw, 15rem);
  white-space: nowrap;
}
th:nth-child(2){
  display: none;
  width: clamp(8rem, 7.5rem + 4vw, 15rem);
  white-space: nowrap;
}
th:nth-child(3){
  white-space: nowrap;
}
th:nth-child(4){
  width: clamp(8rem, 7.5rem + 4vw, 15rem);
  white-space: nowrap;
}

&.light{

  main{
    background: var(--bg-geral-light);

    button, h1, th{
      color: var(--fc-strong-light);
    }

    td{
      color: var(--fc-medium-light);
    }
  }
}

@media(min-width: 450px){
  th:nth-child(2){
    display: table-cell;
  } 
}

@media(min-width: 550px){
  main{
    padding-left: clamp(1.5rem, 1.2rem + 6vw, 12.3rem);
    padding-right: clamp(1.5rem, 1.2rem + 6vw, 12.3rem);
  }
}

@media(min-width: 700px){
  main{
    padding-left: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
    padding-right: clamp(0.5rem, 0.4rem + 10vw, 12.3rem);
  }
}
`;