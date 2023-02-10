import { Routes, Route } from "react-router-dom";

import { HomeAdmin } from '../pages/HomeAdmin';
import { OrdersAdmin } from '../pages/OrdersAdmin';
import { AddMenu } from '../pages/AddMenu';

export function AdmRoutes(){

  return(
    <Routes>
      <Route path="/" element={<HomeAdmin/>}/>
      <Route path="/orders" element={<OrdersAdmin/>}/>
      <Route path="/add" element={<AddMenu/>}/>
      {/* <Route path="/add" element={<AddMenu/>}/> */}
    </Routes>
  );
};