import { Container } from "./style";

import { FiPlus, FiMinus } from "react-icons/fi";
import { TiChevronRight } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";

import { Button } from "../Button";

export function MenuCardsAdm({data, ...rest}){

  const stringPrice = `R$ ${data.price}, 00`;

  const transitionTimePerPixel = 0.01;

  function handleMouseEnter(e){
    let textBox = e.target.firstChild;
    if(e.target.tagName === "BUTTON"){
      textBox = e.target.firstChild;
    } else if(e.target.tagName === "DIV"){
      textBox = e.target;
    } else if(e.target.tagName === "H1"){
      textBox = e.target.parentElement;
    } else if(e.target.tagName === "svg"){
      textBox = e.target.previousSibling;
    };
    let textWidth = textBox.firstChild.clientWidth;
    let boxWidth = textBox.clientWidth;
    let translateVal = Math.min(boxWidth - textWidth, 0);
    let translateTime = - transitionTimePerPixel * translateVal + "s";
    textBox.lastChild.style.transitionDuration = translateTime;
    textBox.lastChild.style.transform = "translateX("+translateVal+"px)";
  };
  function handleMouseLeave(e){
    let textBox = e.target.firstChild;
    if(e.target.tagName === "BUTTON"){
      textBox = e.target.firstChild;
    } else if(e.target.tagName === "DIV"){
      textBox = e.target;
    } else if(e.target.tagName === "H1"){
      textBox = e.target.parentElement;
    } else if(e.target.tagName === "svg"){
      textBox = e.target.previousSibling;
    };
    textBox.lastChild.style.transitionDuration = "0.3s";
    textBox.lastChild.style.transform = "translateX(0)";
  };

  return (
    <Container {...rest}>
      <img src={data.picture} alt="Imagem do prato" />
      <button className="details" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
        <div className="menuName"><h1>{data.name}</h1></div>
        <TiChevronRight size={24}/>
      </button>
      <p>{data.description}</p>
      <span>{stringPrice}</span>
      <div className="buttons">
        <div className="quantity">
          <button><FiMinus/></button>
            <>0</>
          <button><FiPlus/></button>
        </div>
        <Button title="Incluir" className="incluir"/>
      </div>
      <button className="favorites">
        <AiOutlineHeart size={25}/>
      </button>
    </Container>
  );
};