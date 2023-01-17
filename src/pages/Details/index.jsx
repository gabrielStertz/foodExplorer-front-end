import { useState } from "react";

import { Container } from "./style.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MenuTypes } from "../../components/Menu_Types";
import { MenuCards } from "../../components/MenuCards";
import { Footer } from "../../components/Footer";

export function Details(){
  const [quantity, setQuantity] = useState(0);

  const data = {
    "name": "Lazanha",
    "description": "Prato italiano muito apreciado",
    "type": "prato principal",
    "price": 20.00,
    "picture": "../../assets/Mask group-1.png"
  };

  // setPicture(`../../assets/${data.picture}`)
  
  return(
    <Container>
      <Header/>
      <div className="menu">
      <MenuTypes title="Prato Principal">
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
      <MenuTypes title="Sobremesa">
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
      </div>
      <Footer/>
    </Container>
  );
};