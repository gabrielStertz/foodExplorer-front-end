import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { FiChevronLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TableRowAdmin } from "../../components/TableRowAdmin";

export function OrdersAdmin(){

  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  const { signOut, isDarkModeOn } = useAuth();

  
  function handleBack(){
    navigate(-1);
  };

  useEffect(() => {
    async function fetchOrders(){
      
      try {
        await api.get("/orders-admin")
        .then(res => setOrders(res.data));
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

    fetchOrders();
  }, []);

  return (
    <Container className={isDarkModeOn ? "dark" : "light"}>
      <Header isAdmin/>
      <main>
      <div className="title">
        <h1>Pedidos</h1>
        <button onClick={handleBack}><FiChevronLeft/>Voltar</button>
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
              orders &&
              orders.map(order => (
                <TableRowAdmin 
                  key={String(order.id)}
                  data={order}
                />
              ))
            }
            </tbody>  
        </table>        
        </main>      
      <Footer/>
    </Container>
  );
};