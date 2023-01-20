import styled from "styled-components";

export const Container = styled.div`
  

  h1{
    color:${({theme}) => theme.COLORS.COLOR_STRONG};

    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;

    margin-bottom: 40px;
  }
  
  .cards-and-buttons {
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 27px;

    position: relative;
    left: 0;
    
    
    overflow-x: scroll;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    
    z-index: 1;
    .front, .back{
      min-width: 116px;
      height: 512px;
  
      position: sticky;
  
      color: ${({theme}) => theme.COLORS.COLOR_STRONG};
  
      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 4;
  
      border: none;
    }
  
    .back {
      background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
      
      top: 0;
      left: 0;

    }
  
    .front {
      background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  
      top: 0;
      right: 0;

    }
  }
`;