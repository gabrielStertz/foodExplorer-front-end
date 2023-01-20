import { useState, useEffect } from "react";


import { Container} from "./style.js";

import { Header } from "../../components/Header";
import { MenuTypes } from "../../components/Menu_Types";
import { MenuCards } from "../../components/MenuCards";
import { Footer } from "../../components/Footer";
import Imagem from "../../assets/pngegg 1.png"

export function Home(){
  const [quantity, setQuantity] = useState(0);
  const [container1, setContainer1] = useState();
  const [container2, setContainer2] = useState();
  const [container3, setContainer3] = useState();

  const data = {
    "name": "Lazanha",
    "description": "Prato italiano muito apreciado",
    "type": "prato principal",
    "price": 20.00,
    "picture": "bucheta.png"
  };

  useEffect(() => {
    setContainer1(document.getElementById("Prato Principal"));
    setContainer2(document.getElementById("Sobremesa"));
    setContainer3(document.getElementById("Bebidas"));
  }, []);


  function handleScrollBack1(){
    container1.scrollLeft -= 100;
  };
  function handleScrollFront1(){
    container1.scrollLeft += 100;
  };

  function handleScrollBack2(){
    container2.scrollLeft -= 100;
  };
  function handleScrollFront2(){
    container2.scrollLeft += 100;
  };

  function handleScrollBack3(){
    container3.scrollLeft -= 100;
  };
  function handleScrollFront3(){
    container3.scrollLeft += 100;
  };
  
  return(
    <Container>
      <Header/>
      <div className="title">
        <div className="imagem"><img src={Imagem} alt="" /></div>
        <div className="title-half">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>
      <div className="menu">
      <MenuTypes 
        title="Prato Principal"
        onClickScrollBack={handleScrollBack1}
        onClickScrollFront={handleScrollFront1}
      >
        <MenuCards 
          data={data}
          quantity={quantity}
        />
        <MenuCards 
          data={data}
          favorited
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
      </MenuTypes>
      <MenuTypes 
        title="Sobremesa"
        onClickScrollBack={handleScrollBack2}
        onClickScrollFront={handleScrollFront2}
      >
      <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
      </MenuTypes>
      <MenuTypes 
        title="Bebidas"
        onClickScrollBack={handleScrollBack3}
        onClickScrollFront={handleScrollFront3}
      >
        <MenuCards 
          data={data}
          quantity={quantity}
        />
        <MenuCards 
          data={data}
          favorited
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
        <MenuCards 
          data={data}
        />
      </MenuTypes>
      </div>
      <Footer/>
    </Container>
  );
};