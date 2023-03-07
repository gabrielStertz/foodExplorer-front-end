import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";

import { Container} from "./style.js";

import { Header } from "../../components/Header";
import { MenuTypes } from "../../components/Menu_Types";
import { MenuCards } from "../../components/MenuCards";
import { Footer } from "../../components/Footer";
import Imagem from "../../assets/imagemHome.png";

export function Home(){
  
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [pratoPrincipal, setPratoPrincipal] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);
  const [bebida, setBebida] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { signOut } = useAuth();

  function handleClickDetails(id){
    navigate(`/details/${id}`)
  };

  async function handleMyFavorites(){
    if(showFavorites){
      setShowFavorites(false);
      setFavorites([]);
    } else {
      setShowFavorites(true);
      try {
        const response = await api.get("/favorites");
        setFavorites(response.data);
        
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
    };
  };

  useEffect(() => {

    async function fetchMenu(){

      let pratoPri;
      let sobre;
      let bebi;

      const response = await api.get(`/menu?name=${search}`);

      if(favorites.length !== 0){
        
        pratoPri = favorites.filter(item => item.type === "Prato principal");
        sobre = favorites.filter(item => item.type === "Sobremesa");
        bebi = favorites.filter(item => item.type === "bebida");
  
      } else {
  
        pratoPri = response.data.filter(item => item.type === "Prato principal");
        sobre = response.data.filter(item => item.type === "Sobremesa");
        bebi = response.data.filter(item => item.type === "bebida");
        
      };
  
      setPratoPrincipal(pratoPri);
      setSobremesa(sobre);
      setBebida(bebi);
      
    };
    try {

      fetchMenu();

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

  }, [search, favorites]);
  
  return(
    <Container>
      <Header 
        onChange={e => setSearch(e.target.value)}
        onClick={handleMyFavorites}
        favorites={showFavorites}
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
            
            <MenuCards 
              key={String(item.id)}
              data={item}
              onClick={() => handleClickDetails(item.id)}
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
            
            <MenuCards 
              key={String(item.id)}
              data={item}
              onClick={() => handleClickDetails(item.id)}
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
            
            <MenuCards 
              key={String(item.id)}
              data={item}
              onClick={() => handleClickDetails(item.id)}
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