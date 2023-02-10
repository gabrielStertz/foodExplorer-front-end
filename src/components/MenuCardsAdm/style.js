import styled from "styled-components";

export const Container = styled.button`
  background: ${({theme}) => theme.COLORS.BACKGROUND_CARDS};
  border: none;

  min-width: 300px;
  height: 512px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;


  img {
    width: 200px;
    height: 200px;
  }

  .details {
    width: 100%;
    height: 40px;

    background: none;
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    display: flex;
    align-items: center;
    
    border: none;
    margin: 10px 0 18px 0;
    padding: 0 16px;

    .menuName{
      width: 100%;
      height: 40px;
      overflow: hidden;
    h1{
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
  
      font-family: 'Poppins', sans-serif;
      font-size: 24px;

      margin: 0;

      display: inline-block;
      white-space: nowrap;
      transition-timing-function: linear;

    }
    }
  }

  p{
    height: 36px;
    width: 100%;

    color: ${({theme}) => theme.COLORS.COLOR_MEDIUM};

    font-size: 14px;

    display: flex;
    justify-content: center;

    overflow: hidden;
    flex-wrap: nowrap;
    text-align: center;

    margin-bottom: 16px;
    padding: 0 16px 0;
  }

  span{
    color: ${({theme}) => theme.COLORS.LIGHT_BLUE};

    font-size: 32px;

    text-align: center;
    margin-bottom: 16px;
  }

  .buttons{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;

    .quantity{
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
      
      display: flex;
      align-items: center;
      gap: 17px;
      
      button{
        background: transparent;
        color: ${({theme}) => theme.COLORS.COLOR_STRONG};

        border: none;
      }
    }

    .incluir{
      width: 92px;
    }
  }
  
  .favorites{
    background: none;
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    border: none;

    position: absolute;
    top: 20px;
    right: 20px;
  }
`;