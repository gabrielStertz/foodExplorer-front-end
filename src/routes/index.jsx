import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdmRoutes } from "./adm.routes";

export function Routes(){
  const { user } = useAuth();

  let element;

  if(user){
    if(user.is_admin === "true"){
      element = <AdmRoutes/>;
    } else {
      element = <AppRoutes/>;
    };
  } else {
    element = <AuthRoutes/>;
  };
  return(
    <BrowserRouter>
      { element }
    </BrowserRouter>
  );
};