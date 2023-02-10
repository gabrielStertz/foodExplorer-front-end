import { Container } from "./style";

export function Input({title, value, placeholder, onChange, type = "text", ...rest}){


  return(
    <Container {...rest}>
      <p>{title}</p>
      <input value={value} type={type} onChange={onChange} placeholder={placeholder}/>
    </Container>
  );
};