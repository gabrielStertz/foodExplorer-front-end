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
  const [canGoBack, setCanGoBack] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [total, setTotal] = useState("");

  const navigate = useNavigate();

  const { 
    order, 
    clearOrder, 
    signOut, 
    storedOrderConfirmed, 
    addOrderConfirmation, 
    removeOrderConfirmation, 
    orderId, 
    addOrderId, 
    removeOrderId, 
    isDarkModeOn 
  } = useAuth();
  
  async function handleClickPix(){
    setPix(true);
    setCredit(false);
    
    setIsPaymentDisabled(true);
    setTimeout(() => {
      setCanGoBack(false);
      setIsPaid(true);
      setIsOrderHistoricDisabled(false);
    }, 1000);
  };

  async function handleClickCredit(){
    setPix(false);
    setCredit(true);
    
    setIsPaymentDisabled(true);
  };

  function handleClickPayCredit(){
      setCanGoBack(false);
      setIsPaid(true);
      setIsOrderHistoricDisabled(false);
  };

  function handleOrderHistoric(){
    navigate("/order-historic");
  };

  function handleBack(){
    if(storedOrderConfirmed){
      clearOrder();
      removeOrderConfirmation();
      removeOrderId();
    };
    navigate("/");
  };

  async function handleOrderConfirmation(){
    const response = await api.post("/orders", { order_menu_list: order });
    
    addOrderId(response.data.order_id[0]);
    addOrderConfirmation();
    setIsPaymentDisabled(false);
    setCanGoBack(true);
  };

  async function verifyOrderStatus(){
    if(orderId !== 0){
      const order = await api.get(`/orders/${orderId}`);
      const orderPaid = await api.get(`/order-payment/${orderId}`);
      setIsOrderHistoricDisabled(!storedOrderConfirmed);
      if(order.data.status === "Entregue"){
        setIsDelivered(true);
      };
      if(orderPaid.data.paid === "true"){
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
    <Container className={isDarkModeOn ? "dark" : "light"}>
      <Header/>
      <main>
        <div className="buttons-back-orderHistoric">
          <button disabled={canGoBack} onClick={handleBack}><FiChevronLeft/>Voltar</button>
          <button disabled={isOrderHistoricDisabled} onClick={handleOrderHistoric}>Acompanhar pedido<FiChevronRight/></button>
        </div>
        <div className="geral">
          <div className="order">
          <div className="order-title">
            <h1>Meu pedido</h1>
          </div>
          <div className="order-body">
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
          </div>
          <div className="pay">
            <h1>Pagamento</h1>
            <div className="pay-box">
              <div className="content">
                <div className="pay-method">
                  <button disabled={isPaymentDisabled} className="pix" onClick={handleClickPix} style={{background: pix ? "rgba(255, 255, 255, 0.05)" : "transparent"}}>
                    <Pix/>
                  </button>
                  <button disabled={isPaymentDisabled} onClick={handleClickCredit} style={{background: credit ? "rgba(255, 255, 255, 0.05)" : "transparent"}}>
                    <AiOutlineCreditCard size={20}/>
                    Crédito
                  </button>
                </div>
                <div className="pay-info">
                  <PayInfo onClick={handleClickPayCredit} delivered={isDelivered} isPaid={isPaid} isPix={pix} isCredit={credit}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </Container>
  );
};