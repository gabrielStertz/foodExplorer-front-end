import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container} from "./style.js";

import { api } from "../../services/api.js";

import { Header } from "../../components/Header";
import { MenuTypes } from "../../components/Menu_Types";
import { MenuCards } from "../../components/MenuCards";
import { Footer } from "../../components/Footer";
import Imagem from "../../assets/imagemHome.png";

export function HomeAdmin(){
  const [quantity, setQuantity] = useState(0);
  const [container1, setContainer1] = useState();
  const [container2, setContainer2] = useState();
  const [container3, setContainer3] = useState();
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState([]);
  const [pratoPrincipal, setPratoPrincipal] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);
  const [bebida, setBebida] = useState([]);

  const navigate = useNavigate();
  
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

  function handleEditMenu(id){
    navigate(`/add`)
  };

  useEffect(() => {
    async function fetchMenu(){
      const response = await api.get(`/menu?name=${search}`);
      setMenu(response.data);
    };

    fetchMenu();

    const pratoPri = menu.filter(item => item.type === "Prato principal");
    const sobre = menu.filter(item => item.type === "Sobremesa");
    const bebi = menu.filter(item => item.type === "bebida");

    setPratoPrincipal(pratoPri);
    setSobremesa(sobre);
    setBebida(bebi);
  }, [search]);
  
  return(
    <Container>
      <Header isAdmin onChange={e => setSearch(e.target.value)}/>
      <div className="title">
        <div className="imagem"><img src={Imagem} alt="Imagem de macarons" /></div>
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
         {
          pratoPrincipal.map(item => (
            
            <MenuCards
              key={item.id}
              data={item}
              onClick={() => handleEditMenu(item.id)}
            />
          ))
        }
      </MenuTypes>
      <MenuTypes 
        title="Sobremesa"
        onClickScrollBack={handleScrollBack2}
        onClickScrollFront={handleScrollFront2}
      >
       {
          sobremesa.map(item => (
            
            <MenuCards
              key={item.id}
              data={item}
              onClick={() => handleEditMenu(item.id)}
            />
          ))
        }
      </MenuTypes>
      <MenuTypes 
        title="Bebidas"
        onClickScrollBack={handleScrollBack3}
        onClickScrollFront={handleScrollFront3}
      >
         {
          bebida.map(item => (
            
            <MenuCards
              key={item.id}
              data={item}
              onClick={() => handleEditMenu(item.id)}
            />
          ))
        }
      </MenuTypes>
      </div>
      <Footer/>
    </Container>
  );
};