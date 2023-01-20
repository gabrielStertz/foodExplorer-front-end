import styled from "styled-components";

export const Container = styled.div`

  .title {
    // width: 100%;
    height: 260px;

    display: flex;

    margin: 268px 123px 62px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
    color: ${({theme}) => theme.COLORS.COLOR_STRONG};

    .imagem{
      width: 50%;
      position: relative;
    }
    img {
      width: 633px;
      height: 407px;
      
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .title-half{
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left:50px;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;

        margin-bottom: 8px;
      }

      p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
      }
    }
  }
  
  .menu {
    overflow: scroll;

    padding: 0 123px 77px;
  }  
`;
