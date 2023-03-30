import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { FiChevronLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TableRow } from "../../components/TableRow";

export function OrdersHistoric(){

  const navigate = useNavigate();

  const { signOut, order, isDarkModeOn } = useAuth();

  const [orders, setOrders] = useState([]);

  function handleBack(){
    if(order.length === 0){
      navigate("/");
    } else {
      navigate(-1);
    };
  };

  useEffect(() => {
    
    async function fetchOrders(){
      try {
        const response = await api.get("/orders")
        
        setOrders(response.data);
        
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
      }
    };

    fetchOrders();
  }, []);
  
  return (
    <Container className={isDarkModeOn ? "dark" : "light"}>
      <Header/>
      <main>
      <div className="title">  
        <h1>Pedidos</h1>
        <button className="back" onClick={handleBack}><FiChevronLeft/>Voltar</button>
      </div>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => (
                <TableRow key={String(order.id)} data={order}/>
            
              ))
            }
          </tbody>  
        </table>
        </main>  
      <Footer/>
    </Container>
  );
};