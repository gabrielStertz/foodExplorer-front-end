import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container } from "./style";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

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
  const [isAdd, setIsAdd] = useState(true);

  const navigate = useNavigate();

  const { signOut } = useAuth();

  const params = useParams();

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredient(ingredientDeleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
  };

  async function fetchMenuItem(){
    let response;
    try {
      response = await api.get(`/menu/${params.id}`);
        
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

    setName(response.data.name);
    setType(response.data.type);
    setIngredients([]);
    response.data.ingredients.map(ingredient => {
      setIngredients(prevState => [...prevState, ingredient.name]);
    });
    setPrice(response.data.price);
    setDescription(response.data.description);
    
  };

  useEffect(() => {
    if(params.id){
      setIsAdd(false);

      fetchMenuItem();
      
    };
  }, []);

  async function handleAddMenu(e){

    let menuItem;
    let menu_id;

    e.preventDefault();
    
    
    if(!name || !type || !ingredients || !price || !description){
      return alert("Preencha todos os campos!");
    };
    if(isAdd){
      if(!picture){
        return alert("Adicione uma imagem para o prato");
      };
    };
    if(newIngredient){
      return alert("Há um ingrediente que não foi adicionado.");
    };
    
      const fileUploadForm = new FormData();
    
      fileUploadForm.append("picture", picture);
    
    

    if(isAdd){
      
      await api.post("/menu", { name, type, description, price, ingredients})
      .then(async () => {
        
          menuItem = await api.get(`/menu?name=${name}`);
          menu_id = menuItem.data[0].id;
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
    } else {
      await api.patch(`/menu/${params.id}`, { name, type, description, price, ingredients})
      .then(async () => {
        if(picture){
          menuItem = await api.get(`/menu?name=${name}`);
          menu_id = menuItem.data[0].id;
          await api.patch(`/menu/picture/${menu_id}`, fileUploadForm);
        }  
      })
      .then(() => {
        alert("Prato Editado com sucesso");
        navigate(-1);
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        } else {
         alert("Não foi possível cadastrar");
        };
      });
    };
  };

  async function handleDelete(e){
    e.preventDefault();
    
    const confirm = window.confirm("Deseja realmente excluir o prato?");

    if(confirm){

      try {
        await api.delete(`/menu/${params.id}`);
        
      } catch (error) {
        if(error.response){
          alert(error.response.data.message);
        } else {
         alert("Não foi possível cadastrar");
        };
      };
    };
    alert("Prato excluído com sucesso");
    navigate(-1);
  };

  function handleBack(){
    navigate(-1);
  };

  return (
    <Container>
      <Header isAdmin/>
      <button id="back" onClick={handleBack}><FiChevronLeft size={16}/> voltar</button>
      <h1>{isAdd ? "Adicionar prato" : "Editar prato"}</h1>
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
          {!isAdd ? <button onClick={e => handleDelete(e)}>Excluir prato</button> : <div/>}
          <button id="add" onClick={e => handleAddMenu(e)}>{isAdd ? "Adicionar prato" : "Editar prato"}</button>
        </div>
      </form>
      <Footer/>
    </Container>
  );
};