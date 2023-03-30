import styled from "styled-components";

export const Container = styled.button`
  
  height: clamp(3rem, 2.5rem + 1vw, 4.8rem);

  background-color: ${({theme}) => theme.COLORS.RED};
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 5px;

  padding: 12px;

  font-size: clamp(1rem, 0.8rem + 1vw, 1.4rem);
  font-weight: 500;
`;