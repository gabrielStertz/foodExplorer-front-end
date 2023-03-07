import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { OrdersHistoric } from '../pages/OrdersHistoric';
import { Order } from '../pages/Order';

export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/order-historic" element={<OrdersHistoric/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
  );
};