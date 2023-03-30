import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "./style";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { IngredientsCard } from "../../components/IngredientsCard";

export function Details(){

  const { addOrder, isDarkModeOn } = useAuth();
  
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [pictureUrl, setPictureUrl] = useState();
  const [mode, setMode] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  function handleAddQuantity(){
    setQuantity(quantity + 1);
  };

  function handleRemoveQuantity(){
    setQuantity(quantity - 1);
  };

  function handleIncludeOrder(id){
    for(let i = 0; i < quantity; i++){
      addOrder(id);
    };
  };

  function handleBack(){
    navigate(-1);
  };

  useEffect(() => {
    async function fetchMenuItem(){
      const response = await api.get(`/menu/${params.id}`);
      
      setData(response.data);
        
      setPictureUrl(`${api.defaults.baseURL}/files/${response.data.picture}`);
    };
    fetchMenuItem();
    setMode(isDarkModeOn);
  }, []);

  return (
    <Container className={mode ? "dark" : "light"}>
      <Header/>
      <main>
        <button className="back-button" onClick={handleBack}><FiChevronLeft/> voltar</button>
        {
          data &&
          <div className="geral">
          <img src={pictureUrl} alt="imagem do prato" />
          <div className="information">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div className="ingredients">
              {
                data.ingredients &&
                data.ingredients.map(ingredient => (

                  <IngredientsCard 
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                  />
                ))
              }
              
            </div>
            <div className="price-and-buttons">
              <p>{data.price}</p>
              <div>
                <button onClick={handleRemoveQuantity}><FiMinus size={20}/></button>
                <span>{quantity}</span>
                <button onClick={handleAddQuantity}><FiPlus/></button>
              </div>
              <Button onClick={() => handleIncludeOrder(data.id)} title="incluir" icon={TfiReceipt}/>
            </div>
          </div>
          </div>
        }
      </main>  
      <Footer/>
    </Container>
  );

};