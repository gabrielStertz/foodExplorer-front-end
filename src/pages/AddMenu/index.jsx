import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Container } from "./style";

import { api } from "../../services/api";

import { FiChevronLeft, FiDownload } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredients } from "../../components/Ingredients";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/text-area";

export function AddMenu(){

  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [type, setType] = useState("Prato principal");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredient(ingredientDeleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
  };

  async function handleAddMenu(e){

    e.preventDefault();
    
    const fileUploadForm = new FormData();
    
    fileUploadForm.append("picture", picture);
    
    
    if(!name || !type || !ingredients || !price || !description){
      return alert("Preencha todos os campos!");
    };

    const response = await api.post("/menu", { name, type, description, price, ingredients})
    .then(async () => {
      
      const menuItem = await api.get(`/menu?name=${name}`);
      const menu_id = menuItem.data[0].id;
      await api.patch(`/menu/picture/${menu_id}`, fileUploadForm);
    
    })
    .then(() => {
      alert("Prato cadastrado com sucesso!");
      setPicture(null);
      setName("");
      setType("Prato principal");
      setIngredients([]);
      setPrice("");
      setDescription("");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      };
    });
  };

  function handleBack(){
    navigate("/");
  };

  return (
    <Container>
      <Header isAdmin/>
      <button id="back" onClick={handleBack}><FiChevronLeft size={16}/> voltar</button>
      <h1>Editar prato</h1>
      <form>
        <div className="picture-name-type">
          <div className="picture-item">
            <p>Imagem do prato</p>
            <input 
              type="file" 
              name="picture" 
              id="picture" 
              className="inputPicture"
              onChange={e => setPicture(e.target.files[0])}
            />
            <label htmlFor="picture"><FiDownload size={20}/>{picture ? picture.name : "Selecione a imagem"}</label>
          </div>
          <div className="form-item">
            <Input
              title="Nome"
              value={name}
              placeholder="Ex.: Salada Ceazar"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-item select-item">
            <p>Tipo</p>
            <div className="select" id="select">
              <select 
                id="select-standard"
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value="Prato principal">Prato principal</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
              <span className="focus"></span>
            </div>
          </div>
        </div>
        <div className="ingredients-price">
          <div className="p-ingredients">
          <p>Ingredientes</p>
          <div className="form-item ingredients-item">
            {
              ingredients.map((ingredient, index) =>(
                <Ingredients
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))
            }
            <Ingredients
              placeholder="Adicionar"
              isNew
              value={newIngredient}
              onChange={e => setNewIngredient(e.target.value)}
              onClick={handleAddIngredient}
            />
          </div>
          </div>
          <div className="form-item price-item">
            <Input
              title="Preço"
              value={price}
              placeholder="R$ 00,00"
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="description">
        <div className="form-item">
            <p>Descrição</p>
            <TextArea 
              id="description"
              value={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="button">
          <button id="add" onClick={e => handleAddMenu(e)}>Adicionar pedido</button>
        </div>
      </form>
      <Footer/>
    </Container>
  );
};