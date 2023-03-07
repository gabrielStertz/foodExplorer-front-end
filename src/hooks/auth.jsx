import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }){

  const [data, setData] = useState({});
  const [order, setOrder] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState(0);

  async function signIn({ email, password }){

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível acessar")
      };
    };
  };

  function signOut(){
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    setData({});
  };

  function addOrder(id){

    setOrder(prevState => [...prevState, id]);

    localStorage.setItem("@foodexplorer:order", JSON.stringify(order));

  };

  function addOrderConfirmation(){

    setOrderConfirmed(true);

    localStorage.setItem("@foodexplorer:orderconfirmed", JSON.stringify(orderConfirmed));

  };

  function addOrderId(id){

    setOrderId(id);

    localStorage.setItem("@foodexplorer:order-id", JSON.stringify(orderId));

  };

  function removeOrder(id){
    let count = 0;
    
    const orderPrevFilter = order;
    const orderAfterFilter = orderPrevFilter.filter(item => {
      if(item !== id || count !== 0){
        return true;
      } else {
        count = count + 1;
        return false;
      };
    });
    setOrder(orderAfterFilter);
    
    localStorage.setItem("@foodexplorer:order", JSON.stringify(orderAfterFilter));
  };

  function removeOrderConfirmation(){
    localStorage.removeItem("@foodexplorer:orderconfirmed");

    setOrderConfirmed(false);
  };

  function removeOrderId(){
    localStorage.removeItem("@foodexplorer:order-id");

    setOrderId(0);
  };

  function clearOrder(){
    localStorage.removeItem("@foodexplorer:order");

    setOrder([]);
  };

  useEffect(() =>{
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");
    const orderLocal = localStorage.getItem("@foodexplorer:order");
    const orderIdLocal = localStorage.getItem("@foodexplorer:order-id");
    const orderConfirmedLocal = localStorage.getItem("@foodexplorer:orderconfirmed");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    };

    if(orderLocal){
      setOrder(JSON.parse(orderLocal));
    };

    if(orderIdLocal){
      setOrderId(JSON.parse(orderIdLocal));
    };

    if(orderConfirmedLocal){
      setOrderConfirmed(true);
    } else {
      setOrderConfirmed(false);
    };

  }, []);

  return(
    <AuthContext.Provider value={{ signIn, signOut, addOrder, removeOrder, clearOrder, user: data.user, order, storedOrderConfirmed: orderConfirmed, addOrderConfirmation, removeOrderConfirmation, orderId, addOrderId, removeOrderId }}>
      { children }
    </AuthContext.Provider>
  );
};

function useAuth(){
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };