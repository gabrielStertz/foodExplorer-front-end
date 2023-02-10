import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Orders } from '../pages/Orders';
import { OrderDetails } from '../pages/OrderDetails';

export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/order-details/:id" element={<OrderDetails/>}/>
    </Routes>
  );
};