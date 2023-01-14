import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;

  background-color: ${({theme}) => theme.COLORS.RED};
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 5px;

  padding: 12px 0;

  font-size: 14px;
  font-weight: 500;
`;