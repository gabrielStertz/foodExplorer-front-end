import { useState } from "react";

import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { FiPlus, FiMinus } from "react-icons/fi";
import { TiChevronRight } from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Button } from "../Button";

export function MenuCardsAdm({data, onClick, ...rest}){

  const [quantity, setQuantity] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const { isDarkModeOn } = useAuth();

  const pictureUrl = `${api.defaults.baseURL}/files/${data.picture}`;

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
  
  function handleAddQuantity(){
    setQuantity(quantity + 1);
  };

  function handleRemoveQuantity(){
    if(quantity > 0){
      setQuantity(quantity - 1);
    };
  };
  async function handleClickFavorite(id){
    if(favorite === false){
      setFavorite(true);
    } else if(favorite === true) {
      setFavorite(false);
    };
  };

  return (
    <Container className={isDarkModeOn ? "dark" : "light"} {...rest}>
      <img src={pictureUrl} alt="Imagem do prato" />
      <button className="details" onClick={onClick} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
        <div className="menuName"><h1>{data.name}</h1></div>
        <TiChevronRight size={24}/>
      </button>
      <p>{data.description}</p>
      <span>{data.price}</span>
      <div className="buttons">
        <div className="quantity">
          <button onClick={handleRemoveQuantity}><FiMinus/></button>
            <>{quantity}</>
          <button onClick={handleAddQuantity}><FiPlus/></button>
        </div>
        <Button title="Incluir" className="incluir"/>
      </div>
      <button className="favorites" onClick={() => handleClickFavorite(data.id)}>
        {favorite ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
      </button>
    </Container>
  );
};