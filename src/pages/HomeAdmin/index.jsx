import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";

import { Container} from "./style.js";

import { Header } from "../../components/Header";
import { MenuTypes } from "../../components/Menu_Types";
import { MenuCardsAdm } from "../../components/MenuCardsAdm";
import { Footer } from "../../components/Footer";
import Imagem from "../../assets/imagemHome.png";

export function HomeAdmin(){

  const [pratoPrincipal, setPratoPrincipal] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);
  const [bebida, setBebida] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { signOut } = useAuth();

  
  function handleClickEditMenu(id){
    navigate(`/add/${id}`)
  };

  
  useEffect(() => {

    async function fetchMenu(){

      let response;

      try {
        
        response = await api.get(`/menu?name=${search}`);

        } catch (error) {
    
          if(error.response.data.message === "JWT Token inválido"){
            signOut();
            navigate("/");
          } else {
            if(error.response){
              alert(error.response.data.message);
            } else {
              alert("Não foi possível acessar");
            };
          };
        };

        const pratoPri = response.data.filter(item => item.type === "Prato principal");
        const sobre = response.data.filter(item => item.type === "Sobremesa");
        const bebi = response.data.filter(item => item.type === "bebida");
        
        setPratoPrincipal(pratoPri);
        setSobremesa(sobre);
        setBebida(bebi);
    };
    
    fetchMenu();
  }, [search]);
  
  return(
    <Container>
      <Header 
        isAdmin
        onChange={e => setSearch(e.target.value)}
      />
      <div className="title">
        <div className="imagem"><img src={Imagem} alt="Imagem de macarons" /></div>
        <div className="title-half">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>
      <div className="menu">
      {
        pratoPrincipal &&
      <MenuTypes title="Prato Principal">
        {
          pratoPrincipal.map(item => (
            
            <MenuCardsAdm 
              key={String(item.id)}
              data={item}
              onClick={() => handleClickEditMenu(item.id)}
            />
          ))
        }
        
      </MenuTypes>
      }
      {
        sobremesa &&
      <MenuTypes title="Sobremesa">
      {
          sobremesa.map(item => (
            
            <MenuCardsAdm 
              key={String(item.id)}
              data={item}
              onClick={() => handleClickEditMenu(item.id)}
            />
          ))
        }
      </MenuTypes>
      }
      {
        bebida &&
      <MenuTypes title="Bebidas">
        {
          bebida.map(item => (
            
            <MenuCardsAdm 
              key={String(item.id)}
              data={item}
              onClick={() => handleClickEditMenu(item.id)}
            />
          ))
        }
      </MenuTypes>
      }
      </div>
      <Footer/>
    </Container>
  );
};