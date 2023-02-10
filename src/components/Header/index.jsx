import { useNavigate } from "react-router-dom";

import { Container } from "./style";
import { useAuth } from "../../hooks/auth";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import { HeaderInput } from "../HeaderInput";
import { Button } from "../Button"

export function Header({isAdmin, onChange}){

  const navigate = useNavigate();

  const { signOut } = useAuth();

  function handleClickOrders(){
    
    navigate("/orders")
  };

  function handleAddMenu(){
    navigate("/add");
  };

  if(isAdmin){
    return (
      <Container>
        <div className="isAdmin">
        <div className="logo">
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
          </svg>
          <p>food explorer</p>
        </div>
        <p>Administrador</p>
        <HeaderInput
          icon={FiSearch}
          onChange={onChange}
          placeholder="Busque pelas opções de pratos"
        />
        <Button
          onClick={handleAddMenu}
          className="add-menu"
          title="Adicionar prato"
        />
        <Button
          className="orders"
          title="Acompanhar pedidos"
          onClick={handleClickOrders}
        />
        <button 
          type="button" 
          className="logOut" 
          onClick={() => {
            signOut();
            navigate("/");
          }}
        >
          <FiLogOut size={22}/>
        </button>
        </div>
      </Container>
    );
  } else {
  return (
    <Container>
      <div className="isNotAdmin">
      <div className="logo">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
        </svg>
        <p>food explorer</p>
      </div>
      <button type="button" className="favorites">
        Meus favoritos
      </button>
      <HeaderInput 
        icon={FiSearch}
        onChange={onChange}
        placeholder="Busque pelas opções de pratos"
      />
      <Button
        onClick={handleClickOrders}
        className="orders"
        icon={TfiReceipt}
        title="Meu pedido (0)"
      />
      <button 
        type="button" 
        className="logOut" 
        onClick={() => {
          signOut();
          navigate("/");
        }}
      >
        <FiLogOut size={22}/>
      </button>
      </div>  
    </Container>
  );
  }
};