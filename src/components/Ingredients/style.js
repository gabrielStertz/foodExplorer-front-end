import styled from "styled-components";

export const Container = styled.div`
  
  width: clamp(12rem, 8rem + 6vw, 15rem);
  min-width: 12rem;
  height: 80%;

  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_GRAY };
  color: ${({theme, isNew}) => isNew ? theme.COLORS.COLOR_LIGHT : theme.COLORS.COLOR_STRONG };

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.COLOR_LIGHT}` : 'none'};

  margin-left: 8px;
  border-radius: 8px;
  padding-right: clamp(1rem, 1.1rem + 1vw, 1.6rem);

  > button{
    border: none;
    background: none;

    display: flex;
    align-items: center;
  }

  .button-delete{
    color: var(--fc-strong-dark);
  }

  .button-add{
    color: var(--fc-light-dark);
  }

  > input{
    width: 100%;

    padding-left: clamp(0.5rem, 0.4rem + 1vw, 1.2rem);

    color: var(--fc-strong-dark);
    background: transparent;

    border: none;

    &::placeholder{
      color: var(--fc-light-dark);

      font-size: clamp(1.3rem, 1.1rem + 1vw, 1.6rem);
    }
  }

  &.light{
    background-color: ${({isNew}) => isNew ? 'transparent' : "var(--bg-elements-light)" };

    .button-delete{
      color: var(--fc-strong-light);
    }
  }
`;