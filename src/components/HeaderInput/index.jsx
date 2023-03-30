import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

export function HeaderInput({icon: Icon, ...rest}){

  const { isDarkModeOn } = useAuth();
  
  return(
    <Container className={isDarkModeOn ? "dark" : "light"}>
        {Icon && <Icon size={20}/>}
        <input {...rest}/>
    </Container>
  );
};