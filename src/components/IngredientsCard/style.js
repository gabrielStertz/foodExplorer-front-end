import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--fc-strong-dark);
  }

  &.light{
    color: var(--fc-strong-light);
  }
`;