import { Container } from "./style";

import { FiPlus, FiMinus } from "react-icons/fi";
import { TiChevronRight } from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { Button } from "../Button";

export function MenuCards({data, quantity, favorited = false, ...rest}){
  const stringPrice = `R$ ${data.price}, 00`;
  return (
    <Container {...rest}>
      <img src={data.picture} alt="Imagem do prato" />
      <button className="details">
        <h1>{data.name}</h1>
        <TiChevronRight size={24}/>
      </button>
      <p>{data.description}</p>
      <span>{stringPrice}</span>
      <div className="buttons">
        <div className="quantity">
          <button><FiMinus/></button>
            <>{quantity}</>
          <button><FiPlus/></button>
        </div>
        <Button title="Incluir" className="incluir"/>
      </div>
      <button className="favorites">
        {favorited ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
      </button>
    </Container>
  );
};