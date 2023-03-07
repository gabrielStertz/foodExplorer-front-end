import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { AiOutlineCreditCard } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PayInfo } from "../../components/PayInfo";
import { OrderItem } from "../../components/OrderItem";
import { Button } from "../../components/Button";
import { Pix } from "../../components/Pix";

export function Order(){
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(false);
  const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);
  const [isOrderHistoricDisabled, setIsOrderHistoricDisabled] = useState(true);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [total, setTotal] = useState("");

  const navigate = useNavigate();

  const { order, clearOrder, signOut, storedOrderConfirmed, addOrderConfirmation, removeOrderConfirmation, orderId, addOrderId, removeOrderId } = useAuth();
  
  async function handleClickPix(){
    setPix(true);
    setCredit(false);
    
    setIsPaymentDisabled(true);
    setTimeout(() => {
      setIsPaid(true);
      setIsOrderHistoricDisabled(false);
    }, 10000);
  };

  async function handleClickCredit(){
    setPix(false);
    setCredit(true);
    
    setIsPaymentDisabled(true);
    setTimeout(() => {
      setIsPaid(true);
      setIsOrderHistoricDisabled(false);
    }, 10000);
  };

  function handleOrderHistoric(){
    navigate("/order-historic");
  };

  function handleBack(){
    clearOrder();
    removeOrderConfirmation();
    removeOrderId();
    navigate("/");
  };

  async function handleOrderConfirmation(){
    const response = await api.post("/orders", { order_menu_list: order });
    addOrderId(response.data.orders_id[0]);
    addOrderConfirmation();
    setIsPaymentDisabled(false);
  };

  async function verifyOrderStatus(){
    if(orderId !== 0){
      const order = await api.get(`/orders/${orderId}`);
      const orderPaid = await api.get(`/order-payment/${orderId}`);
      setIsOrderHistoricDisabled(!storedOrderConfirmed);
      if(order.data.status === "Entregue"){
        setIsDelivered(true);
      };
      if(orderPaid.data[0].paid === "true"){
        setIsPaid(true);
        setIsPaymentDisabled(true);
      };
    };
  };

  function calculateTotal(){
    let preTotal = 0;

    orderData.map(item => {
      const [, priceWithComma] = item.price.split(" ");
      const price = Number(priceWithComma.replace(",", "."));

      preTotal = preTotal + price;
    });
    const stringTotal = preTotal.toFixed(2).replace(".", ",");

    setTotal(stringTotal);
  };

  useEffect(() => {calculateTotal()});

  useEffect(() => {

    async function fetchOrder(){

      try{
        const response = await api.get(`/menu`);
        const menu = response.data;

        const orderItems = [];

        for(let i = 0; i < order.length; i++){
          menu.map(item => {
            if(item.id === order[i]){
              orderItems[i] = item
            };        
          });
        };
        setOrderData(orderItems);
        verifyOrderStatus();
      } catch (error){
        if(error.response.data.message === "JWT Token inválido"){
          removeOrderConfirmation();
          removeOrderId();
          clearOrder();
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

    fetchOrder();
  }, [order]);

  return (
    <Container>
      <Header/>
      <div className="geral">
        <div className="order">
          <button onClick={handleBack}><FiChevronLeft/>Voltar</button>
          <h1>Meu pedido</h1>
          <div className="order-items">
            {
              orderData.map((item, index) => (
                <OrderItem 
                  key={String(index)}
                  data={item}
                />
              ))
            }
          </div>
          <div className="total-confirm">
            <p className="total">{`Total: R$ ${total}`}</p>
            <Button
              title={storedOrderConfirmed ? "Pedido confirmado" : "Confirmar pedido"}
              onClick={handleOrderConfirmation}
              disabled={storedOrderConfirmed}
            />
          </div>
        </div>
        <div className="pay">
          <div className="pay-title">
            <h1>Pagamento</h1>
            <button disabled={isOrderHistoricDisabled} onClick={handleOrderHistoric}>Acompanhar pedido<FiChevronRight/></button>
          </div>
          <div className="content">
            <div className="pay-metod">
              <button disabled={isPaymentDisabled} className="pix" onClick={handleClickPix} style={{background: pix ? "rgba(255, 255, 255, 0.05)" : "transparent"}}>
                <Pix/>
              </button>
              <button disabled={isPaymentDisabled} onClick={handleClickCredit} style={{background: credit ? "rgba(255, 255, 255, 0.05)" : "transparent"}}>
                <AiOutlineCreditCard size={20} color="#ffffff"/>
                 Crédito
              </button>
            </div>
            <div className="pay-info">
              <PayInfo delivered={isDelivered} isPaid={isPaid} isPix={pix} isCredit={credit}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
};