import { useState, useEffect } from "react";

import { Container } from "./style";

import alface from "./assets/alface.png";
import ameixa from "./assets/ameixa.png";
import amendoas from "./assets/amendoas.png";
import aniz from "./assets/aniz.png";
import cafe from "./assets/cafe.png";
import camarao from "./assets/camarao.png";
import canela from "./assets/canela.png";
import claras from "./assets/claras.png";
import damasco from "./assets/damasco.png";
import farinha from "./assets/farinha.png";
import limao from "./assets/limao.png";
import maça from "./assets/maça.png";
import maracuja from "./assets/maracuja.png";
import massa from "./assets/massa.png";
import pao from "./assets/pao.png";
import paonaan from "./assets/paonaan.png";
import pepino from "./assets/pepino.png";
import pessego from "./assets/pessego.png";
import pesto from "./assets/pesto.png";
import presunto from "./assets/presunto.png";
import rabanete from "./assets/rabanete.png";
import rucula from "./assets/rucula.png";
import tomate from "./assets/tomate.png";
import whiskey from "./assets/whiskey.png";

export function IngredientsCard({ingredient}){

  const [image, setImage] = useState();

  const ingredientSplit = ingredient.split(" ");
  const ingredientConcat = ingredientSplit.join("").toLowerCase();
  

  function removeAcento (text)
    {       
      text = text.toLowerCase();                                                         
      text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
      text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
      text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
      text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
      text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
      return text;                 
    };

    const ingredientFinal = removeAcento(ingredientConcat);

  useEffect(() => {
    if(ingredientFinal === "alface"){
      setImage(alface);
    } else if(ingredientFinal === "ameixa"){
      setImage(ameixa);
    } else if(ingredientFinal === "amendoas"){
      setImage(amendoas);
    } else if(ingredientFinal === "aniz" || ingredientFinal === "anis"){
      setImage(aniz);
    } else if(ingredientFinal === "cafe"){
      setImage(cafe);
    } else if(ingredientFinal === "camarao"){
      setImage(camarao);
    } else if(ingredientFinal === "canela"){
      setImage(canela);
    } else if(ingredientFinal === "claras"){
      setImage(claras);
    } else if(ingredientFinal === "damasco"){
      setImage(damasco);
    } else if(ingredientFinal === "farinha"){
      setImage(farinha);
    } else if(ingredientFinal === "limao"){
      setImage(limao);
    } else if(ingredientFinal === "maça"){
      setImage(maça);
    } else if(ingredientFinal === "maracuja"){
      setImage(maracuja);
    } else if(ingredientFinal === "massa"){
      setImage(massa);
    } else if(ingredientFinal === "pao"){
      setImage(pao);
    } else if(ingredientFinal === "paonaan" || ingredientFinal === "paonaam"){
      setImage(paonaan);
    } else if(ingredientFinal === "pepino"){
      setImage(pepino);
    } else if(ingredientFinal === "pessego"){
      setImage(pessego);
    } else if(ingredientFinal === "pesto"){
      setImage(pesto);
    } else if(ingredientFinal === "presunto"){
      setImage(presunto);
    } else if(ingredientFinal === "rabanete"){
      setImage(rabanete);
    } else if(ingredientFinal === "rucula"){
      setImage(rucula);
    } else if(ingredientFinal === "tomate"){
      setImage(tomate);
    } else if(ingredientFinal === "whiskey" || ingredientFinal === "whisky"){
      setImage(whiskey);
    };
  }, []);

  return(
    <Container>
      <img src={image} alt={ingredient} />
      <p>{ingredient}</p>
    </Container>
  );
};