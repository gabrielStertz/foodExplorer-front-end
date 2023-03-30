import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

export function Input({title, value, placeholder, onChange, type = "text", ...rest}){

  const { isDarkModeOn } = useAuth();

  return(
    <Container className={isDarkModeOn ? "dark" : "light"} {...rest}>
      <p>{title}</p>
      <input value={value} type={type} onChange={onChange} placeholder={placeholder}/>
    </Container>
  );
};