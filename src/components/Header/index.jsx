import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { TfiReceipt } from "react-icons/tfi";

import { HeaderInput } from "../HeaderInput";
import { Button } from "../Button"

export function Header({isAdmin, onChange, onClick, favorites = false}){

  const navigate = useNavigate();

  const [orderQuantity, setOrderQuantity] = useState(0);

  const { signOut, order, clearOrder } = useAuth();

  function handleClickOrders(){

    if(order.length === 0){
      navigate("/order-historic");
    } else {
      navigate(`/order`);
    };
  };

  function handleClickOrdersAdmin(){
    navigate("/orders");
  };

  function handleAddMenu(){
    navigate("/add");
  };

  function handleLogOut(){
    clearOrder();
    signOut();
    navigate("/");
  };

  useEffect(() => {
    setOrderQuantity(order.length);
  }, [order]);

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
          onClick={handleClickOrdersAdmin}
        />
        <button 
          type="button" 
          className="logOut" 
          onClick={handleLogOut}
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
      <button onClick={onClick} type="button" className="favorites">
        {favorites ? "Mostrar todos" : "Meus favoritos"}
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
        title={`Meu pedido (${orderQuantity})`}
      />
      <button 
        type="button" 
        className="logOut" 
        onClick={handleLogOut}
      >
        <FiLogOut size={22}/>
      </button>
      </div>  
    </Container>
  );
  }
};