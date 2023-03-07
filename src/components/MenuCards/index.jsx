import { useState, useEffect } from "react";

import { Container } from "./style";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { FiPlus, FiMinus } from "react-icons/fi";
import { TiChevronRight } from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Button } from "../Button";

export function MenuCards({data, onClick, ...rest}){

  const [quantity, setQuantity] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const { addOrder, signOut } = useAuth();

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
      await api.post(`/favorites/${id}`);
    } else if(favorite === true) {
      setFavorite(false);
      await api.delete(`/favorites/${id}`);
    };
  };

  function handleIncludeOrder(id){
    for(let i = 0; i < quantity; i++){
      addOrder(id);
    };
  };

  useEffect(() => {
    async function fetchFavorites(){
      try {
        const response = await api.get("/favorites");
        const favorites = response.data;

        favorites.map(item => {
          if(item.id === data.id){
            setFavorite(true);
          };
        });
        
      } catch (error) {
        if(error.response.data.message === "JWT Token inválido"){
          signOut();
        } else {
          if(error.response){
            alert(error.response.data.message);
          } else {
            alert("Não foi possível acessar");
          };
        };  
      };

      
    };

    fetchFavorites();
    
  }, []);


  return (
    <Container {...rest}>
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
        <Button onClick={() => handleIncludeOrder(data.id)} title="Incluir" className="incluir"/>
      </div>
      <button className="favorites" onClick={() => handleClickFavorite(data.id)}>
        {favorite ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
      </button>
    </Container>
  );
};